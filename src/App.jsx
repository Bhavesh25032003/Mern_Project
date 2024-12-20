// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import Background from "./assets/Background.mp4";

// const App = () => {
//     const [isBlurred, setIsBlurred] = useState(false);

//     return (
//         <>
//             <video className={`video-background ${isBlurred ? "blur-lg" : ""}`} autoPlay loop muted src={Background}></video>
//             <div className={`video-overlay ${isBlurred ? "blur-lg" : ""}`}></div>
//             <Navbar setIsBlurred={setIsBlurred} />
//             <main className={`max-w-7xl mx-auto pt-20 px-6 ${isBlurred ? "blur-lg" : ""}`}>
//                 <HeroSection />
//                 <FeatureSection />
//                 <Workflow />
//                 <Pricing />
//                 <Testimonials />
//             </main>
//             <Footer />
//         </>
//     );
// };

// export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Background from "./assets/Background.mp4";

const App = () => {
    const [isBlurred, setIsBlurred] = useState(false); // Blur state for background

    return (
        <>
            <video
                className={`video-background ${isBlurred ? "blur-lg" : ""}`}
                autoPlay
                loop
                muted
                src={Background}
            ></video>
            <div className={`video-overlay ${isBlurred ? "blur-lg" : ""}`}></div>
            <Navbar setIsBlurred={setIsBlurred} />
            <main
                className={`max-w-7xl mx-auto pt-20 px-6 ${
                    isBlurred ? "blur-lg" : ""
                }`}
            >
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Pricing />
                <Testimonials />
                <Footer />
            </main>
        </>
    );
};

export default App;


