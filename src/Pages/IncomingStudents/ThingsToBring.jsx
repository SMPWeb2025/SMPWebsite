import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";
import './ThingsToBring.css'; 
const ThingsToBring = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Things to bring</h1>
        <p className="mb-4">
            This is probably the first time most of you will be moving away from home, and even for those who were away for coaching - this will be your first experience in setting up your rooms all by yourself. The rooms in the campus are typically small in size and a little tight to accommodate, a fact that often shocks/scares parents, but then it encourages two things which will really benefit you in the long run:
            <ol className="list-decimal ml-6 mt-2 mb-2">
                <li>Spending significant chunks of time away from your room (except exam times :D)</li>
                <li>Adjusting and all associated terms with your room-mate (who, as you will realize, might become one of the most important persons in your life)</li>
            </ol>
            <br/>
            From our experience, we bring to you a list of items - essentials and optionals.
            <br/>
            It may not be exhaustive but has most of the things. To make it easier, we've colour-coded the items for you:
            <ol style={{listStyleType: 'lower-alpha'}} className="ml-6 mt-2 mb-2">
                <li><span className="red">Red</span> - Definitely <b>must get </b>from home.</li>
                <li><span className="blue">Blue</span> - You may bring these if you already have them.</li>
                <li><span className="green">Green</span> - Best purchased from Mumbai.</li>
            </ol>
            The rest is to your discretion.
        </p>
        <h2 className="text-xl font-bold mb-2">Room necessities:</h2>
        <p className="mb-4">
            (The institute provides two cots, a table, a chair, and a cupboard, all of reasonably decent quality in every room)
            <ol className="list-decimal ml-6 mt-2 mb-2">
                <li className="mt-3"><span className="red b">Clothing + Raingear:</span> Mumbai is usually known for warm to hot summers, heavy rains, and mildly cold winters. So, carry more light summer wear. Do your packing/shopping keeping in mind that clothes do not dry quickly during the monsoons. You may choose to postpone carrying winter wear (a blanket or quilt and a pair of jackets should do just fine to keep you warm) to your Diwali break or the December holidays. Carry an umbrella and/or a raincoat and have them on you all the time during the Monsoon months. There is no dress code in the institute but you are expected to dress up decently. It's convenient to wear cargos or shorts for the rainy months. Apart from that, you are free to wear what you want - T-shirts, jeans, shorts, shirts - whatever. You might also want to get a pair of <span className="blue">traditional clothes</span>. Most departments celebrate a department traditional day in the autumn semester.
                <br/>
                Do get <span className="red">Umbrellas</span> along. Rainwear that may suffice in many other places might still not be enough to shield you from Mumbai rains.</li>
                <li className="mt-3"><span className="red b">Footwear: </span>A pair of <span className="red">slippers/floaters</span>, a pair of sandals, and a pair of <span className="red">covered shoes</span> (you would need to wear these to your labs) is recommended. Get footwear that you can use in the rain - at least one pair that won't become unusable if wet. Shoes specific to some sports might be bought after coming here. However, you may carry <span className="blue">gum soled shoes</span> and <span className="blue">football studs</span> if you have a pair already.</li>
                <li className="mt-3"><span className="blue b">Books: </span>hough you won't need books that you used for JEE Preparations, you might want to bring some standard ones if you already have them with you. Some standard textbooks used here in the first year are Thomas and Finney, Atkins, JD Lee, Solomon, etc.</li>
                <li className="mt-3"><span className="green b">Clotheslines, Hangers, Cloth hanging clips: </span>There are ropes meant for hanging clothes outside every room, but if you prefer using your rooms for drying clothes during monsoons or hanging them in the balcony, carry (or buy from here) <span className="red">some clotheslines and clothespins</span>. Hangers aren't provided in the rooms.</li>
                <li className="mt-3"><span className="red  b">Bedsheets</span>, <span className="green b">mattresses and pillows</span> and <span className="red b"> pillow covers </span>(extra set is preferable as drying is a problem in rains), Curtains (optional), Blanket or quilt (you could opt to get this after your Diwali break too, the typical cold season begins only in late November or early December and lasts into the mid of January).</li>
                <li className="mt-3"><span className="green b">Bucket, Mug, Waste Paper Bin, Soap Cases</span>: Buy them from either the many shops outside the Market/YP Gate or the temporary shacks outside Hostel 4 which are set up for a week about the time you enter.</li>
                <li className="mt-3"><span className="red b">Lock and keys</span> <span className="b">(2 sets of keys as you'd be sharing the room)</span>: Keep extra sets handy. While travelling, you might want to lock your luggage as well.</li>
                <li className="mt-3"><span className="green b">Anti-insect sprays</span>, <span className="red b">bed-bug sprays, All Out, Odomos,</span> <span className="blue b">Naphthalene Balls</span>: It is strongly suggested you keep these items with you, you will find them useful.</li>
                <li className="mt-3"><span className="blue b">Spike guard, Multiplugs</span>: You would typically have only 1 plug point per person in the room (or, in some cases, just 1 per room), so extension boards are a must. Also, the power supply is meant for 5 Ampere applications, so please do not carry any heavy electrical appliances like Irons/Heaters unless you have ensured that the current rating is not above 5A.</li>
                <li className="mt-3"><span className="green b">Broom</span>: Rooms are cleaned once a week by the House Cleaning Staff of the Hostels. The rest is your responsibility.</li>
                <li className="mt-3"><span className="b">Miscellaneous</span>: <span className="red b">Medicine kit</span> (advised, you may not want to go to the IIT Hospital for every little thing), soap, shampoo, handwash, detergent, brush, torch, etc. Sports equipment, if you play or are enthu enough (racquets, balls, proper shoes, etc) and for music enthusiasts, your own guitar, santoor, flute or tabla - anything.</li>
            </ol>
            <br/>
            The good thing about being in Mumbai is that you can buy almost everything from here at reasonable prices (if you know where to look). Don't hesitate to ask seniors - their opinion is invaluable at most times. So, don't fret if you forget to carry something. Carry the basics so that the first thing you don't have to go shopping the moment you reach Mumbai.
            <br/><br/>
            Happy Settling In!
        </p>
        <h1 className="text-4xl font-bold mb-5">Campus Checklist</h1>
        <p className="mb-4">The campus checklist mentions the absolute essentials that you need to bring/or do once onboarded.</p>
        <h2 className="text-xl font-bold mb-2">Registration</h2>
        <p className="mb-4">
            On day 1, students are supposed to bring documents specified on their admission letter. Once the document verification is done on the first day, registration for courses is done in different slots. Students are segregated according to their department and the process of online registration is carried out.
        </p>

        <h2 className="text-xl font-bold mb-2">Hospital</h2>
        <p className="mb-4">
            All students are entitled to free treatment at the IITB hospital. The students are first supposed to submit a few documents containing their previous medical record and their vaccination record. If one hasn't been administered with the specified vaccinations, there is no need to worry. The institute has regular vaccination drives where one can get this done.
        </p>

        <h2 className="text-xl font-bold mb-2">Fee Payment</h2>
        <p className="mb-4">
            As far as fee payment is concerned, incoming students are advised to open a bank account in either SBI or Canara Bank, Powai. The fee can be paid online using net banking.
        </p>

        <h2 className="text-xl font-bold mb-2">Meet the mentor assigned to you</h2>
        <p className="mb-4">
            At IITB we have an amazing mechanism of respected and well accomplished senior students in their fourth/fifth year of study guiding the freshmen through their formative years here. Together constituting the ISMP team, the mentors help the first-year students make a smooth transition from life at home to life at this institute and help in clearing out hurdles in their path. It would be advisable for you to meet the mentors when you arrive on campus for the orientation. It would be beneficial if you could also stay in touch with mentors during the course of the semester.
        </p>

        <h2 className="text-xl font-bold mb-2">Cell Phone connections and credit</h2>
        <p className="mb-4">
            There will be multiple temporary stalls inside the institute for the first few days of the session, otherwise, Airtel and Vodafone connections are easily available at the Main Gate. Reliance has a store in Hiranandani near Subway. Vodafone has a store near the Delphi Building (next to the Cafe Coffee Day outlet). For more information on recharge etc, please 
            visit <Link className="text-blue-600 hover:underline p-0!" to='/life-at-iitb/in-and-around-the-campus'>in and around campus</Link>.
        </p>

        <h2 className="text-xl font-bold mb-2">Exploring Insti</h2>
        <p className="mb-4">
            There are many places to go around the insti, including the boathouse, Sameer Hill, Lakeside, etc. We don’t want to give away too many of these :P. Explore for yourself :)
        </p>
    </>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default ThingsToBring;