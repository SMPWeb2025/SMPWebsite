import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Media = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">
            Media
        </h1>
        <p className="mb-4">
            The Institute has a very active media scene in terms of Newsletters, Magazines, Video coverage and IITB Radio. While Insight, the media body of IIT Bombay, releases newsletters specifically for freshmen, amongst others, several departments and institute bodies also put out their own newsletters. IIT BBC pioneers the video content scene in the campus, and to cater to those who enjoy radio, we also have the IITB radio.
        </p>

        <h2 className="text-xl font-bold mb-2">Newsletters and Magazines</h2>
        <p className="mb-4">
           Insight is currently the only active media body in the institute run voluntarily by students. Aawaaz was the media body for Hindi but is now dissolved. 
        </p>
        
        <h2 className="text-xl font-bold mb-2">Insight</h2>
        <p className="mb-4">
            If you like writing, have a flair for journalism and you want to work on high impact pieces that usher changes in the institute or simply want to publish a few leisure pieces for light reading and humour you would like to work with the student media body Insight. Insight publishes online content on their website along with offline newsletters which are delivered door to door. Watch out for their Freshmen specific newsletter, started from 2013, which you will be receiving in August!
        </p>

        <h2 className="text-xl font-bold mb-2">IIT Bombay Broadcasting Channel</h2>
        <p className="mb-4">
            IITBBC is a specific wing of Insight focussing on video coverage of events happening in the institute. If you are interested in real time coverage of news in the institute and working on video editing you should definitely work with IITBBC.
        </p>

        <h2 className="text-xl font-bold mb-2">
            EnSpace
        </h2>
        <p className="mb-4">
            E-Cell publishes a magazine EnSpace which aims to promote entrepreneurial awareness through an interesting mix of articles, interviews and informative pieces. You can find the EnSpace publications <a href="https://ecell.in/enspace" className="text-blue-600 hover:underline p-0!">here</a>.
        </p>

    </>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default Media;