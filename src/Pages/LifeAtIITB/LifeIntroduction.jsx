import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const LifeIntroduction = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Introduction</h1>
      <p className="mb-4">
        So once you come to IITB, your address will read something like this:
      </p>
      <p className="mb-4">
        Room # ___, Hostel __ <br/>
        IIT Bombay, Powai<br/>
        Mumbai — 400076<br/>
      </p>
      <p className="mb-4">
        Hostel life at IIT Bombay is quite an integral part of your stay here. Although for some of you, it might seem a little difficult to adjust to at first, you will soon fall in love with your new home. You can find some more information in the section on Hostels.
      </p>
      <p className="mb-4">
        As the hostels are within the campus, your entire life will be usually contained in the campus itself with the occasional outings in search of good food or for treats. Consequently, the campus is well fitted to address all of your needs, be it your daily necessities or your health. We also have a couple of guesthouses which you can avail of (probably) in case you have someone coming over to visit.
      </p>
      <p className="mb-4">
        We hope these pages answer some of your questions and give you a basic picture of the hostel life. We look forward to having you amongst us and hope that you look forward to it too.
      </p>
      <p className="mb-4">
        For more information, you can contact:
      </p>
      <p className="mb-4">
        <b>
        Vikas Swami<br/>
        General Secretary, Hostel Affairs (GSHA)<br/>
        Indian Institute of Technology, Bombay<br/>
        <a style={{padding: '0'}} href="mailto:gsecha@iitb.ac.inn" className="text-blue-600 underline">gsecha@iitb.ac.in</a><br/>
        </b>
      </p>
      <p className="mb-4">
        Here is a video showing the beautiful campus of our Institute
      </p>
       
      {/* ✅ Responsive YouTube Embed */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
        border="0"
          src="https://www.youtube.com/embed/1jYlB0xrbUw"
          title="IIT Bombay Campus Tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '85%',
            height: '90%',
            border: '0',
          }}
        />
      </div>
    </>
  )
  const sidebar = navData["Life at IITB"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Life at IITB" />
  )
}
export default LifeIntroduction

