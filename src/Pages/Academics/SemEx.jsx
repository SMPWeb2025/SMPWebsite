import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const SemEx = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Semester - Exchange</h1>
      <p className="mb-4">
        ‘Just clear the JEE once, you’ll have fun forever’ might be a little exaggerated but if marvelling at the Eiffel Tower or basking in the breath-taking exuberance of Times Square in New York or just lying on the ground watching the Northern Lights is your idea of fun, you can surely do that here.
      </p>
      <p className="mb-4">
        IIT Bombay provides you with a once-in-a-lifetime opportunity to study abroad at universities across the globe while you’re still a student here. The institute has partnerships with a multitude of universities as part of which you can spend up to two semesters there taking up courses which you would otherwise have to finish at IIT Bombay. Another advantage? You don’t need to pay the humongous tuition fees at the foreign university!
      </p>
      <p className="mb-4">
        Apart from these numerous benefits, one notable advantage lies in the opportunity to explore a wide range of courses that would otherwise be inaccessible (and conveniently label them as electives). For instance, you can delve into challenging scientific disciplines offered in the United States or immerse yourself in the captivating world of Liberal Arts and Finance courses throughout Europe. Engaging in a research project also expands your knowledge base. Additionally, the interactive teaching methodology adds an element of enjoyment to the learning experience.
      </p>
      <p className="mb-4">
        Semester exchanges are often a life changing experience, and the perfect way to immerse yourself into a completely different culture. You get to live as a local in a new country for four months and party like you’ve never done before. Besides this, the fact that you now have friends all over the world who introduce you to their own cultures is one of the major reasons students opt to go for exchanges.
      </p>
      <p className="mb-4">
        For more information you can contact:
      </p>
      <p className="mb-4">
        <b>
        Shirsh Sawarna<br/>
        Institute Secretary | International Relations<br/>
        IIT Bombay<br/></b>
        Email: <a style={{padding: '0'}} href="mailto:isecir@iitb.ac.in" className="text-blue-600 underline">isecir@iitb.ac.in</a><br/>
        Blog : <a style={{padding: '0'}} target="_blank" href="https://exchangeblogiitb.wordpress.com" className="text-blue-600 underline">https://exchangeblogiitb.wordpress.com</a><br/>
        
      </p>
      
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default SemEx

