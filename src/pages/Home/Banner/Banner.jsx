import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "./../../../assets/images/StudyAbroad.jpg";
import banner2 from "./../../../assets/images/DU.jpg";
import banner3 from "./../../../assets/images/Papers.jpg";

const Banner = () => {
    return (
        <Carousel>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl font-bold text-white">Unlock Your Future: Explore Diverse Colleges Worldwide AcademiGate!</h1>
                        <h1 className="mb-5 text-xl font-semibold text-white">Seamless Admissions, Thriving Campus Life, Empowering Minds</h1>
                        <p className="mb-5 text-white">Discover the perfect college that aligns with your dreams and aspirations. Simplify your admission process, experience a vibrant campus life filled with events and sports, and embrace academic excellence through cutting-edge research and innovations.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl font-bold text-white">Where Dreams Take Flight: Soar High with AcademiGate!</h1>
                        <h1 className="mb-5 text-xl font-semibold text-white">Elevate Your Education, Reach New Heights</h1>
                        <p className="mb-5 text-white">Set your aspirations free with colleges that elevate your education and provide wings to your dreams. Discover the right fit and soar high with AcademiGate.</p>
                        <button className="btn btn-primary">Start Flying</button>
                    </div>

                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl font-bold text-white">Your Path to Success: Empower Your Dreams with AcademiGate!</h1>
                        <h1 className="mb-5 text-xl font-semibold text-white">Find Your Ideal College, Unleash Your Potential</h1>
                        <p className="mb-5 text-white">Embark on an extraordinary journey of knowledge, growth, and self-discovery. Discover colleges that align with your passions, and pave the way for a brighter future with AcademiGate.</p>
                        <button className="btn btn-primary">Explore Now</button>
                    </div>

                </div>
            </div>
        </Carousel>
    );
};

export default Banner;