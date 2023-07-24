import ImageGallary from "../../ImageGallary/ImageGallary";
import Banner from "../Banner/Banner";
import RatedUniversity from "../RatedUniversity/RatedUniversity";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RatedUniversity></RatedUniversity>
            <ImageGallary></ImageGallary>
        </div>
    );
};

export default Home;