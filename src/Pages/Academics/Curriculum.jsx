import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Content = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Curriculum</h1>
      <p className="mb-4">
        The undergraduate curriculum at IIT Bombay is modelled after the curricula of the best universities in the world, and is truly one of the most exciting and versatile in India. It blends flexibility with academic rigor, allowing students to take up courses of their own choice, both within and outside their departments, apart from completing a certain minimum requirement of “core” courses.
        <br/><br/>
        Here at IITB, the academic year is divided into two semesters, each lasting about 16 weeks. Each semester, you have to complete a certain number of credits/courses. Based on your performance, you are assigned a grade at the end of each course. The weighted average of your grade points for all the courses in a particular semester gives your Semester Performance Index (SPI). The weighted average of these SPIs gives your Cumulative Performance Index (CPI).
        <br/><br/>
        The institute expects a minimum attendance requirement from the students (80%) for the courses. So make sure to be regular for classes!
        <br/><br/>
        The B.Tech students have the option of completing a certain number of these elective courses in their own department and earn a ‘B.Tech. with Honors’ degree. Honor courses give a better idea about your subject and discipline.
        <br/><br/>
        The most exciting part of the system, for any student interested in exploring interests outside their department, is the concept of Minors and IDDDP. Starting from third semester, you will be allowed to take up courses in any discipline that you might happen to be interested in (say, Electrical Engineering or Biology) through their Minor courses. You can earn a Minor in a specific discipline by doing a fixed number of extra courses in that discipline.
        <br/><br/>
        If you want to pursue a Master’s level worth of education in another discipline, IIT Bombay also allows you to pursue the IDDDP option to get an MTech/MS degree in your desired department, with an extra year of thesis and course work post your BTech/BS degree’s four years. In case you want to do the same thing within your BTech/BS department, you can do so under the regular Dual Degree Programme. Both these options are great for people who want to explore outside of their core departments.
      </p>  
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default Content

