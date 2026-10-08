import React from "react";
import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";


const within6km = [
    "Powai Dormitory", "Shahana Guest House", "Hotel Blue Ocean", "Veridical Hospitality",
    "Hotel Golden Tulipz", "Mumbai Holiday Home", "Qubestay Airport Capsule Hotel & Hostel",
    "Hotel Spring Hill Powai", "Oxford hotel", "The United Hotel", "Hotel Royal Orbit",
];
const within10km = [
    "New Ram Niwas Lodging House", "Imperial Guest House", "Hotel Raj Jog",
    "Ganesh Palace Pvt. Ltd.", "Jasneel Hotels Pvt Ltd", "Pravasi", "Neo Lodge",
    "New Haven Guest House", "Hotel Subhash", "Platinum Bhagat Singh Apartment",
    "Hotel Sahar International", "Hotel Imperial Palace",
];


const Accomodation = () => {
    const { t } = useTranslation("accomodation");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("title")}</h1>
        <p className="mb-4">{t("intro")}</p>
        <p className="mb-4">
            <span className="bg-yellow-200">
                <b>{t("parentNote.label")}</b>{' '}
                <Trans i18nKey="parentNote.body" t={t} components={{ bold: <b /> }} />
            </span>
        </p>
        <h1 className="text-4xl font-bold mb-5">{t("batchNote")}</h1>
        <h2 className="text-xl font-bold mb-2">{t("nearbyHeading")}</h2>
        <p className="mb-4">{t("nearbyIntro")}</p>

       <p className="mb-4">
            <b>{t("within6kmLabel")}</b><br />
            {within6km.map((hotel) => (<React.Fragment key={hotel}>{hotel}<br /></React.Fragment>))}
        </p>

        <p className="mb-4">
            <b>{t("within10kmLabel")}</b><br />
            {within10km.map((hotel) => (<React.Fragment key={hotel}>{hotel}<br /></React.Fragment>))}
        </p>

        <p className="mb-4">
            <b>{t("disclaimer.label")}</b>{t("disclaimer.body")}</p>

        <p className="mb-4">{t("guestOptionsIntro")}</p>

        <h1 className="text-4xl font-bold mb-5">{t("firstYearAfterOrientation")}</h1>
        <h2 className="text-xl font-bold mb-2">{t("guestHouseHeading")}</h2>
        <p className="mb-4">{t("bookingIntro")}</p>
        <p className="mb-4">{t("guestHouseCountLabel")}<br />{t("jalVihar")}<br />{t("vanVihar")}</p>
        <p className="mb-4">{t("roomDetails")}</p>
        <p className="mb-4">{t("visitWebsite")}<br />
            <Link to="http://guesthouse.iitb.ac.in/index.html" target="_blank" className="text-blue-600 hover:underline p-0!">http://guesthouse.iitb.ac.in/index.html</Link>
        </p>
        <h2 className="text-xl font-bold mb-2">{t("roomBookingHeading")}</h2>
        <p className="mb-4">{t("limitedCapacityNote")}</p>

        <h2 className="text-lg font-semibold mb-2">{t("chargesHeading")}</h2>
        <p className="mb-4">{t("chargesBody")}</p>
        <h2 className="text-lg font-semibold mb-2">{t("bookingHeading")}</h2>
        <p className="mb-4">{t("bookingBody")}</p>
        <h2 className="text-lg font-semibold mb-2">{t("officeHoursNote.label")}</h2>
        <p className="mb-4">{t("officeHoursNote.body")}</p>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default Accomodation;