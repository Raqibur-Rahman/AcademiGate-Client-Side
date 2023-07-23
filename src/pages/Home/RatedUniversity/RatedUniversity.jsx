import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RatedUniversityCard from "../../Shared/RatedUniversityCard/RatedUniversityCard";

const RatedUniversity = () => {

    const [university, setUniversity] = useState([]);

    useEffect(() => {
        fetch('../../../../public/UniversityData.json')
            .then(res => res.json())
            .then(data => setUniversity(data))
    }, [])


    return (
        <div>
            <section>

                <SectionTitle
                    heading={"Most Rated Colleges"}
                    subHeading={"Discover Top-Ranked Institutions with Exceptional Offerings"}
                ></SectionTitle>

                <div className="grid md:grid-cols-3 gap-4">
                    {
                        university.map(item => <RatedUniversityCard
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