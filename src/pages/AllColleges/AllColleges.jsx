import { useEffect, useState } from "react";
import UniversityCard from "../Shared/UniversityCard/UniversityCard";

const AllColleges = () => {
    const [colleges, setColleges] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch(" https://academi-gate-server-side.vercel.app/colleges")
            .then((res) => res.json())
            .then((data) => {
                setColleges(data);
            });
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        const filteredColleges = colleges.filter((college) =>
            college.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredColleges);
    };

    useEffect(() => {
        // Trigger search on searchQuery change
        handleSearch();
    }, [searchQuery, colleges]);

    return (
        <div className="flex flex-col items-center">
            {/* Search bar */}
            <div className="mb-4">
                <label htmlFor="search" className="text-xl font-semibold">
                    Search for a college name:
                </label>
                <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Enter college name..."
                    className="border rounded-lg py-1 px-2"
                />
            </div>

            {/* Colleges grid */}
            <div className="grid md:grid-cols-3 gap-4">
                {searchResults.length === 0 ? (
                    <div className="flex justify-center items-center w-full h-96">
                        <p className="text-3xl text-red-500 font-semibold animate-bounce">No results found.</p>
                    </div>
                ) : (
                    searchResults.map((item) => (
                        <UniversityCard key={item._id} item={item}></UniversityCard>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllColleges;
