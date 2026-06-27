import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { MathComponent } from 'mathjax-react';

const CPI_Calculation = () => {
  const mathBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0', padding: '0 1rem', maxWidth: '100%', overflowX: 'auto' }}>
      <div style={{ minWidth: 0, maxWidth: '100%' }}>
        <MathComponent tex={String.raw`\text{SPI} = \frac{C_1 \times G_1 + C_2 \times G_2 + C_3 \times G_3 + C_4 \times G_4}{C_1 + C_2 + C_3 + C_4}`} display={true} />
      </div>
      <div style={{ minWidth: 0, maxWidth: '100%', marginTop: '1rem' }}>
        <MathComponent tex={String.raw`\text{CPI} = \frac{\text{SPI}_1 \times \text{Credits in semester}_1 + \text{SPI}_2 \times \text{Credits in semester}_2 + \cdots}{\text{Total credits}}`} display={true} />
      </div>
    </div>
  );

  const exampleBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0', padding: '0 1rem', maxWidth: '100%', overflowX: 'auto' }}>
      <div style={{ minWidth: 0, maxWidth: '100%', marginTop: '1rem' }}>
        <MathComponent tex={String.raw`\text{SPI} = \frac{6 \times 10 + 6 \times 9 + 8 \times 8 + 8 \times 6}{6 + 6 + 8 + 6} = 7.62`} display={true} />
      </div>
    </div>
  );

  const cpiBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0', padding: '0 1rem', maxWidth: '100%', overflowX: 'auto' }}>
      <MathComponent tex={String.raw`\text{CPI} = \frac{7.62 \times 32 + 8.2 \times 36}{32 + 36} = 7.93`} display={true} />
    </div>
  );

  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">CPI Calculation</h1>
      <h2 className="text-xl font-bold mb-2">Calculation of SPI and CPI</h2>
      <p className="mb-4">
        Suppose in a given semester a student has taken four courses having credits C1, C2, C3 and C4 and grade points in those courses are G1, G2, G3 and G4 respectively. Then,
      </p>
      {mathBlock}
      <p className="mb-4">
        For example, if in a given semester a student has taken four courses having credits 6, 6, 8, and 6 and grade points in those courses are 10, 9, 8, 6 respectively. Then,
      </p>
      {exampleBlock}
      <p className="mb-4">
        If the student has an SPI of 7.62 in the 1st semester worth (say) 32 credits and 8.2 in the next semester worth 36 credits, CPI (at the end of 2nd semester)
      </p>
      {cpiBlock}
      <p className="mb-4">
        Do note that all semesters have more or less equal credit weightage, so it is important to do well throughout, and not just in final exams, in order to maintain a good CPI.
      </p>
      <h2 className="text-xl font-bold mb-2">Grading</h2>
      <p className="mb-4">
        The system of grading here, in most courses, is relative. Grading in integral values out of 10 is done based on the student's performance throughout the semester and goes from 10 to 4 (AA-10, AB-9, BB-8, BC-7, CC-6, CD-5, DD-4).
      </p>
      <p className="mb-4">
        Detailed rules can be found in the 'Rules and Regulations' booklet which you will receive subsequently.
      </p>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">CPI गणना</h1>
      <h2 className="text-xl font-bold mb-2">SPI और CPI की गणना</h2>
      <p className="mb-4">
        मान लीजिए किसी सेमेस्टर में एक छात्र ने चार कोर्स लिए हैं जिनके क्रेडिट C1, C2, C3 और C4 हैं और उन कोर्सों में ग्रेड पॉइंट क्रमशः G1, G2, G3 और G4 हैं। तब,
      </p>
      {mathBlock}
      <p className="mb-4">
        उदाहरण के लिए, यदि किसी सेमेस्टर में एक छात्र ने 6, 6, 8 और 6 क्रेडिट वाले चार कोर्स लिए हैं और ग्रेड पॉइंट क्रमशः 10, 9, 8, 6 हैं। तब,
      </p>
      {exampleBlock}
      <p className="mb-4">
        यदि छात्र का पहले सेमेस्टर (32 क्रेडिट) में SPI 7.62 और दूसरे सेमेस्टर (36 क्रेडिट) में 8.2 है, तो दूसरे सेमेस्टर के अंत में CPI होगा:
      </p>
      {cpiBlock}
      <p className="mb-4">
        ध्यान दें कि सभी सेमेस्टर में क्रेडिट का भार लगभग बराबर होता है, इसलिए अच्छा CPI बनाए रखने के लिए पूरे वर्ष अच्छा प्रदर्शन करना जरूरी है, न केवल अंतिम परीक्षाओं में।
      </p>
      <h2 className="text-xl font-bold mb-2">ग्रेडिंग</h2>
      <p className="mb-4">
        अधिकतर कोर्सों में यहाँ की ग्रेडिंग प्रणाली सापेक्ष (relative) होती है। पूरे सेमेस्टर के प्रदर्शन के आधार पर 10 में से ग्रेड दिया जाता है: AA-10, AB-9, BB-8, BC-7, CC-6, CD-5, DD-4।
      </p>
      <p className="mb-4">
        विस्तृत नियम 'नियम और विनियम' पुस्तिका में मिलेंगे जो आपको बाद में प्राप्त होगी।
      </p>
    </>
  );

  const sidebar = navData["Academics"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Academics" />
  );
}
export default CPI_Calculation;
