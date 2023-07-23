
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import logo from '../../../src/assets/images/404_Image.jpg'



const ErrorPage = () => {
    return (
        <div>

            <div className="error-page-container text-center">

                <p>
                    <p className='font-semibold text-xl'>Oops! We couldn&apos;t find what you were looking for.</p>
                  
                    <img className="w-[755px] p-1" src={logo} alt="404 Error" />

                    <p className='font-semibold '>It seems like the page you are trying to access has vanished into the digital abyss. Don&apos;t worry; it&apos;s not you; it&apos;s us!</p>
                    <Link to='/'><button className="btn btn-warning pb-0 mb-0">Back To Home</button></Link>

                </p>

            </div>

        </div>

    );
};

export default ErrorPage;