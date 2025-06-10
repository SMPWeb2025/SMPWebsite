import "./header.css";
import videoBg from "./video.mp4";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function Header() {
  const title = "Welcome To IIT Bombay!"
  const content = `This website has been created by the Student Mentor Program to introduce incoming freshers to life at IIT Bombay. We encourage you to browse through the various sections and make an informed choice about your college and department. Though we've tried to cover most questions on this website, feel free to mail us at ismp@iitb.ac.in`

  return (
    <div className="headersmp">
      <video src={videoBg} autoPlay loop muted className="videobg" />
      <div className="headersmpContainer mt-5">
        <div className="headersmpText">
          <h1 className="mt-10 md:mt-20 md:text-6xl text-2xl">{title}</h1>
          <h3 className="w-3/4 mx-auto">
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
