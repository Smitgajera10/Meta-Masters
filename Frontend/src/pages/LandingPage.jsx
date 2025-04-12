import { useState } from 'react';

function LandingPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements['login-email'].value;
        const password = e.target.elements['login-password'].value;
        console.log('Login attempt:', { email, password });
        alert("Login successful!");
        setIsModalOpen(false);
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements['signup-name'].value;
        const email = e.target.elements['signup-email'].value;
        const password = e.target.elements['signup-password'].value;
        const confirmPassword = e.target.elements['signup-confirm-password'].value;

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        console.log('Signup:', { username, email, password });
        alert("Account created successfully!");
        setIsModalOpen(false);
    };
    return (
        <div className="text-gray-800">
            {/* Header Section */}
            <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#4682B4] to-[#87CEEB] text-white shadow-md">
                <nav className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold flex items-center">
                        <span className="bg-white/20 px-2.5 py-1 rounded-lg mr-2">P</span>
                        <span>ack-Pal</span>
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        <li><a href="#features" className="text-black hover:text-white transition">Features</a></li>
                        <li><a href="#about" className="text-black hover:text-white transition">About</a></li>
                        <li><a href="#contact" className="text-black hover:text-white transition">Contact</a></li>
                        <li>
                            <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setIsSignUpActive(false);
                                }}
                                className="bg-white text-[#4682B4] font-bold px-6 py-2 rounded-full hover:translate-y-[-2px] hover:shadow-md transition"
                            >
                                Log In
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-36 pb-24 bg-gradient-to-r from-[#4682B4] to-[#87CEEB] text-white text-center">
                <div className="max-w-3xl mx-auto px-5">
                    <h1 className="text-5xl mb-5">Smart Packing Solutions for Every Journey</h1>
                    <p className="text-xl mb-8 leading-relaxed">
                        Pack-Pal is your intelligent travel companion that helps you pack efficiently for any trip. Never forget essential items again!
                    </p>
                    <div className="flex justify-center gap-5 mt-10">
                        <a
                            href="#features"
                            className="bg-white text-[#4682B4] px-6 py-3 rounded-full font-bold hover:translate-y-[-2px] hover:shadow-md transition"
                        >
                            Explore Features
                        </a>
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                                setIsSignUpActive(true);
                            }}
                            className="border-2 border-white px-6 py-3 rounded-full font-bold hover:translate-y-[-2px] hover:shadow-md transition"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 max-w-6xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl inline-block relative pb-4">
                        Why Choose Pack-Pal?
                        <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-[#4682B4] to-[#87CEEB]"></span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {[
                        { icon: '📋', title: 'Smart Packing Lists', desc: 'Generate customized packing lists based on your destination, weather, activities, and trip duration.' },
                        { icon: '🌦', title: 'Weather Integration', desc: 'Pack-Pal checks the forecast for your destination and suggests appropriate clothing and gear.' },
                        { icon: '🔄', title: 'Reusable Templates', desc: 'Save your favorite packing lists as templates for future trips of similar types.' },
                        { icon: '✅', title: 'Check-off System', desc: 'Keep track of what you\'ve already packed with our intuitive check-off system.' },
                        { icon: '📱', title: 'Mobile Friendly', desc: 'Access your packing lists on any device - desktop, tablet, or smartphone.' },
                        { icon: '🌍', title: 'Destination Tips', desc: 'Receive location-specific suggestions for essential items you might not have considered.' },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-2.5 hover:shadow-lg transition"
                        >
                            <div className="w-20 h-20 bg-gradient-to-r from-[#4682B4] to-[#87CEEB] rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-[#f1f8ff]">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl inline-block relative pb-4">
                            About Pack-Pal
                            <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-[#4682B4] to-[#87CEEB]"></span>
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="mb-4 leading-relaxed">
                                Pack-Pal was born from a common travel problem - the stress of packing and the fear of forgetting essential items. Our mission is to make packing an effortless part of your travel experience.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                Our team of avid travelers and tech enthusiasts developed Pack-Pal to be your intelligent travel companion. We combine personalized recommendations with smart technology to ensure you're always prepared for your journey.
                            </p>
                            <p className="leading-relaxed">
                                Whether you're a business traveler, adventure seeker, or family on vacation, Pack-Pal adapts to your specific needs and helps you pack efficiently every time.
                            </p>
                        </div>
                        <div className="flex-1 h-96 bg-gradient-to-r from-[#4682B4] to-[#87CEEB] rounded-xl shadow-xl flex items-center justify-center text-white text-2xl font-bold">
                            Pack-Pal Image
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    <div>
                        <h3 className="text-xl font-semibold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-[#4682B4] after:to-[#87CEEB]">
                            Pack-Pal
                        </h3>
                        <p className="text-gray-300">
                            Smart packing solutions for every journey. Never forget essential items again!
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-[#4682B4] after:to-[#87CEEB]">
                            Quick Links
                        </h3>
                        <a href="#features" className="block text-gray-300 hover:text-white hover:pl-1.5 transition mb-2.5">Features</a>
                        <a href="#about" className="block text-gray-300 hover:text-white hover:pl-1.5 transition mb-2.5">About Us</a>
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                                setIsSignUpActive(false);
                            }}
                            className="block text-gray-300 hover:text-white hover:pl-1.5 transition mb-2.5"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                                setIsSignUpActive(true);
                            }}
                            className="block text-gray-300 hover:text-white hover:pl-1.5 transition"
                        >
                            Register
                        </button>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-[#4682B4] after:to-[#87CEEB]">
                            Contact Us
                        </h3>
                        <p className="text-gray-300 mb-2.5">Email: info@packpal.com</p>
                        <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 pt-5 border-t border-gray-700 text-center">
                    <p>&copy; 2023 Pack-Pal. All rights reserved.</p>
                </div>
            </footer>

            {/* Login/Signup Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
                    <div className={`relative bg-white rounded-xl shadow-2xl w-full max-w-4xl min-h-[550px] overflow-hidden ${isSignUpActive ? 'right-panel-active' : ''}`}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-2xl text-gray-500 z-50"
                        >
                            &times;
                        </button>

                        {/* Sign Up Form */}
                        <div className={`absolute top-0 h-full w-full md:w-1/2 transition-all duration-700 ease-in-out ${isSignUpActive ? 'left-0 opacity-100 z-10' : 'left-0 opacity-0 z-0'}`}>
                            <form onSubmit={handleSignupSubmit} className="h-full flex flex-col items-center justify-center px-12 py-10">
                                <h1 className="text-3xl text-[#4682B4] mb-8 font-bold">Welcome to Pack-Pal</h1>
                                <h2 className="text-2xl font-semibold mb-6">Create Account</h2>
                                <div className="w-full mb-4">
                                    <input
                                        type="text"
                                        name="signup-name"
                                        placeholder="Name"
                                        required
                                        className="w-full bg-gray-50 border-none px-4 py-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4682B4]/30"
                                    />
                                </div>
                                <div className="w-full mb-4">
                                    <input
                                        type="email"
                                        name="signup-email"
                                        placeholder="Email"
                                        required
                                        className="w-full bg-gray-50 border-none px-4 py-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4682B4]/30"
                                    />
                                </div>
                                <div className="w-full mb-4">
                                    <input
                                        type="password"
                                        name="signup-password"
                                        placeholder="Password"
                                        required
                                        className="w-full bg-gray-50 border-none px-4 py-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4682B4]/30"
                                    />
                                </div>
                                <div className="w-full mb-6">
                                    <input
                                        type="password"
                                        name="signup-confirm-password"
                                        placeholder="Confirm Password"
                                        required
                                        className="w-full bg-gray-50 border-none px-4 py-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4682B4]/30"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#4682B4] to-[#87CEEB] text-white font-bold px-12 py-3 rounded-full uppercase tracking-wider hover:-translate-y-1 hover:shadow-lg transition"
                                >
                                    SIGN UP
                                </button>
                            </form>
                        </div>

                        {/* Sign In Form */}
                        <div className={`absolute top-0 h-full w-full md:w-1/2 transition-all duration-700 ease-in-out ${!isSignUpActive ? 'left-0 opacity-100 z-10' : 'left-0 opacity-0 z-0'}`}>
                            <form onSubmit={handleLoginSubmit} className="h-full flex flex-col items-center justify-center px-12 py-10">
                                <h1 className="text-3xl text-[#4682B4] mb-8 font-bold">Welcome to Pack-Pal</h1>
                                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                                <div className="w-full mb-4">
                                    <input
                                        type="email"
                                        name="login-email"
                                        placeholder="Email"
                                        required
                                        className="w-full bg-gray-50 border-none px-4 py-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4682B4]/30"
                                    />
                                </div>
                                <div className="w-full mb-6">
                                    <input
                                        type="password"
                                        name="login-password"
                                        placeholder="Password"
                                        required
                                        className="w-full bg-gray-50 border-none px-4 py-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4682B4]/30"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#4682B4] to-[#87CEEB] text-white font-bold px-12 py-3 rounded-full uppercase tracking-wider hover:-translate-y-1 hover:shadow-lg transition"
                                >
                                    LOGIN
                                </button>
                            </form>
                        </div>

                        {/* Overlay */}
                        <div className="hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out">
                            <div className={`relative h-full w-[200%] left-[-100%] bg-gradient-to-r from-[#4682B4] to-[#87CEEB] transition-all duration-700 ease-in-out ${isSignUpActive ? 'translate-x-[50%]' : ''}`}>
                                {/* Left Overlay Panel */}
                                <div className={`absolute top-0 h-full w-1/2 flex flex-col items-center justify-center px-10 text-center transition-all duration-700 ease-in-out ${isSignUpActive ? 'translate-x-0' : '-translate-x-[20%]'}`}>
                                    <div className="text-2xl font-bold flex items-center mb-6">
                                        <span className="bg-white/20 px-2.5 py-1 rounded-lg mr-2">P</span>
                                        <span>ack-Pal</span>
                                    </div>
                                    <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
                                    <p className="mb-6">
                                        Log in with your account details to continue your journey with Pack-Pal
                                    </p>
                                    <button
                                        onClick={() => setIsSignUpActive(false)}
                                        className="border-2 border-white bg-transparent text-white font-bold px-12 py-3 rounded-full uppercase tracking-wider hover:bg-white/10 transition"
                                    >
                                        LOGIN
                                    </button>
                                </div>

                                {/* Right Overlay Panel */}
                                <div className={`absolute top-0 right-0 h-full w-1/2 flex flex-col items-center justify-center px-10 text-center transition-all duration-700 ease-in-out ${isSignUpActive ? 'translate-x-[20%]' : 'translate-x-0'}`}>
                                    <div className="text-2xl font-bold flex items-center mb-6">
                                        <span className="bg-white/20 px-2.5 py-1 rounded-lg mr-2">P</span>
                                        <span>ack-Pal</span>
                                    </div>
                                    <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
                                    <p className="mb-6">
                                        Enter your details and start your journey with Pack-Pal
                                    </p>
                                    <button
                                        onClick={() => setIsSignUpActive(true)}
                                        className="border-2 border-white bg-transparent text-white font-bold px-12 py-3 rounded-full uppercase tracking-wider hover:bg-white/10 transition"
                                    >
                                        SIGN UP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LandingPage