import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UniversityCard from "../../Shared/UniversityCard/UniversityCard";
import { Link } from "react-router-dom";

const RatedUniversity = () => {

    const [universities, setUniversity] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setUniversity(data))
    }, [])


    // Sort the universities based on the rating in descending order
    const sortedUniversities = universities.sort(
        (a, b) => b.collegeRating - a.collegeRating
    );

    // Select only the top three universities
    const topThreeUniversities = sortedUniversities.slice(0, 3);


    return (
        <div>
            <section>

                <SectionTitle
                    heading={"Most Rated Colleges"}
                    subHeading={"Discover Top-Ranked Institutions with Exceptional Offerings"}
                ></SectionTitle>

                <div className="grid md:grid-cols-3 gap-4 university-card-container">
                    {
                        topThreeUniversities.map(item => <UniversityCard
                            key={item._id}
                            item={item}
                        ></UniversityCard>)
                    }
                </div>
                <div className="card-actions flex justify-center p-3">
                    <Link to='/colleges' >
                        <button className="btn btn-primary">View All Colleges</button>
                    </Link>
                </div>

            </section>

        </div>
    );
};

export default RatedUniversity;