import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import TeamCard from "../../Components/TeamPage/TeamCard";
import { teamData } from "../../Components/TeamPage/teamData";
import { useTranslation } from "react-i18next";

const CTO = () => {
    const { t } = useTranslation("cto");
    const ctoHead = teamData.find(member => member.designation === "Counselling, Training and Outreach Head (CTO)");

    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("title")}</h1>
        <p className="mb-4">
            {t("introduction.body")}
        </p>

        <div className="mt-6">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("head.heading")}</h2>
            <div className="flex justify-center items-center">
                {ctoHead && (
                    <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                        <TeamCard member={ctoHead} />
                    </div>
                )}
            </div>
        </div>
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default CTO;
