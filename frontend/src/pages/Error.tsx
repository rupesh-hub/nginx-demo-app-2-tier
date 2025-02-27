
const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-white">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-medium text-gray-600 mt-4">Oops! Page not found.</p>
                <p className="text-lg text-gray-500 mt-2 font-serif">
                    The page you are looking for might have been removed, had its name changed, or is temporarily
                    unavailable.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block px-6 py-3 bg-gray-50 text-gray-600 font-semibold rounded-md hover:bg-gray-100 border border-gray-300 transition duration-300 font-serif"
                >
                    Back to home
                </a>
            </div>
        </div>
    );
};

export default Error;