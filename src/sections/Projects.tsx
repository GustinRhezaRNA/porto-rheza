

const Projects = () => {
    const projectData = [
        {
            id: "001.",
            title: "Sinartama E-RUPS",
            year: "2026",
            category: "Enterprise Web Application",
            image: "sinartama.webp",
        },
        {
            id: "002.",
            title: "Landing Page Bikinkonten.ai",
            year: "2025",
            category: "Landing Page",
            image: "lp-bikinkonten.webp",
        },
        {
            id: "003.",
            title: "Bikinkonten.ai",
            year: "2025",
            category: "SAAS Website",
            image: "bikinkonten.webp",
        },
        {
            id: "004.",
            title: "Chatter Group ChatApp",
            year: "2025",
            category: "Real-time Messaging Web App",
            image: "chatter.webp",
        },
        {
            id: "005.",
            title: "Cinebox Movie App",
            year: "2024",   
            category: "Movie Discovery Web",
            image: "cinebox.webp",
        },
    ];

    const getGridClass = (index: number) => {
        switch (index) {
            case 0: return "sm:col-span-2";
            case 1: return "sm:col-span-1";
            case 2: return "sm:col-start-2 sm:col-span-1";
            case 3: return "sm:col-span-1";
            case 4: return "sm:col-span-2";
            default: return "sm:col-span-1";
        }
    };

    return (

        <div id="projects" className="bg-white text-black px-6 sm:px-20 py-24">
            {/* Title Section*/}
            <p className="text-xl uppercase flex items-center gap-3 font-medium mb-16 tracking-widest">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                Projects
            </p>

            {/* Content */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-24">
                {projectData.map((project, index) => (
                    <div key={index} className={`${getGridClass(index)} group cursor-pointer`}>
                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[16/10]">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            
                            {/* VIEW overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/5">
                                <div className="bg-black text-white px-8 py-3 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    View
                                </div>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="mt-8 flex flex-col gap-1 uppercase tracking-[0.15em] text-[10px] font-semibold text-gray-600">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-12">
                                    <span className="text-gray-400">{project.id}</span>
                                    <div className="flex flex-col">
                                        <span className="text-black font-extrabold text-sm tracking-widest mb-1">{project.title}</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                                <span className="text-right">{project.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Button Other Project  */}
            <div className="flex flex-col justify-center mt-12 text-md cursor-pointer underline underline-offset-8 items-center font-semibold gap-2 " >
                Other Projects
                <div className="flex gap-5 mt-3">
                    <a href="https://github.com/GustinRhezaRNA" aria-label="GitHub Profile" className="hover:text-third transition">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                                        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
                                        -1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 
                                        3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                                        0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                                        0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 
                                        3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176 
                                        .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 
                                        .435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 
                                        0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12 
                                        24 5.37 18.63 0 12 0z"/>
                        </svg>
                    </a>

                    <a href="https://gitlab.com/rezarna4" aria-label="GitLab Profile" className="hover:text-third transition">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.65 13.39l-2.16-6.64a.86.86 0 0 0-1.63 0l-1.46 4.5H6.6L5.14 6.75a.86.86 0 0 0-1.63 0L1.35 13.4a.86.86 0 0 0 .31.96l10 7.27a.86.86 0 0 0 1 0l10-7.27a.86.86 0 0 0 .3-.97z" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Projects