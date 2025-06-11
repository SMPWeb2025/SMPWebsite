import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Departments = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Departments</h1>
      <p className="mb-4">
        <em>A short introduction to various departments, Department Activities and Alumni</em>
      </p>
      <p className="mb-4">
        This site is meant for you, the future entrants into the IITs, to get an idea of what the different branches actually do and what engineering/sciences really involve. We, the students of IIT Bombay, have prepared this material describing the programmes offered at IIT Bombay based on our experience here. The description of each programme is focused on how it is structured at IIT Bombay and the nature of similar programmes offered at other colleges might be different. To get an in-depth description of all the departments and programmes, do check out the individual websites of each IIT.
      </p>
      <p className="mb-4">
        Please note that this information is NOT officially endorsed by IIT Bombay and merely represents the opinions of the students who have contributed to it.
      </p>
      <p className="mb-4">
        <b>If you have any doubts, please feel free to post your questions at the bottom of the respective department pages. If you have any other general questions you can post them here.</b>
      </p>
      <p className="mb-4">
        <b>Humble Appeal :</b> Many students have fallen bait to the practice of blindly following the cutoffs of the previous years and have ended up disliking the branch that they choose. We hope YOU, the future IITian will make judicious use of this initiative and make an informed choice!
      </p>
      {/* Incomplete Department Pages! */}
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default Departments

