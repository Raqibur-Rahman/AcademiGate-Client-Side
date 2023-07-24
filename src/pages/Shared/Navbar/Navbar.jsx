import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Navbar = () => {








    const { user } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const auth = getAuth(app);
    // const provider = new GoogleAuthProvider();

    const handleSignOut = () => {
        signOut(auth)
            .then()
            .catch(error => {
                console.log(error);
            })
    }























    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };



    const handleSearch = () => {
        Swal.fire({
            icon: 'info',
            title: 'Perform Search on All Colleges Page',
            text: 'For faster and more accurate results, please go to the "All Colleges" page and use the search box there.',
            confirmButtonText: 'Go to All Colleges Page',
            showCancelButton: true,
            cancelButtonText: 'Close',
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            focusCancel: true,
            focusConfirm: false,
            showCloseButton: false,
            customClass: {
                content: 'text-base-content',
                footer: 'text-base-content',
            },
            willOpen: () => {
                // Handle the link click manually to navigate to "/colleges"
                const link = Swal.getPopup().querySelector('.swal2-confirm');
                if (link) {
                    link.addEventListener('click', () => {
                        // Navigate to "/colleges" when the link is clicked
                        window.location.href = '/colleges';
                    });
                }
            },
        });
    };

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-100"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/colleges">Colleges</Link>
                            </li>
                            <li>
                                <Link to="/admission">Admission</Link>
                            </li>
                            <li>
                                <Link to="/mycollege">My College</Link>
                            </li>
                            <li>


                                {user ? (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {user.photoURL ? (
                                                <label
                                                    tabIndex={0}
                                                    className="btn-ghost btn-circle avatar"
                                                    onMouseEnter={handleHover}
                                                    onMouseLeave={handleHover}
                                                >
                                                    <div className="w-10 rounded-full">
                                                        <img src={user.photoURL} alt="" />
                                                    </div>
                                                    {isHovered && (
                                                        <span className="username">
                                                            {user.displayName ? user.displayName : <></>}
                                                        </span>
                                                    )}
                                                </label>


                                            )

                                                :
                                                null

                                            }
                                            <button onClick={handleSignOut} className="sm-btn btn-primary rounded-md">
                                                Logout
                                            </button>
                                        </div>
                                    </div>

                                ) : (
                                    <Link to="/login">
                                        <span className="sm-btn btn-primary rounded-lg p-1">Login</span>
                                    </Link>
                                )}


                            </li>
                            <div className="navbar-end">
                                <div className="flex items-center space-x-4">
                                    {/* Search box */}
                                    <input
                                        type="text"
                                        placeholder="Search for a college"
                                        className="border rounded-lg py-1 px-2"
                                        value={searchQuery}
                                        onChange={handleSearchInputChange}
                                    />
                                    <button className="sm-btn btn-primary rounded-lg p-1" onClick={handleSearch}>
                                        Search
                                    </button>

                                </div>
                            </div>
                        </ul>
                    </div>
                    <Link to="/" className="font-extrabold text-3xl">
                        AcademiGate
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/colleges">Colleges</Link>
                        </li>
                        <li>
                            <Link to="/admission">Admission</Link>
                        </li>
                        <li>
                            <Link to="/mycollege">My College</Link>
                        </li>
                    </ul>
                    <div className="navbar-end">
                        <div className="flex items-center space-x-4">
                            {/* Search box */}
                            <input
                                type="text"
                                placeholder="Search for a college"
                                className="border rounded-lg py-1 px-2"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                            />
                            <button className="btn btn-primary" onClick={handleSearch}>
                                Search
                            </button>
                            {/* Login button */}








                            {user ? (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {user.photoURL ? (
                                            <label
                                                tabIndex={0}
                                                className="btn-ghost btn-circle avatar"
                                                onMouseEnter={handleHover}
                                                onMouseLeave={handleHover}
                                            >
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} alt="" />
                                                </div>
                                                {isHovered && (
                                                    <span className="username">
                                                        {user.displayName ? user.displayName : <></>}
                                                    </span>
                                                )}
                                            </label>


                                        )

                                            :
                                            null

                                        }
                                        <button onClick={handleSignOut} className="btn">
                                            Logout
                                        </button>
                                    </div>
                                </div>

                            ) : (
                                <Link to="/login">
                                    <span className="btn">Login</span>
                                </Link>
                            )}














                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;
