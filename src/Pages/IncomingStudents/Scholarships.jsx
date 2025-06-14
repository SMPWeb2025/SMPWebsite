import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";
import ScholarshipTable from "../../Components/ScholarshipTable/ScholarshipTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

const Scholarships = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Scholarships Available</h1>
        <h2 className="text-xl font-bold mb-2">
            Means-Cum-Means Scholarship (MCM)
        </h2>
        <p className="mb-4">
            For these scholarships, academic merit as well as means criterion is taken into
            account to determine eligibility. The parental income is the basis for the ‘means' criterion of the scholarship. At present students whose parents annual gross income from all sources for the previous Financial year does not exceed Rs. 5,00,000/ , are eligible to apply for Merit-­cum­-Means Scholarship.
        </p>
        <h2 className="text-xl font-bold mb-2">
            Facilities of Free messing (For SC/ST students only)
        </h2>
        <p className="mb-4">
            All SC/ST students are exempted from the payment of tuition fees. The facilities of free messing will be granted to eligible SC/ST students of B.Tech., Dual Degee (B.Tech. + M.Tech.), B.S. and B.Des. Programme as detailed below. For Dual Degee students, it is available only upto 4th year.
        </p>
        <p className="mb-4">
            The parental income is the basis for the means criterion of the scholarship. At present, students whose parents’ annual gross income from all sources for the previous Financial year does not exceed Rs. 5,00,000 are eligible to apply for the above facilities.
        </p>

        <h2 className="text-xl font-bold mb-2">
            Remission of Fees
        </h2>
        <p className="mb-4">
            Remission of fees will be granted to eligible students of B.Tech, Dual Degee (B.Tech + M.Tech), B.S. and B.Des from 2016 Batch onwards.
            The students whose Gross Income of parents for the previous Financial year is not more than Rs. 5,00,000/­ per annum (without any standard deduction) are eligible to apply for Remission of fees.
        </p>
        <p className="mb-4">
            The economically backward students are eligible for remission of tuition fee as follows:<br />
            1. Those with a parental income less than Rs. 1 Lakh per annum shall get full remission of the tuition fees. <br />
            2. Those with a parental income between Rs.1 Lakh and Rs. 5 Lakhs per annum shall get remission of 2/3rd of the tuition fees.
        </p>

        <h2 className="text-xl font-bold mb-2">
            Scholarship Given
        </h2>
        <ScholarshipTable />
        <p className="mt-8 mb-4">
            <b>Please Note:</b><br />
            The benefits are available for the standard duration of the program on the registration and satisfactory progress. It will be limited to 25% of the admitted students in each batch.
            Pocket allowance is only for 10 months only in each academic year.
            Tuition fee is waived off for SC/ST/PD category students.<br />
            <b>In case of any query or clarification, contact person in-charge of UG Scholarships in Academic Office
                (2nd floor, main Building).</b>
        </p>

        <h2 className="text-xl font-bold mb-2">
            Named Scholarship Portal
        </h2>
        <p className="mb-4">
            Named Scholarships­ Office of the Dean Alumni & Corporate Relations manages the Named scholarship endowed by the alumni of the Institute and other wellwishers. These Scholarships are awarded based on the following eligibility criteria :­

        </p>
        <ul className="list-disc ml-4 mb-4">
            <li>
                <b>Merit Criterion:</b> For new entrants of B.Tech., Dual Degee (B.Tech. + M.Tech.), B.S. their JEE AIR and for B.Des. their UCEED Rank, will be the criterion. In subsequent years, the criterion will be their academic performance during the preceding academic year.</li>
            <li><b>Means Criterion: </b>The parental income is the basis for the ‘means' criterion of the scholarship. At present students whose parents annual gross income from all sources for the previous Financial year does not exceed Rs. 5,00,000/ , are eligible to apply for Merit­cum­Means Scholarship.</li>
        </ul>

        <p className="mb-4">
            For complete information about the scholarships available, please visit <Link to="https://www.iitb.ac.in/newacadhome/scholar.jsp" target="_blank" className="text-blue-600 hover:underline p-0!">this page</Link>.
            <br />
            In case of any queries, please send email on <Link to="mailto:acrscholarship@iitb.ac.in" target="_blank" className="text-blue-600 hover:underline p-0!">acrscholarship@iitb.ac.in</Link>.
        </p>

        <h2 className="text-xl font-bold mb-2">IT Support Scholarship</h2>
        <p className="mb-4">
            The Director, IIT Bombay in collaboration with the generous alumni of IIT Bombay and Dean ACR office has come up with a financial support scheme for the economically weak students. This particular financial scheme finances the students to buy a laptop/personal computer and also provides students with a monthly data pack charge.
        </p>
        <h2 className="text-xl font-bold mb-2">
            Loans available
        </h2>
        <h2 className="text-lg font-semibold mb-2">Scholar's loan (by SBI)</h2>
        <p className="mb-4">
            State Bank of India has exclusive education loan scheme for IIT Bombay Students named "SBI SCHOLAR LOAN". For more details please visit SBI bank branch located inside the campus close to Gymkhana and for features and other details refer the link: <Link to="https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" className="text-blue-600 hover:underline p-0!" target="_blank">https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme</Link>
        </p>
        <h2 className="text-lg font-semibold mb-2">
            Vidyalaxmi loans
        </h2>
        <p className="mb-4">
            Students from any income group are eligible for the loan, but those with family income up to ₹8 lakh can receive a 3% interest subvention during the moratorium period (course duration + 1 year). For families with income up to ₹4.5 lakh, full interest subvention may be available under related government schemes.
        </p>
        <p className="mb-4">
            The total loan amount depends on actual course and living expenses, with no upper limit. IIT Bombay supports students by reimbursing interest on tuition fee (INR 1 lakh per semester) till graduation, with a 1-year grace period if placement is not secured. The typical interest rate charged is around 8.5% per annum. The loan is taken jointly with parents, and income documents need to be submitted to the Academic Office.
        </p>
        <p className="mb-4">
            For more information refer to: <Link to="https://www.education.gov.in/sites/upload_files/mhrd/files/document-reports/PM_Vidyalaxmi_Scheme_Guidelines.pdf" className="text-red-600 hover:underline p-0!" target="_blank"><FontAwesomeIcon icon={faFilePdf} size="lg"></FontAwesomeIcon></Link>
        </p>
        <h2 className="text-lg font-semibold mb-2">SBF (Student Benevolent Fund)</h2>
        <p className="mb-4">
            The Student Benevolent Fund at IIT Bombay supports enrolled students facing sudden financial hardship—whether due to medical emergencies, family crises, or other unexpected difficulties. Eligibility generally requires submission of family income documents (verified up to ₹6.5 lakh per annum) and fulfillment of academic criteria, such as maintaining satisfactory performance after the first semester.
        </p>
        <p className="mb-4">
            Unlike a loan, this is a grant-based fund, so there's no interest charged. Disbursements typically cover urgent educational or living-related expenses like tuition, mess advance, hostel fees, or essential medical costs. Exceptional cases and need-based approvals are decided by the Dean’s office.
        </p>
        {/* <p className="mb-4">
            Tuition and the rest of the fees, along with mess advance, included.
            Bad performance of a student may lead the Dean to cancel the scholarship. 4% interest rate (which might be increased).
        </p>
        <p className="mb-4">
            If the student has signed an agreement to repay after he/she gets placed; but later opts for more time, he/she has to inform the office.
        </p> */}
        <h2 className="text-lg font-semibold mb-2">FAP (by IITB-AA)</h2>
        <p className="mb-4">
            Financial Aid Programme* - 0% interest rate - By Tata Motors
            For UGs and PGs whose annual family income falls below INR 7.5 lpa for metro-based candidates and INR 7 lakhs for non-metro-based candidates, given the student has a cpi &gt; 6.
        </p>
        <p className="mb-4">
            The student can contact the Alumni office through an online portal where they would be given the appropriate link to apply. Documents required for application - 12th Marksheets, JEE advanced results, Family income certificate, Parents Residential proof, Parents ID proof.
            This is followed by an interview with the FAP committee ( IIT-B Alumni )
        </p>
        <p className="mb-4">
            Various kinds of assistance provided include - Tuition and mess fee; Purchasing a laptop; Internship expenses.
            The repayment is done after placement, with a grace period of 6 months.
            The above can be done by the PGs from their stipends.
        </p>
        <p className="mb-4">
            <b>For further information: </b>Contact IIT Bombay Alumni Association Alumni Centre, 1st Floor Gulmohar Building, IIT Bombay<br />
            <b>Website: </b><Link to="https://fap-iitbaa.org/Webcontent/FAQ" className="text-blue-600 hover:underline p-0!" target="_blank">https://fap-iitbaa.org/Webcontent/FAQ</Link><br />
            <b>Email: </b><Link to="mailto:rama.iitbaa@gmail.com" target="_blank" className="text-blue-600 hover:underline p-0!">rama.iitbaa@gmail.com</Link><br /> <b>Tel: </b>022-25767086/7019
        </p>
    </>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default Scholarships;