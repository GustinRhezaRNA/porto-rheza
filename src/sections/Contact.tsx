const Contact = () => {
    return (
        <div id="contact" className="bg-white text-black px-6 sm:px-12 py-20">

            <div className="border-t border-black/20 mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center">

                <div className="flex flex-col items-center gap-4">
                    <p className="text-xl uppercase  flex items-center gap-2 font-medium">
                        <span className="w-2 h-2 bg-green-500"></span>
                        Contact
                    </p>
                    <img
                        src="/Profile.jpg"
                        alt="user"
                        className="w-40 h-40 rounded-xl object-cover"
                    />
                    <div className="flex  gap-4 text-gray-400">



                        <a href="https://www.linkedin.com/in/gustin-rheza" className="hover:text-third transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <rect width="24" height="24" rx="4" fill="currentColor" />
                                <circle cx="6.5" cy="6.5" r="1.5" fill="white" />
                                <rect x="5.5" y="9" width="2" height="9" fill="white" />
                                <path d="M10 9h2v1.5c.6-1 1.6-1.7 3-1.7 2.2 0 3.5 1.4 3.5 4.2V18h-2v-4.5c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8V18h-2V9z" fill="white" />
                            </svg>
                        </a>

                        <a href="mailto:rezarna4@gmail.com" className="hover:text-third transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                                <path d="M22 6l-10 7L2 6" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/rhezaazdy" className="hover:text-third transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1" />
                            </svg>
                        </a>



                    </div>
                </div>

                <div className="sm:col-span-2">
                    <p className="text-lg sm:text-2xl font-normal">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me through any of the platforms listed, and let's start a conversation about how we can work together to bring your ideas to life.
                    </p>
                    <div className="mt-6">
                        <p className="font-semibold">Gustin Rheza</p>
                        <p className="text-sm text-gray-500">Fullstack Developer</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-black/20 mt-12"></div>

        </div>
    )
}

export default Contact