import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PixelTransition from './PixelTransition';

const TeamCarousel = ({ teamData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    // Calculate how many items are visible at once
    const getItemsPerView = () => {
        if (window.innerWidth >= 768) {
            return Math.floor(window.innerWidth / 352); // 22rem = 352px
        }
        return Math.floor(window.innerWidth / 256); // 16rem = 256px
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

    // Function to update current index based on scroll position
    const updateCurrentIndex = useCallback(() => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const scrollLeft = carousel.scrollLeft;
        const carouselWidth = carousel.clientWidth;
        const totalScrollWidth = carousel.scrollWidth;
        const itemWidth = totalScrollWidth / teamData.length;
        
        // Check if we're at the very end (last item should be active)
        const isAtEnd = scrollLeft + carouselWidth >= totalScrollWidth - 10; // 10px tolerance
        
        if (isAtEnd) {
            const newIndex = teamData.length - 1;
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
            return;
        }
        
        // Check if we're at the very beginning (first item should be active)
        if (scrollLeft <= 10) { // 10px tolerance
            if (currentIndex !== 0) {
                setCurrentIndex(0);
            }
            return;
        }
        
        // For middle positions, find the item closest to center
        const centerPosition = scrollLeft + (carouselWidth / 2);
        let closestIndex = Math.round(centerPosition / itemWidth);
        
        // Ensure index is within bounds
        closestIndex = Math.max(0, Math.min(closestIndex, teamData.length - 1));
        
        if (closestIndex !== currentIndex) {
            setCurrentIndex(closestIndex);
        }
    }, [currentIndex, teamData.length]);

    // Handle scroll events with debouncing (primary method for larger screens)
    const handleScroll = useCallback(() => {
        // Clear previous timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // Set new timeout to update index after scrolling stops
        scrollTimeoutRef.current = setTimeout(() => {
            updateCurrentIndex();
        }, 50); // Reduced debounce for more responsive updates
    }, [updateCurrentIndex]);

    // Set up scroll listener
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        carousel.addEventListener('scroll', handleScroll);
        
        return () => {
            carousel.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll]);

    // Enhanced Intersection Observer with edge case handling
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const carousel = carouselRef.current;
                if (!carousel) return;

                // Check if we're at the end or beginning first
                const scrollLeft = carousel.scrollLeft;
                const carouselWidth = carousel.clientWidth;
                const totalScrollWidth = carousel.scrollWidth;
                
                const isAtEnd = scrollLeft + carouselWidth >= totalScrollWidth - 10;
                const isAtStart = scrollLeft <= 10;
                
                if (isAtEnd) {
                    const lastIndex = teamData.length - 1;
                    if (currentIndex !== lastIndex) {
                        setCurrentIndex(lastIndex);
                    }
                    return;
                }
                
                if (isAtStart) {
                    if (currentIndex !== 0) {
                        setCurrentIndex(0);
                    }
                    return;
                }

                // For middle positions, find the most visible item
                let mostVisibleEntry = null;
                let maxVisibleArea = 0;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Calculate visible area
                        const rect = entry.boundingClientRect;
                        const carouselRect = carousel.getBoundingClientRect();
                        
                        // Calculate how much of the item is visible within the carousel
                        const visibleWidth = Math.min(rect.right, carouselRect.right) - 
                                           Math.max(rect.left, carouselRect.left);
                        const visibleArea = visibleWidth * rect.height;
                        
                        if (visibleArea > maxVisibleArea) {
                            maxVisibleArea = visibleArea;
                            mostVisibleEntry = entry;
                        }
                    }
                });

                // Update index based on the most visible item (for middle positions)
                if (mostVisibleEntry) {
                    const index = parseInt(mostVisibleEntry.target.id.split('-')[2]);
                    if (index !== currentIndex && index >= 0 && index < teamData.length) {
                        setCurrentIndex(index);
                    }
                }
            },
            {
                root: carousel,
                rootMargin: '0px',
                threshold: Array.from({length: 11}, (_, i) => i * 0.1) // 0 to 1 in 0.1 steps
            }
        );

        // Observe all carousel items
        const items = carousel.querySelectorAll('[id^="team-item-"]');
        items.forEach((item) => observer.observe(item));

        return () => {
            observer.disconnect();
        };
    }, [currentIndex, teamData.length]);

    // Update items per view on window resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(getItemsPerView());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Alternative method using carousel item IDs (if you prefer this approach)
    const scrollToItem = (index) => {
        const targetElement = document.getElementById(`team-item-${index}`);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
        }
    };

    const handleNextById = () => {
        const newIndex = Math.min(currentIndex + 1, teamData.length - 1);
        setCurrentIndex(newIndex);
        scrollToItem(newIndex);
    };

    const handlePrevById = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        setCurrentIndex(newIndex);
        scrollToItem(newIndex);
    };

    // Handle direct dot click
    const handleDotClick = (index) => {
        setCurrentIndex(index);
        scrollToItem(index);
    };

    return (
        <div className="w-full">
            {/* Carousel */}
            <div 
                ref={carouselRef}
                className="carousel rounded-box w-full"
            >
                {teamData.map((member, index) => (
                    <div 
                        id={`team-item-${index}`}
                        className="carousel-item md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2" 
                        key={member.name}
                    >
                        <div className="card rounded-2xl shadow-lg shadow-gray-500 w-full h-full border-2 border-black">
                            <PixelTransition
                                firstContent={
                                    <figure className="h-full">
                                        <img
                                            loading='lazy'
                                            src={`${import.meta.env.BASE_URL}${member.link}`}
                                            alt={member.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </figure>
                                }
                                secondContent={
                                    <div className="w-full h-full grid place-items-center bg-[#111]">
                                        <p className="text-center md:text-sm h-full text-white p-4 flex items-center text-[12px] italic">
                                            "{member.caption}"
                                        </p>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor='#ffffff'
                                animationStepDuration={0.2}
                            />
                            <div className="card-body">
                                <h2 className="card-title text-center justify-center">{member.name}</h2>
                                <p className="text-center">{member.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={handlePrevById}
                    disabled={currentIndex === 0}
                    className="btn btn-circle btn-outline hover:btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Previous team member"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Progress indicator */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 font-medium">
                        {currentIndex + 1} / {teamData.length}
                    </span>
                </div>

                <button
                    onClick={handleNextById}
                    disabled={currentIndex === teamData.length - 1}
                    className="btn btn-circle btn-outline hover:btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Next team member"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Alternative: Dot indicators */}
            <div className="flex justify-center mt-4 gap-2">
                {teamData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            currentIndex === index
                                ? 'bg-primary scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to team member ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamCarousel;