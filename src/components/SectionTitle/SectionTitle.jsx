
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="p-3 m-3">
            <h3 className="text-blue-800 text-center font-bold text-3xl">{heading}</h3>
            <h5 className="text-blue-600 text-center font-semibold text-xl">{subHeading}</h5>
        </div>
    );
};

export default SectionTitle;