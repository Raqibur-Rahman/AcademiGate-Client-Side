import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./ImageGallary.css";

const ImageGallary = () => {
    return (
        <div className="image-gallery-container">
            <SectionTitle
                heading={"College Graduate Gallery"}
                subHeading={"Celebrate Success with Our Graduates"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="card w-96 bg-rose-50 shadow-xl">
                    <figure>
                        <img
                            src="https://mm.aiircdn.com/447/5ab906f2eced3.jpg"
                            alt="Graduate of University of Dhaka"
                            className="image-gallery-image"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">University of Dhaka</h2>
                        <p>
                            Join us in celebrating the success of our talented graduates from the University of Dhaka. They have excelled in various fields and are ready to make a positive impact on the world.
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-rose-50 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/illustration-university-graduates_53876-28468.jpg?w=740&t=st=1690188234~exp=1690188834~hmac=9cf5e3579508ca9d2e5194b15df0d9ba2d2aa1612f2a6aa01edaa82d63aaaeb3"
                            alt="Graduate of Bangladesh University of Engineering and Technology (BUET)"
                            className="image-gallery-image"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bangladesh University of Engineering and Technology (BUET)</h2>
                        <p>
                            Explore the achievements of our exceptional graduates from BUET. They have contributed to groundbreaking projects and innovations in the field of engineering.
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-rose-50 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/illustration-university-graduates_53876-28470.jpg?w=740&t=st=1690187797~exp=1690188397~hmac=0797fcfd99ecccf5c310565e8796e6102d50e19712c8c917fd8fd3cbe58ac416"
                            alt="Graduate of University of Melbourne"
                            className="image-gallery-image"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">University of Melbourne</h2>
                        <p>
                            Witness the creativity and talent of our graduates from the University of Melbourne in the arts and cultural domain. They have brought diverse perspectives to the forefront.
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-rose-50 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/illustration-university-graduates_53876-28468.jpg?w=740&t=st=1690187543~exp=1690188143~hmac=ac89004aa5fb6ece18d843a9c7e843106b1b07bd3ac07cdc93b67fca0e98d6a5"
                            alt="Graduate of University of Queensland"
                            className="image-gallery-image"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">University of Queensland</h2>
                        <p>
                            Discover the research contributions of our graduates from the University of Queensland in various disciplines. Their work has enriched our understanding of critical issues.
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-rose-50 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/illustration-university-graduates_53876-28467.jpg?w=740&t=st=1690187570~exp=1690188170~hmac=449b13f7ab2d2fa4687a43edac2301300ca04997c208e8663af796f8bd2e1ef2"
                            alt="Graduate of Monash University"
                            className="image-gallery-image"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Monash University</h2>
                        <p>
                            Learn about the entrepreneurial spirit of our graduates from Monash University. They have embraced innovation and created a positive impact on society.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ImageGallary;

