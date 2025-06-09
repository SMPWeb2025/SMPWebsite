import Header from "../../Components/Header/Header";
import Date from "../../Components/Date/Date";
import Annoucements from "../../Components/Annoucements/Announcements";
// import bg from "../../Components/Header/header_bg.png";
function Home() {
  return (
    <div>
      <Header />

      <Date />
      <div className="fixed bottom-5 right-5">
        <Annoucements />
      </div>
    </div>
  );
}
export default Home;
