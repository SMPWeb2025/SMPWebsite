import "./header.css";
import video576 from './video-576p.mp4'
import video720 from './video-720p.mp4'
import { useEffect, useState } from "react";


function Header() {
  const title = "Welcome To IIT Bombay!"
  const content = `This website has been created by the Student Mentor Program to introduce incoming freshers to life at IIT Bombay. We encourage you to browse through the various sections and make an informed choice about your college and department. Though we've tried to cover most questions on this website, feel free to mail us at ismp@iitb.ac.in`

  // Smart serve video selection based on internet speed
  const [videoSrc, setVideoSrc] = useState(video720); // Default to 720p

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    const slowConnection =
      connection &&
      (connection.effectiveType === "2g" || connection.effectiveType === "3g" || connection.saveData);

    if (isMobile || slowConnection) {
      setVideoSrc(video576);
    } else {
      setVideoSrc(video720);
    }
  }, []);

  return (
    <div className="headersmp">
      <video src={videoSrc} autoPlay loop muted className="videobg" />
      <div className="headersmpContainer mt-5">
        <div className="headersmpText">
          <h1 className="mt-10 md:mt-20 lg:text-6xl md:text-4xl text-2xl">{title}</h1>
          <h3 className="w-3/4 mx-auto text-sm md:text-2xl">
            {content}
          </h3>
        </div>
        <div className="headersmpBtn">
          <button className="btnsmp" type="button">
            <span className="circlesmp"></span>
            <span className="arrowsmp"></span>
            <span className="textsmp">Learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
