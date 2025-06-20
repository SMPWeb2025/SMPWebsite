import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Intro = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Introduction</h1>
      <p className="mb-4">
        Message from the General Secretary, Academic Affairs (UG):
      </p> 
      <p className="mb-4">
        Dear IITB 2025 Admits,
        <br/><br/>
        Welcome to IIT Bombay!
        <br/>
        We hope you are looking forward to the academic and personal odyssey that awaits you. It will be very different from what you've been used to so far, but the honesty and commitment that you forged through your preparation for JEE will remain your most valuable assets — don't let that go.
        <br/><br/>
        As students of this nation's finest engineering college, you now have a special responsibility. If the graduates of IIT Bombay are not going to help India advance technologically, then who will? The country awaits your work with hope, and your time here is a chance to prepare yourself to fulfil that hope with purpose and integrity.
        <br/><br/>
        IIT Bombay provides a phenomenal array of opportunities in academics, research, innovation, and leadership. It is your responsibility to exploit them to the fullest. And if at any point the sheer number of options seems daunting, do not be afraid to contact us. Your mentors and the Undergraduate Academic Council are always here to support you — our contact details are provided below.
        <br/>
        <br/>
        All the best, and may you have a memorable journey.
        <br/><br/>
        <b>To Be of Service | सेवा परमो धर्म: <br/>
        Kartik Shilpi Singhal<br/>
        General Secretary, Academic Affairs (UG)<br/>
        Indian Institute of Technology, Bombay<br/>
        Powai, Mumbai - 400076<br/></b>
        <a style={{padding: '0'}} href="mailto:gsecaaug@iitb.ac.in" className="text-blue-600 underline">gsecaaug@iitb.ac.in</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a style={{padding: '0'}} href="mailto:isaaug@iitb.ac.in" className="text-blue-600 underline">isaaug@iitb.ac.in</a>
        <br/>
      </p>
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default Intro

