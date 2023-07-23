import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // signIn(email, password)
        //     .then((result) => {
        //         const LoggedInUser = result.user;
        //         console.log(LoggedInUser);
        //         navigate(from, { replace: true });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         setError(error.message);
        //     });
    };


    const showPassword = false;
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Welcome back! <br /> Enter your credentials below to securely log
                                in and gain access to your account. We are excited to have you
                                back on board! <br /> Your security is important to us. Stay
                                connected and enjoy a seamless login experience. Let us get
                                started!
                            </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="email"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="password"
                                                className="input input-bordered pr-12"
                                            />
                                            <button
                                                type="button"
                                                // onClick={handleTogglePassword}
                                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                            >
                                                {showPassword ? (
                                                    <FontAwesomeIcon
                                                        icon={faEyeSlash}
                                                        className="text-gray-500"
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                        className="text-gray-500"
                                                    />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input
                                            className="btn btn-primary"
                                            type="submit"
                                            value="Login"
                                        />
                                    </div>
                                </form>
                                <button
                                    // onClick={handleGoogleSignIn}
                                    className="btn btn-block"
                                >
                                    Sign in with Google
                                </button>
                                <p className="my-5 text-center">
                                    New to IntellectoToys?
                                    <Link className="text-orange-700 font-bold" to="/signup">
                                        {" "}
                                        Sign Up
                                    </Link>
                                </p>
                                {/* {error && (
                                    <p className="text-red-950 bg-orange-300 font-bold text-xl p-1 rounded">
                                        Error Message:{" "}
                                        <span className="text-red-700 font-bold">{error}</span>
                                    </p>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;