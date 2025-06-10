import { useEffect } from 'react';
import { useNavigationType, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH (not POP, which happens on back/forward nav)
    if (navType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [location, navType]);

  return null;
};

export default ScrollToTop;
// This component listens for navigation changes and scrolls to the top of the page