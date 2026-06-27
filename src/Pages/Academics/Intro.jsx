import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Intro = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Introduction</h1>
      <p className="mb-4">
        Message from the <b>General Secretary, Academic Affairs (UG):</b>
      </p> 
      <p className="mb-4">
        Dear IITB 2026 Admits,
        <br/>
        On behalf of the Academic Council, I would like to extend a very warm welcome to all of you to IIT Bombay.
        <br/><br/>
        Academics is something that has always been central to your lives. It is what has brought you here, and it will continue to be the defining aspect of this journey as well as the journey beyond. At the same time, IIT Bombay will offer you much more than academics alone. Over the next few years, you will be exposed to new experiences, opportunities and decisions that will help you unearth your valueset and who you truly are as a person.
        <br/><br/>
        And at times, this journey may feel overwhelming. When that happens, having a few strong pillars to lean on makes all the difference. Finding people you resonate with, learning from those around you, discovering what excites you, and working towards the kind of person you aspire to be is what leads and sustains this journey.
        <br/><br/>
        Most importantly, remember that you are never alone in this journey. One of the greatest strengths of this institute is its people. Whether you need help with academics, guidance, or simply someone to talk to, your seniors, ISMP mentors and the Academic Council will always be willing to support you.
        <br/><br/>
        Congratulations on earning your place here. I hope you make the most of every opportunity, stay true to your values, and leave this institute not only with knowledge, but as a better version of yourself.<br/>
        Welcome to IIT Bombay, and I wish you all the very best for the journey ahead.

        All the best, and may you have a memorable journey.
        <br/><br/>
        <b>To Be of Service | सेवा परमो धर्म: <br/>
        Siddhant Sumit Gupta <br/>
        General Secretary, Academic Affairs (UG)<br/>
        Indian Institute of Technology, Bombay<br/>
        Powai, Mumbai - 400076<br/></b>
        <b>Email : </b><a style={{padding: '0'}} href="mailto:gsecaaug@iitb.ac.in" className="text-blue-600 underline">gsecaaug@iitb.ac.in</a>
        <br/>
        <b>UGAC Website : </b><a style={{padding: '0'}} href="https://ugac-iitb.github.io/UGAC-IITB/" target="_blank" rel="noreferrer" className="text-blue-600 underline">ugac-iitb.github.io</a>
        <br/>
        <b>Instagram : </b><a style={{padding: '0'}} href="https://www.instagram.com/ugac.iitb/" target="_blank" rel="noreferrer" className="text-blue-600 underline">insta/ugac.iitb</a>
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

