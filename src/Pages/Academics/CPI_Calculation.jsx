import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { MathComponent } from 'mathjax-react';

const CPI_Calculation = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">CPI Calculation</h1>
      <h2 className="text-xl font-bold mb-2">Calculation of SPI and CPI</h2>
      <p className="mb-4">
        Suppose in a given semester a student has taken four courses having credits C1, C2, C3 and C4 and grade points in those courses are G1, G2, G3 and G4 respectively. Then,
      </p>
      <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5rem 0',
    padding: '0 1rem',      // Add horizontal padding so math doesn't touch edges
    maxWidth: '100%',       // Make sure container doesn't overflow viewport width
    overflowX: 'auto',      // Allow horizontal scroll if needed
  }}
>
  <div style={{ minWidth: 0, maxWidth: '100%' }}>
    <MathComponent
      tex={String.raw`\text{SPI} = \frac{C_1 \times G_1 + C_2 \times G_2 + C_3 \times G_3 + C_4 \times G_4}{C_1 + C_2 + C_3 + C_4}`}
      display={true}
      style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
    />
  </div>

  <div style={{ minWidth: 0, maxWidth: '100%', marginTop: '1rem' }}>
    <MathComponent
      tex={String.raw`= \frac{\text{SPI}_1 \times \text{Credits in semester}_1 + \text{SPI}_2 \times \text{Credits in semester}_2 + \cdots}{\text{Total credits}}`}
      display={true}
      style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
    />
  </div>
</div>


      <p className="mb-4">
        For example, if in a given semester a student has taken four courses having credits 6, 6, 8, and 6 and grade points in those courses are 10, 9, 8, 6 respectively. Then, 
      </p>
      <div 
      style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5rem 0',
    padding: '0 1rem',      // Add horizontal padding so math doesn't touch edges
    maxWidth: '100%',       // Make sure container doesn't overflow viewport width
    overflowX: 'auto',      // Allow horizontal scroll if needed
  }}
      >
        <div style={{ minWidth: 0, maxWidth: '100%', marginTop: '1rem' }}>
      <MathComponent
        tex={String.raw`\text{SPI} = \frac{6 \times 10 + 6 \times 9 + 8 \times 8 + 8 \times 6}{6 + 6 + 8 + 6} = 7.62`}
        display={true}
        />
        </div>
        </div>

      <p className="mb-4">
       If the student has an SPI of 7.62 in the 1st semester worth (say) 32 credits and 8.2 in the next semester worth 36 credits, CPI (at the end of 2nd semester) 
      </p>
      <div 
      style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5rem 0',
    padding: '0 1rem',      // Add horizontal padding so math doesn't touch edges
    maxWidth: '100%',       // Make sure container doesn't overflow viewport width
    overflowX: 'auto',      // Allow horizontal scroll if needed
  }}
      >
      <MathComponent
        tex={String.raw`= \frac{7.62 \times 32 + 8.2 \times 36}{32 + 36} = 7.93`}
        display={true}
        />
        </div>
      <p className="mb-4">
        Do note that all semesters have more or less equal credit weightage, so it is important to do well throughout, and not just in final exams, in order to maintain a good CPI.
      </p>
      <h2 className="text-xl font-bold mb-2">Grading</h2>
      <p className="mb-4">
        The system of grading here, in most courses, is relative. The highest grade (worth 10 points) is set according to the highest score obtained in the class, and proportionately, grades are allotted to all students. Grading, in integral values out of 10 is done based on the student’s performance throughout the semester and goes from 10 to 4 (AA-10, AB-9, BB-8, BC-7, CC-6, CD-5, DD-4).
      </p>
      <p className="mb-4">
        Detailed rules can be found in the ‘Rules and Regulations’ booklet which you will receive subsequently. Parents and students are requested to go through and understand it carefully.
      </p>
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default CPI_Calculation

