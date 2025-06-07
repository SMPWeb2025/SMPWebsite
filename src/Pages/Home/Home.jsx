import Header from "../../Components/Header/Header";
import Date from "../../Components/Date/Date";
import Annoucements from "../../Components/Annoucements/Announcements";
// import bg from "../../Components/Header/header_bg.png";
function Home() {
  return (
    <div>
      <Header />

      <Date />
      <Annoucements />
    </div>
  );
}
export default Home;
