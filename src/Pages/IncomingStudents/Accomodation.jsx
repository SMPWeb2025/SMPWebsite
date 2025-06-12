import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";
const Accomodation = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Accommodation Available</h1>
        <p className="mb-4">
            It is true that the guest houses at IIT Bombay are extremely pocket-friendly and are known for their cozy atmosphere, but booking needs to be done quite in advance as they are rarely available and the procedure for the same is also pretty long!
        </p>
        <p className="mb-4">
            <b>Note:</b> For first year students coming to campus with their parents/guardians, guesthouse and hostel booking is <b>not allowed</b> during the orientation period. You are requested to find accommodation for your parents/family members/guardians off-campus during that time.
        </p>
        <h1 className="text-4xl font-bold mb-5">For Incoming batch of UG 2025-26 (during the orientation period):
        </h1>
        <h2 className="text-xl font-bold mb-2">Hotels/Guesthouses near the campus</h2>
        <p className="mb-4">
            Here’s a coveted list of hotels around the institute that are known for their good service and student-friendly rates. Check them out:
        </p>

        <p className="mb-4">
            <b>(Within 6km of IIT Bombay)</b><br />
            Powai Dormitory<br />
            Shahana Guest House<br />
            Hotel Blue Ocean<br />
            Veridical Hospitality<br />
            Hotel Golden Tulipz<br />
            Mumbai Holiday Home<br />
            Qubestay Airport Capsule Hotel & Hostel<br />
            Hotel Spring Hill Powai<br />
            Oxford hotel<br />
            The United Hotel<br />
            Hotel Royal Orbit
        </p>

        <p className="mb-4">
            <b>(Within 10km of IIT Bombay)</b><br />
            New Ram Niwas Lodging House<br />
            Imperial Guest House<br />
            Hotel Raj Jog<br />
            Ganesh Palace Pvt. Ltd.<br />
            Jasneel Hotels Pvt Ltd<br />
            Pravasi<br />
            Neo Lodge<br />
            New Haven Guest House<br />
            Hotel Subhash<br />
            Platinum Bhagat Singh Apartment<br />
            Hotel Sahar International<br />
            Hotel Imperial Palace
        </p>

        <p className="mb-4">
            <b>Disclaimer:</b> This is not an official list or sponsored list released by IIT Bombay. It is something that students at IIT Bombay have collected over the years.
        </p>

        <p className="mb-4">There are quite a few options for guest accommodation in and around IIT Bombay:</p>

        <h1 className="text-4xl font-bold mb-5">For first-year students (after orientations) and all other students:</h1>
        <h2 className="text-xl font-bold mb-2">
            IIT Bombay Guest House
        </h2>
        <p className="mb-4">
            If you are planning to book someone for an overnight stay at IIT, here's what you should know:
        </p>
        <p className="mb-4">
            IIT Bombay has 2 Guest Houses : <br />
            1) Jal Vihar (the Old Guest House) <br />
            2) Van Vihar (the New Guest House)
        </p>
        <p className="mb-4">
            The rooms in both are equally luxurious with AC rooms, a TV, Internet Connection, attached Toilets et al. Rooms are for two but unless there is a rush, can be booked for one.
        </p>
        <p className="mb-4">
            Please visit this website to access all information regarding the same:<br />
            <Link to="http://guesthouse.iitb.ac.in/index.html" target="_blank" className="text-blue-600 hover:underline p-0!">http://guesthouse.iitb.ac.in/index.html</Link>
        </p>
        <h2 className="text-xl font-bold mb-2">
            Hostel Room Booking
        </h2>
        <p className="mb-4">
            Since the Guest Houses have limited capacity and IIT Bombay hosts many dignitaries from time to time, rooms can also be booked in Hostels. However, in hostel rooms, you have to make arrangements for mattresses and other basic things on your own. Mattresses might be available for rent with the Hall Manager. We suggest you look around in your wing and you might find someone who can lend you extra mattresses if you plan on hosting someone here.
        </p>

        <h2 className="text-lg font-semibold mb-2">
            Charges
        </h2>
        <p className="mb-4">
            The charges for the room (without mattress) per night for parents are Rs. 100/- while for other guests are Rs. 300/-
        </p>
        <h2 className="text-lg font-semibold mb-2">Booking</h2>
        <p className="mb-4">
            For booking, forms are available with the Hostel Coordinating Unit (HCU) in the Main Building (MB) or you may email hcu.office@iitb.ac.in . Take the copy of the approved form from the HCU to the Hall Manager of the allotted hostel and you are done. You may later collect the key from the Hall Manager office a day prior to the arrival of guests. In emergency situations also, guests can stay in the hostel rooms after entry in the Guest Register kept with the security at hostel entrance. The formalities can be completed on the next working day.
        </p>
        <h2 className="text-lg font-semibold mb-2">Note:</h2>
        <p className="mb-4">
            The HCU or Hall Manager office is open from 9am to 5pm (with lunch break from 12-2pm) except on weekends and holidays. On Saturdays, the office is usually open in the first half. Plan accordingly. During the orientation period, neither of these might be available due to rush. It is advisable to make alternate arrangements.
        </p>
    </>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default Accomodation;