import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import TeamCard from "../../Components/TeamPage/TeamCard";
import { teamData } from "../../Components/TeamPage/teamData";
import { useTranslation } from "react-i18next";

const ELP = () => {
    const { t } = useTranslation("elp");
    const head1 = teamData.find(member => member.name === "Mann Gabani");
    const head2 = teamData.find(member => member.name === "Samriddhi Kedia");
    const moduleItems = t("modules.items", { returnObjects: true });
    const initiativeItems = t("initiatives.items", { returnObjects: true });

    const headsSection = (heading) => (
        <div className="mt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {head1 && (
                    <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                        <TeamCard member={head1} />
                    </div>
                )}

                {head2 && (
                    <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                        <TeamCard member={head2} />
                    </div>
                )}
            </div>
        </div>
    );

    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("title")}</h1>
        <p className="mb-4">
            {t("introduction.body")}
        </p>
        <p className="mb-4">
            {t("modules.intro")}
        </p>
        <ol className="list-decimal ml-4 mb-4">
            {moduleItems.map(({ label, body }) => <li key={label}><b>{label}</b>{body}</li>)}
        </ol>
        <p className="mb-4">
            {t("initiatives.intro")}
        </p>
        <ol className="list-decimal ml-4">
            {initiativeItems.map(({ label, body }) => <li key={label}><b>{label}</b>{body}</li>)}
        </ol>

        {headsSection(t("heads.heading"))}
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default ELP;
