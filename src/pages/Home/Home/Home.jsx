import ImageGallary from "../../ImageGallary/ImageGallary";
import ResearchGallary from "../../ResearchGallary/ResearchGallary";
import ReviewSwipper from "../../Review/ReviewSwipper";

import Banner from "../Banner/Banner";
import RatedUniversity from "../RatedUniversity/RatedUniversity";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RatedUniversity></RatedUniversity>
            <ImageGallary></ImageGallary>
            <ResearchGallary></ResearchGallary>
            <ReviewSwipper></ReviewSwipper>
            
        </div>
    );
};

export default Home;