import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "../ResearchGallary//ResearchGallary.css";

const ReviewSwipper = () => {
    return (
        <section className="bg-gray-100 rounded university-card-container">
            <SectionTitle
                heading={"User Reviews"}
                subHeading={"Discover the Power of Your Voice!"}
            >
            </SectionTitle>
            <div className="p-4">
                <p className="text-lg text-center text-gray-800 mb-6">
                    Share your authentic experiences and insights about our programs. Help shape the future of education with your valuable reviews. Be transparent and join our community of learners at AcademiGate!
                </p>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <p className="italic rounded p-3 text-gray-800 university-card">
                            University of Dhaka offers a great learning environment with supportive faculty and diverse opportunities. Proud to be a part of this esteemed institution! <br /> <span className="font-bold">- Arifur Rahman</span>
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="italic rounded p-3 text-gray-800 university-card">
                            Bangladesh University of Engineering and Technology (BUET) is a hub of innovation and creativity. I am grateful for the exposure to cutting-edge technology and research opportunities. <br /> <span className="font-bold">- Raqibur Rahman</span>
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="italic rounded p-3 text-gray-800 university-card">
                            University of Melbourne provided a transformative learning experience. The engaging classes and global exposure were invaluable for personal growth. <br /> <span className="font-bold">- Mahbubur Rahman</span>
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="italic rounded p-3 text-gray-800 university-card">
                            Monash University is a fantastic institution with a welcoming community. The faculty is supportive, and the campus facilities are top-notch. Highly recommend it! <br /> <span className="font-bold">- Rubaiyat Hussain</span>
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="italic rounded p-3 text-gray-800 university-card">
                            I had an incredible experience at Bangladesh University of Engineering and Technology (BUET). The challenging coursework and research opportunities prepared me well for my career. <br /> <span className="font-bold">- Muniruzzaman Munna</span>
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default ReviewSwipper;

