import ImageGallary from "../../ImageGallary/ImageGallary";
import ResearchGallary from "../../ResearchGallary/ResearchGallary";
import Banner from "../Banner/Banner";
import RatedUniversity from "../RatedUniversity/RatedUniversity";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RatedUniversity></RatedUniversity>
            <ImageGallary></ImageGallary>
            <ResearchGallary></ResearchGallary>
        </div>
    );
};

export default Home;