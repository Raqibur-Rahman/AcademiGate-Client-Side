import { useLoaderData } from "react-router-dom";

const UniversityDetailsCard = () => {
    const item = useLoaderData();
    const {
        collegeName,
        collegeImage,
        collegeRating,
        admissionDates,
        events,
        research,
        sports,
        admissionProcess,
    } = item;

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
            <div className="relative bg-blue-500">
                <img className="w-full h-48 object-cover rounded-t-lg" src={collegeImage} alt={collegeName} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 rounded-t-lg"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white text-center font-bold">
                    <h3 className="text-3xl text-white font-semibold mb-2">{collegeName}</h3>
                    <p className="text-gray-300">College Rating: {collegeRating}</p>
                </div>
            </div>
            <div className="p-4 bg-gray-50">
                <p className="text-lg font-semibold mb-2">
                    <span className="font-semibold text-black">Admission Date:</span> <br />
                    Starts: {startDate} <br />
                    Ends: {endDate}
                </p>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Upcoming Events:</h4>
                    <ul className="list-disc list-inside">
                        {events.map((event, index) => (
                            <li key={index} className="text-gray-600 mb-1">
                                <span className="font-semibold">{event.eventName}</span> - {formatDate(event.date)} - {event.location}
                                <p className="text-sm text-gray-500">{event.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Recent Research:</h4>
                    <ul className="list-disc list-inside">
                        {research.map((researchItem, index) => (
                            <li key={index} className="text-gray-600 mb-1">
                                <span className="font-semibold">{researchItem.title}</span> - Authors: {researchItem.authors.join(", ")} -{" "}
                                {formatDate(researchItem.publicationDate)}
                                <p className="text-sm text-gray-500">{researchItem.abstract}</p>
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

                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Admission Process:</h4>
                    <p className="text-gray-600">{admissionProcess}</p>
                </div>
            </div>
        </div>
    );
};

export default UniversityDetailsCard;
