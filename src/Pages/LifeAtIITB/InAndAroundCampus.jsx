import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const InAndAroundCampus = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">In & Around the Campus</h1>
      <p className="mb-4">
        Throughout your course here in IITB you might need various stuff from everyday items like toothpaste and soap to books for subjects. Oftentimes you would also want to detach yourself from your hectic schedule and go visit a restaurant or watch a movie. It is therefore a good idea to familiarize yourself with the various shops and places within the campus and outside it.
      </p>
      <h2 className="text-xl font-bold mb-2">Books</h2>
      <p className="mb-4">
        For buying books, we have a shop called Book World on campus on the ground floor of the Gulmohar Building where you can get discounts on course-related books. Alternatively, you could go to “Popular Book Store” at YP Gate. You can also buy second-hand books from the Jay Ambe bookshop in the lane right opposite Main Gate, next to Mahavir. He also accepts books back at the end of the semester at half the price at which they were bought.
      </p>
      <h2 className="text-xl font-bold mb-2">Daily needs</h2>
      <p className="mb-4">
        For the most basic of amenities such as toothpaste, toothbrush, pens, soaps, and other such items (which one should use daily), one can go to the hostel Xerox shop itself. Another alternative would be the Hostel 12/18 shops which stock almost everything one would need and more- from slippers to stationery to biscuits and towels. One can also go to Haiko or D-Mart in the Hiranandani Complex for these. Alternatively, the shopping complex at the Y-Point Gate can also take care of most of your needs. The YP market has a post office, a dry cleaner and a tailor and a barber as well, just in case.
      </p>
      <h2 className="text-xl font-bold mb-2">Banks and ATMs</h2>
      <p className="mb-4">
        Two major banks operate inside IITB: Canara Bank and SBI. The Canara bank branch is located on the first floor of the Gulmohar building. There are two Canara bank ATMs inside the campus. One is located on the ground floor of the Gulmohar building, while the other is located opposite hostel 7. There are two SBI ATMs as well. One is located between Hostel 5 and Tansa, while the other is right outside the main gate. On the orientation day, both banks set up temporary stalls in the lecture hall complex to ensure a smooth and hassle-free opening of accounts. Debit cards are provided on the spot as well.
      </p>
      <h2 className="text-xl font-bold mb-2">Restaurants and Eateries</h2>
      <p className="mb-4">
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>Hostel Canteens: </b>Every hostel has its own canteen, which is for most people, the go-to place for inexpensive food. Whether for a quick meal, a refreshing soft drink or a coffee when you’re up studying late, hostel canteens are the way to go! Most hostels have night canteens, with some excellent food.</li>
            <li className="mb-2"><b>Eateries within the institute:</b> <br/>
                <ol className="list-decimal ml-5">
                    <li className="mb-1"><b>Gulmohar Restaurant and Café: </b>Tasty food, reasonable prices and right-next-door!</li>
                    <li className="mb-1"><b>Academic area:</b> The KReSIT canteen is popular for a quick samosa-chai. Besides this, several departments have canteens of their own, like the Electrical, Civil and Chemical Engineering Buildings. There is also a staff canteen located next to the library.</li>
                    <li className="mb-1"><b>Cafe 92: </b> A go to place for some quick bites and tasty fast food servings. Perfectly situated on the lane connecting the academic area to the Main building, the store is always bustling with energy as students head out here after classes.</li>
                    <li className="mb-1"><b>Laxmi: </b> Vegetarian restaurant right outside the Main Gate.</li>
                </ol>
            </li>
            <li className="mb-2"><b>Hiranandani: </b>The posh neighborhood of Hiranandani located just down the road from IIT-B offers a plethora of options for eating out. When on a budget, head to the Galleria food court. KFC, MOD, Subway, Pizza Hut, Papa Johns, Starbucks – you name it, it’s here. Several fine-dining restaurants are also there for you to explore. Head over to Naturals, Baskin Robbins, Theobroma, Cocoberry or Haagen Dazs for dessert.</li>
        </ol>
      </p>
      <p className="mb-4">
        Mumbai offers plenty to the enthusiastic foodie, there are several great places to eat out. Best explored on your own, though we’ll get you started with some names: Barbeque Nation, Café Madras, Pizza By the Bay and Bademiya are well worth visiting.
      </p>
      <h2 className="text-xl font-bold mb-2">Doorstep Delivery</h2>
      <p className="mb-4">
        <b>Square Pizza : </b> 022-3312 6250 <br/>
        <b>Subway : </b> 022-25700034 <br/>
        <b>Laxmi : </b> 022-25770171 <br/>
        <b>Monginis :  </b> 022-25788257 <br/>
        <b>Faaso's :  </b> 022-30932023 <br/>
      </p>
      <p className="mb-4">
        For almost anything else, you always have Justdial! Just call 08888888888 and state your request. Feel free to explore Zomato and NearFox for recommendations for food and travel!
      </p>

      <h2 className="text-xl font-bold mb-2">Entertainment</h2>
      <p className="mb-4">
        
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>Cinema: </b>Want to catch a movie on the big screen? There are several cinema halls nearby like PVR (Nirmal Lifestyle, Mulund), Cinepolis (Neptune Magnet Mall, Bhandup), Inox (R-City Mall, Ghatkopar), and Carnival Huma (Kanjurmarg).</li>
            <li className="mb-2"><b>Sports:</b> Catch the spectacle Indian Cricket Team or Mumbai Indians playing at the Wankhede. Besides cricket, almost every sport has a regional team in Mumbai, including football, hockey, kho-kho, and volleyball. Head to the stadium to catch the action live!</li>
            <li className="mb-2"><b>Theatre and Music: </b> Mumbai has a vibrant theatre and music culture. For plays, Prithvi is the place to be, and it offers discounts for students on Tuesdays and Wednesdays. Keep your eyes and ears open for the next big event, and you may just be able to catch the next Coldplay concert.</li>
            <li className="mb-2"><b>Theme Parks: </b> In Mumbai, there are a number of good amusement and water parks such as Water Kingdom, Snow World, and Essel World. Adlabs Imagica and AquaMagica may be a little further away and more expensive than the others, but they rank among the best theme parks in the country.</li>
            <li className="mb-2"><b>Gaming Arcades: </b> Several malls have arcade gaming zones and bowling like the R-City Mall, Ghatkopar. Hakone (Hiranandani) offers opportunities for Go-Karting and Paintball.</li>
            <li className="mb-2"><b>Shopping: </b> There are a number of malls in Mumbai, big and small, where you can buy just about any brands you may want. Dadar, CST, and Bandra are great places for some value-for-money shopping.</li>
            <li className="mb-2"><b>Trekking and Nature: </b> Join a trek with the Adventure Club! For relaxing in nature, check out the Karnala bird sanctuary (beyond Panvel) and the Sanjay Gandhi National Park (Borivali).</li>
            <li className="mb-2"><b>Sightseeing in Mumbai: </b> Gateway of India, Marine Drive, Haji Ali, Elephanta Caves – just a few of the many things to see in Mumbai. Otherwise, you can take the evening off, and watch the sunset at the beach while sipping naariyal paani.</li>
        </ol>
      </p>
      <p className="mb-4">
        A certain obscure site called BookMyShow sells tickets to just about any event you may want to attend.
      </p>

      <h2 className="text-xl font-bold mb-2">Public Transport @ IITB</h2>
      <p className="mb-4">
        
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>Cycling: </b>One may say that they are a popular mode of transportation considering the number of cycles parked outside the hostels. However, their frequency of use often decays exponentially. But it is entirely up to you! Cycling is a quick, eco-friendly and fun way to get from point to point in the institute. Remember that maintenance of your cycle is crucial, especially in Mumbai’s rainy weather. There are two cycle repair shops on campus, one at the Market Gate and the other next to H3. A sturdy lock is also a good investment.</li>
            <li className="mb-2"><b>Walking:</b> Alumni often reminisce about the good times they had walking to the lecture halls, amongst good company and pristine greenery. It may not always be possible, but when you have the luxury of time, make the most of it!</li>
            <li className="mb-2"><b>Auto-rickshaws: </b>  Auto-rickshaws are fairly common in the institute and are used for traveling both within and outside the institute. There have been issues of rickshaws refusing to go to destinations outside, though there have been measures taken to curb this.</li>
            <li className="mb-2"><b>E-Shuttle: </b> With a seating capacity of nearly 10-12 students, E-shuttles are a popular choice for most students as they run the entire distance between the residential and academic area, charging a nominal fee of INR 10 per ride</li>
            <li className="mb-2"><b>Taxis: </b> Whether while traveling in a group, or when needing a drop to the airport, Uber and Ola have made traveling in comfort easy and economical.</li>
        </ol>
      </p>

    </>
  )
  const sidebar = navData["Life at IITB"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default InAndAroundCampus

