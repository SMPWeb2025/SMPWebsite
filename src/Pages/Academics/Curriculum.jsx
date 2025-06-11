import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Content = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Curriculum</h1>
      <p className="mb-4">
        The undergraduate curriculum at IIT Bombay is modelled after the curricula of the best universities in the world, and is truly one of the most exciting and versatile in India. It blends flexibility with academic rigor, allowing students to take up courses of their own choice, both within and outside their departments, apart from completing a certain minimum requirement of “core” courses.
      </p>
      <p className="mb-4">
        Here at IITB, the academic year is divided into two semesters, each lasting about 16 weeks. Each semester, you have to complete a certain number of credits/courses. Based on your performance, you are assigned a grade at the end of each course. The weighted average of your grade points for all the courses in a particular semester gives your Semester Performance Index (SPI). The weighted average of these SPIs gives your Cumulative Performance Index (CPI). CPI gives an overall impression of your academic performance and plays an important role in course/project allotment in later semesters, not to mention internships and placements.
      </p>
      <p className="mb-4">
        A word of caution: The institute expects a minimum attendance requirement from the students (80%) for the courses. If a student does not meet this specific requirement, the professor is fully within their rights to award them an ‘DX’ grade, in which case one will have to repeat the course. So do make it a point to be regular in all course
      </p>
      <p className="mb-4">
        In case a student is unable to achieve the minimum cut-off marks in a particular course, they receive an FF grade and are required to give a re-exam that tests their basic understanding of the course. In case they fail this exam, they receive an FR grade and if they pass it, they can receive a maximum of DD (4) grade.
      </p>
      <p className="mb-4">
        Exceptional performance in a course can even earn you the highly valued AP grade in that course. Awarded rarely to less than 1% of the class strength, it is a feather in a cap worth striving for.
      </p>
      <p className="mb-4">
        The B.Tech students have the option of completing a certain number of these elective courses in their own department and earn a ‘B.Tech. with Honors’ degree. Honor courses give a better idea about your subject and discipline.
      </p>
      <p className="mb-4">
        The most exciting part of the system, for any student interested in exploring interests outside their department, is the concept of Minors and IDDDP. Starting from third semester, you will be allowed to take up courses in any discipline that you might happen to be interested in (say, Electrical Engineering or Biology) through their Minor courses. You can earn a Minor in a specific discipline by doing a fixed number of extra courses in that discipline. Be warned that registration for Minor courses, particularly in ‘popular’ departments, is very competitive, with a seat-cap on all courses. If you are serious about your Minor ambitions, then be on your toes and maintain a good CPI right through your degree programme!
      </p>
      <p className="mb-4">
        If you want to pursue a Master’s level worth of education in another discipline, IIT Bombay also allows you to pursue the IDDDP option to get an MTech/MS degree in your desired department, with an extra year of thesis and course work post your BTech/BS degree’s four years. In case you want to do the same thing within your BTech/BS department, you can do so under the regular Dual Degree Programme. The IDDDP option is a highly exclusive one as well, and shortlisting is done on the basis of your academic credentials including previous research interest and CPI, among others.
      </p>  
      <p className="mb-4">
        Finally, if you happen to have any backlog(s), you will have to repeat (and this time around, hopefully pass) the course(s).
      </p>  
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default Content

