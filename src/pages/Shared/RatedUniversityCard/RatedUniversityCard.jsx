
const RatedUniversityCard = ({ item }) => {
    const { collegeName, collegeImage, admissionDates, events, research, sports } = item;
    return (
        <div className="border m-3 rounded-lg space-x-4 p-3 bg-sky-50 border-sky-500">
            <h3 className="flex justify-center">
                <img className="pb-3" src={collegeImage} alt="" />
            </h3>
            <h3 className="font-bold p-1">
                {collegeName}
            </h3>
            {/* <h3>
                <span className="font-bold">Number of Classes: </span>{" "}
                {classNames.length}
            </h3>
            <h3>
                <span className="font-bold">Number of Students:</span>{" "}
                {numberOfStudents}
            </h3>
            <h3>
                <span className="font-bold">Class Names:</span>{" "}
                {classNames.map((classObj, index) => (
                    <Link
                        to={`/classes/${encodeURIComponent(classObj.name)}/${id}`}
                        key={index}
                        className="text-blue-500 hover:underline"
                    >
                        <span>
                            {classObj.name} ({classObj.numberOfStudents} students)
                            {index !== classNames.length - 1 && ", "}
                        </span>
                    </Link>
                ))}
            </h3>
            <div className="card-actions flex justify-center p-3">
                <Link to={`/instructors/${id}`}>
                    <button className="btn btn-primary">View details</button>
                </Link>
            </div> */}


        </div>
    );
};

export default RatedUniversityCard;