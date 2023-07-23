import { useEffect } from "react";
import { useState } from "react";
import UniversityCard from "../Shared/UniversityCard/UniversityCard";

const AllColleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('../../../public/UniversityData.json')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            })
    }, [])



    return (
        <div>
           
            <div className="grid md:grid-cols-3 gap-4">
                {
                    colleges.map(item => <UniversityCard
                        key={item.collegeId}
                        item={item}
                    ></UniversityCard>)
                }
            </div>

        </div>
    );
};

export default AllColleges;