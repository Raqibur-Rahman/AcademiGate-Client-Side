import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RatedUniversityCard from "../../Shared/RatedUniversityCard/RatedUniversityCard";

const RatedUniversity = () => {

    const [universities, setUniversity] = useState([]);

    useEffect(() => {
        fetch('../../../../public/UniversityData.json')
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

                <div className="grid md:grid-cols-3 gap-4">
                    {
                        topThreeUniversities.map(item => <RatedUniversityCard
                            key={item.collegeId}
                            item={item}
                        ></RatedUniversityCard>)
                    }
                </div>

            </section>

        </div>
    );
};

export default RatedUniversity;