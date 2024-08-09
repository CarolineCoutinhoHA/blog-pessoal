import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-50">
            <h2 className="text-slate-900 text-6xl font-bold mb-8">Login</h2>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                <button
                    type="button"
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => navigate('/home')}
                >
                    Login com useNavigate
                </button>
                <Link 
                    to="/home" 
                    className="bg-purple-100 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-purple-200 transition duration-300"
                >
                    Login com Link
                </Link>
            </div>
        </div>
    );
};

export default Login;

