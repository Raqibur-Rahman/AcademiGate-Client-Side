
import { Link } from "react-router-dom";

const RatedUniversityCard = ({ item }) => {
    const { collegeId, collegeName, collegeImage, admissionDates, events, research, sports } = item;

    // Get the start and end dates from the admissionDates array
    const { start, end } = admissionDates[0];

    // Format the dates using JavaScript Date object methods
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: "numeric", month: "long", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    const startDate = formatDate(start); // Format start date
    const endDate = formatDate(end); // Format end date

    return (
        <div className="border m-3 rounded-lg space-x-4 p-3 bg-sky-50 border-sky-500">
            <h3 className="flex justify-center">
                <img className="pb-3 w-[555px] h-[255px]" src={collegeImage} alt="" />
            </h3>
            <div className="font-bold">{collegeName}</div>

            <h3 className="bg-sky-200">
                Admission date: <br />
                Starts: {startDate}  <br />
                Ends: {endDate}
            </h3>

            <div className="card-actions flex justify-center p-3">
                <Link to={`/colleges/${collegeId}`}>
                    <button className="btn btn-primary">View details</button>
                </Link>
            </div>
        </div>
    );
};

export default RatedUniversityCard;
