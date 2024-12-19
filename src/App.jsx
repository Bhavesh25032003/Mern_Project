// import Navbar from "./components/Navbar"
// import HeroSection from "./components/HeroSection"
// import FeatureSection from "./components/FeatureSection"
// import Workflow from "./components/Workflow"
// import Pricing from "./components/Pricing"
// import Testimonials from "./components/Testimonials"
// import Footer from "./components/Footer"
// import Background from "./assets/Background.mp4"

// const App = () => {
//   return (
//     <>
//       <video className="video-background" autoPlay loop muted src={Background} type="video/mp4">
//         Your browser does not support the video tag.
//       </video>
//       <div className="video-overlay"></div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto pt-20 px-6">
//         <HeroSection/>
//         <FeatureSection/>
//         <Workflow/>
//         <Pricing/>
//         <Testimonials/>
//         <Footer/>
//       </div>
//     </>
//   )
// }

// export default App

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Background from "./assets/Background.mp4";
import { useState } from "react";

const App = () => {
    const [isBlurred, setIsBlurred] = useState(false); // State to toggle blur effect

    return (
        <>
            <video
                className={`video-background ${isBlurred ? "blur-lg" : ""}`}
                autoPlay
                loop
                muted
                src={Background}
                type="video/mp4"
            >
                Your browser does not support the video tag.
            </video>
            <div className={`video-overlay ${isBlurred ? "blur-lg" : ""}`}></div>
            <Navbar setIsBlurred={setIsBlurred} /> {/* Pass state setter as prop */}
            <div
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
            </div>
        </>
    );
};

export default App;

