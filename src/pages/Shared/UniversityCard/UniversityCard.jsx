
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
        <div className="border m-3 rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={collegeImage} alt={collegeName} />
                
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{collegeName}</h3>
                <p className="">
                    <span className="font-semibold">Admission Date:</span> <br />
                    Starts: {startDate} <br />
                    Ends: {endDate}
                </p>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Upcoming Events:</h4>
                    <ul className="list-disc list-inside">
                        {events.map((event, index) => (
                            <li key={index} className="text-gray-600 mb-1">
                                {event.eventName} - {formatDate(event.date)} - {event.location}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Recent Research:</h4>
                    <ul className="list-disc list-inside">
                        {research.map((researchItem, index) => (
                            <li key={index} className="text-gray-600 mb-1">
                                {researchItem.title} - Authors: {researchItem.authors.join(", ")} -{" "}
                                {formatDate(researchItem.publicationDate)}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Sports Facilities:</h4>
                    {sports.map((sportItem, index) => (
                        <div key={index} className="text-gray-600 mb-1">
                            <span className="font-semibold">{sportItem.category}</span>: {sportItem.facilities.join(", ")}
                        </div>
                    ))}
                </div>

                <div className="mt-4 text-center">
                    <Link to={`/colleges/${collegeId}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RatedUniversityCard;
