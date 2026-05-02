const Journey = () => {
    const journeyData = [
        {
            company: "PT. DOT Indonesia",
            role: "Front End Developer Intern",
            period: "Nov 2025 – Feb 2026",
            type: "text",
            span: "sm:col-span-2",
        },
        {
            type: "image",
            image: "/random1.jpg",
            span: "sm:col-span-1",
        },
        {
            type: "image",
            image: "/random2.jpg",
            span: "sm:col-span-1",
        },
        {
            company: "PT. Aira Teknologi Indonesia",
            role: "Front End Developer Intern",
            period: "July 2025 – Nov 2026",
            type: "text",
            span: "sm:col-span-1",
        },
        {
            company: "BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)",
            role: "Web Developer Intern",
            period: "July 2025 – Aug 2025",
            type: "text",
            span: "sm:col-span-1",
        },
        {
            company: "PT. Ekata Technology Indonesia",
            role: "Front End Developer Intern",
            period: "Apr 2025 – July 2026",
            type: "text",
            span: "sm:col-span-2",
        },
        {
            type: "image",
            image: "/random3.jpg",
            span: "sm:col-span-1",
        },
        {
            company: "Serena Hills Puncak Bogor",
            role: "Landing Page Builder",
            period: "Dec 2024 – Feb 2025",
            type: "text",
            span: "sm:col-span-3",
        },
    ];

    return (
        <div id="journey" className="bg-white text-black px-6 sm:px-20 py-16">
            
            <div className="border-t border-black/10 mb-16"></div>

            <p className="text-xl uppercase flex items-center gap-3 font-medium mb-16 tracking-widest">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                My Journey
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                {journeyData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`
                            ${item.span} 
                            ${item.type === 'image' ? 'hidden sm:flex' : 'flex'}
                            relative overflow-hidden rounded-[2.5rem] 
                            bg-gray-200 border border-transparent
                            p-8 sm:p-12 flex-col justify-between
                            min-h-[300px] sm:min-h-[350px]
                            transition-all duration-700 ease-out
                            hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2
                            group
                        `}
                    >
                        {item.type === "text" ? (
                            <>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold leading-[1.1] mb-6 tracking-tight text-gray-900">
                                        {item.company}
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 group-hover:text-secondary transition-colors duration-500">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-600 ">
                                        {item.period}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="absolute inset-0">
                                <img 
                                    src={item.image} 
                                    alt="Journey" 
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="border-t border-black/10 mt-28"></div>

        </div>
    )
}

export default Journey
