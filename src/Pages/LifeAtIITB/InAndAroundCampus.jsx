import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const InAndAroundCampus = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">In & Around the Campus</h1>
      <p className="mb-4">
        Throughout your course here in IITB you might need various stuff from everyday items like toothpaste and soap to books for subjects. It is a good idea to familiarize yourself with the various shops and places within the campus and outside it.
      </p>
      <h2 className="text-xl font-bold mb-2">Books</h2>
      <p className="mb-4">
        For buying books, we have a shop called Book World on campus in the Gulmohar Building where you can get discounts on course-related books. Alternatively, the "Popular Book Store" at YP Gate, or Jay Ambe bookshop near Main Gate also accept books back at half price at semester end.
      </p>
      <h2 className="text-xl font-bold mb-2">Daily needs</h2>
      <p className="mb-4">
        For basic amenities, go to the hostel Xerox shop or the Hostel 12/18 shops. The YP market has a post office, dry cleaner, tailor and barber. Quick commerce apps like Zepto, Blinkit, and Instamart deliver essentials straight to your hostel within minutes.
      </p>
      <h2 className="text-xl font-bold mb-2">Banks and ATMs</h2>
      <p className="mb-4">
        Two major banks operate inside IITB: Canara Bank (Gulmohar Building) and SBI. On orientation day, both banks set up temporary stalls in the lecture hall complex for account opening with debit cards provided on the spot.
      </p>
      <h2 className="text-xl font-bold mb-2">Restaurants and Eateries</h2>
      <p className="mb-4">
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>Hostel Canteens:</b> Every hostel has its own canteen for inexpensive food, quick meals, and late-night snacks.</li>
            <li className="mb-2"><b>Within the Institute:</b> Gulmohar Restaurant, Domino's Pizza (near Hostel 1), KReSIT canteen, LHC Food Court, Cafe 92, CCD (ESED building), Laxmi (near Main Gate).</li>
            <li className="mb-2"><b>Hiranandani:</b> KFC, Subway, Pizza Hut, Starbucks, Naturals, Baskin Robbins and many more.</li>
        </ol>
      </p>
      <h2 className="text-xl font-bold mb-2">Entertainment</h2>
      <p className="mb-4">
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>Cinema:</b> PVR (Mulund), Cinepolis (Bhandup), Inox (Ghatkopar), and Carnival Huma (Kanjurmarg).</li>
            <li className="mb-2"><b>Sports:</b> Watch cricket at Wankhede Stadium.</li>
            <li className="mb-2"><b>Theatre and Music:</b> Prithvi Theatre offers student discounts on Tuesdays and Wednesdays.</li>
            <li className="mb-2"><b>Sightseeing:</b> Gateway of India, Marine Drive, Haji Ali, Elephanta Caves.</li>
        </ol>
      </p>
      <h2 className="text-xl font-bold mb-2">Public Transport @ IITB</h2>
      <p className="mb-4">
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>Cycling:</b> Quick, eco-friendly and fun. Cycle repair shops at Market Gate and near H3.</li>
            <li className="mb-2"><b>E-Shuttle:</b> Runs between residential and academic area for INR 10 per ride.</li>
            <li className="mb-2"><b>Auto-rickshaws:</b> Available inside and outside the institute.</li>
            <li className="mb-2"><b>Taxis:</b> Uber and Ola for comfortable group travel.</li>
        </ol>
      </p>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">परिसर में और आसपास</h1>
      <p className="mb-4">
        IIT बॉम्बे में आपके पूरे कोर्स के दौरान आपको टूथपेस्ट और साबुन जैसी रोज़मर्रा की वस्तुओं से लेकर विषयों की किताबों तक की जरूरत होगी। कैंपस के अंदर और बाहर के विभिन्न दुकानों और स्थानों से परिचित होना एक अच्छा विचार है।
      </p>
      <h2 className="text-xl font-bold mb-2">किताबें</h2>
      <p className="mb-4">
        किताबें खरीदने के लिए कैंपस में गुलमोहर बिल्डिंग में 'Book World' है जहाँ कोर्स से संबंधित किताबों पर छूट मिलती है। YP गेट पर 'Popular Book Store' और मुख्य गेट के पास Jay Ambe बुकशॉप भी हैं — जो सेमेस्टर के अंत में आधे दाम पर किताबें वापस लेते हैं।
      </p>
      <h2 className="text-xl font-bold mb-2">दैनिक आवश्यकताएँ</h2>
      <p className="mb-4">
        बुनियादी सुविधाओं के लिए हॉस्टल Xerox शॉप या हॉस्टल 12/18 की दुकानों पर जाएँ। YP मार्केट में डाकघर, ड्राई क्लीनर, दर्जी और नाई भी हैं। Zepto, Blinkit और Instamart जैसे क्विक-कॉमर्स ऐप्स मिनटों में आपके हॉस्टल तक सामान पहुँचा देते हैं।
      </p>
      <h2 className="text-xl font-bold mb-2">बैंक और ATM</h2>
      <p className="mb-4">
        IIT बॉम्बे के अंदर दो प्रमुख बैंक हैं: Canara Bank (गुलमोहर बिल्डिंग) और SBI। ओरिएंटेशन के दिन दोनों बैंक LHC में अस्थायी काउंटर लगाते हैं, जहाँ तुरंत डेबिट कार्ड के साथ खाता खुलवाया जा सकता है।
      </p>
      <h2 className="text-xl font-bold mb-2">रेस्तराँ और खाने की जगहें</h2>
      <p className="mb-4">
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>हॉस्टल कैंटीन:</b> हर हॉस्टल की अपनी कैंटीन है — सस्ते भोजन, त्वरित खाने और देर रात के स्नैक्स के लिए।</li>
            <li className="mb-2"><b>संस्थान के अंदर:</b> गुलमोहर रेस्तराँ, Domino's (हॉस्टल 1 के पास), KReSIT कैंटीन, LHC फूड कोर्ट, Cafe 92, CCD (ESED बिल्डिंग), लक्ष्मी (मुख्य गेट के पास)।</li>
            <li className="mb-2"><b>हिरानंदानी:</b> KFC, Subway, Pizza Hut, Starbucks, Naturals, Baskin Robbins और भी बहुत कुछ।</li>
        </ol>
      </p>
      <h2 className="text-xl font-bold mb-2">मनोरंजन</h2>
      <p className="mb-4">
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>सिनेमा:</b> PVR (मुलुंड), Cinepolis (भांडुप), Inox (घाटकोपर), Carnival Huma (कांजुरमार्ग)।</li>
            <li className="mb-2"><b>खेल:</b> Wankhede Stadium में क्रिकेट मैच देखें।</li>
            <li className="mb-2"><b>रंगमंच और संगीत:</b> Prithvi Theatre मंगलवार और बुधवार को छात्रों को छूट देता है।</li>
            <li className="mb-2"><b>पर्यटन:</b> गेटवे ऑफ इंडिया, मरीन ड्राइव, हाजी अली, एलिफेंटा गुफाएँ।</li>
        </ol>
      </p>
      <h2 className="text-xl font-bold mb-2">IIT बॉम्बे में परिवहन</h2>
      <p className="mb-4">
        <ol className="list-decimal ml-6">
            <li className="mb-2"><b>साइकिल:</b> त्वरित, पर्यावरण-अनुकूल और मजेदार। मार्केट गेट और H3 के पास साइकिल मरम्मत की दुकानें हैं।</li>
            <li className="mb-2"><b>E-Shuttle:</b> आवासीय और शैक्षणिक क्षेत्र के बीच, प्रति यात्रा ₹10 में।</li>
            <li className="mb-2"><b>ऑटो-रिक्शा:</b> संस्थान के अंदर और बाहर उपलब्ध।</li>
            <li className="mb-2"><b>टैक्सी:</b> समूह यात्रा के लिए Uber और Ola।</li>
        </ol>
      </p>
    </>
  );

  const sidebar = navData["Life at IITB"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Life at IITB" />
  );
}
export default InAndAroundCampus;
