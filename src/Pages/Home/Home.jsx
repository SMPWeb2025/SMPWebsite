import Header from "../../Components/Header/Header";
import Date from "../../Components/Date/Date";
import Annoucements from "../../Components/Annoucements/Announcements";
import { Helmet } from 'react-helmet'
// import bg from "../../Components/Header/header_bg.png";
function Home() {
  return (
    <>
      <Helmet>
          <meta
          name="description"
          content="Welcome to SMP IIT Bombay!"
        />
        <meta
          name="keywords"
          content="SMP, SMP IIT Bombay, SMP IITB, SMP IIT, smp IIT, smp bombay, smp, Incoming Students, Incoming IIT Bombay, Freshers IIT, Student Mentorship Program, IIT Bombay, IITB, IIT Powai, Freshers IITB, ISMP, JEE Advanced, IIT, NewBee portal IIT, NewBee IITB"
        />
      </Helmet>
      <div>
        <Header />

        <Date />
        <div className="fixed bottom-5 right-5">
          <Annoucements />
        </div>
      </div>
    </>
    
  );
}
export default Home;
