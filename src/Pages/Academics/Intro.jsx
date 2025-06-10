import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Intro = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-4">Introduction</h1>
      <p className="mb-4">
        Message from the General Secretary, Academic Affairs (UG) Congratulations, and give
        yourself a round of applause, for you are the new waves in this vast ocean of possibilities...
      </p>
      <p className="mb-4">
        As an academic institution, IIT Bombay can and will teach you a lot of things during your stay here.
        The important thing is to keep your mind open and keep learning. It's truly a warehouse of
        opportunities...
      </p>
      <p className="mb-4">
        Try your best to maintain a balance between your academics and the plethora of extra-curricular activities...
      </p>
      <p className="mb-4">
        Lastly, your time is limited. You can fail even at what you don’t want, so you might as well take
        a chance on doing what you love/desire...
      </p>
      <p className="mt-8">
        Regards,<br />
        <span className="font-bold">Arjun Saikumar Simha</span><br />
        General Secretary Academic Affairs (UG)<br />
        IIT Bombay<br />
        Email:<a href="mailto:gsecaaug@iitb.ac.in" className="text-blue-600 underline">gsecaaug@iitb.ac.in</a>
      </p>
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default Intro

