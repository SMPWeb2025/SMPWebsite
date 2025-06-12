import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";
import ScholarshipTable from "../../Components/ScholarshipTable/ScholarshipTable";

const Scholarships = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">Scholarships Available</h1>
    <h2 className="text-xl font-bold mb-2">
       Means-Cum-Means Scholarship (MCM) 
    </h2>
    <p className="mb-4">
        The parental income is the basis for the ‘means' criterion of the scholarship. At present students whose parents annual gross income from all sources for the previous Financial year does not exceed Rs. 5,00,000/ , are eligible to apply for Merit-­cum­-Means Scholarship.
The student with a CPI of 6.00 and above only are eligible to apply for Merits-cum Means Scholarship (MCM).
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
        Does not require mortgage or security
Loan can be in the name of the student or jointly with parents 
The interest rate will probably be 6.65% this year.
All the information for SBI Loan can be found.
       </p>
       <h2 className="text-lg font-semibold mb-2">
        Vidyalaxmi loans
       </h2>
       <p className="mb-4">
        Family income should be less than 9 lpa
The interest rate can be expected to be about 8.5% pa and sophies can also apply from this year at about 9.24%.
       </p>
       <p className="mb-4">
        Only the interest on the tuition fee, i.e 1 lakh per semester, is paid by IIT-B up till graduation. If he/she doesn't get placed after graduation, the student gets a year grace period. The loan has to be taken jointly with parents names
Income papers are to be submitted to the academic office in the Main building.
13 people applied last year and the reimbursement of money is still pending.
       </p>
       <h2 className="text-lg font-semibold mb-2">SBF (Student Benevolent Fund)</h2>
       <p className="mb-4">
        Family income certificate is required, and mostly given to the students in the second semester (since no CPI can be associated with students in the first semester)
       </p>
       <p className="mb-4">
        While exceptional cases may be approved, family income should be lesser than 6.5 lpa. (This particular point is only for information, not to be published)
       </p>
       <p className="mb-4">
        Tuition and the rest of the fees, along with mess advance, included.
        Bad performance of a student may lead the Dean to cancel the scholarship. 4% interest rate (which might be increased).
       </p>
       <p className="mb-4">
        If the student has signed an agreement to repay after he/she gets placed; but later opts for more time, he/she has to inform the office.
       </p>
       <h2 className="text-lg font-semibold mb-2">AP (by IITB-AA)</h2>
       <p className="mb-4">
        Financial Aid Programme* - 0% interest rate - By Tata Motors
For UGs and PGs whose annual family income falls below 6.5 lpa, given the student has a cpi &gt; 6.
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
        <b>Email: </b><Link to="mailto:rama.iitbaa@gmail.com" target="_blank" className="text-blue-600 hover:underline p-0!">rama.iitbaa@gmail.com</Link><br /> <b>Tel: </b>022-25767086/7019
       </p>
    </>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default Scholarships;