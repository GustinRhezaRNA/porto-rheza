import { Button } from "@base-ui/react"
import { ArrowRight } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-[#f5f5f5] text-black px-6 sm:px-12 py-20 relative overflow-hidden">

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">

                <div className="sm:col-span-2">
                    <h2 className="font-extrabold text-lg mb-4">PORTOFOLIO</h2>

                    <p className="text-sm text-gray-600 max-w-sm mb-6">
                        Showcasing a collection of projects that demonstrate my skills and expertise in web development.
                    </p>
                </div>

                <div>
                    <p className="font-medium mb-4">Pages</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Home</li>
                        <li>About</li>
                        <li>Work</li>
                        <li>Service</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <p className="font-medium mb-4">Utility</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Style Guide</li>
                        <li>License</li>
                        <li>404</li>
                    </ul>
                </div>

            </div>

            <p className="absolute bottom-5 sm:bottom-10 left-6 text-[3rem] sm:text-[10rem] font-bold text-black/5 pointer-events-none select-none whitespace-nowrap">
                GUSTIN RHEZA
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-20 mb-24 sm:mb-0 text-sm text-gray-500 gap-4">
                <p>Copyright {new Date().getFullYear()}</p>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                    <span>Dribbble</span>
                    <span>Behance</span>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-20">
                <a href="#contact">
                    <Button className="flex items-center gap-4 bg-black text-white rounded-full px-5 py-3 sm:px-3 sm:py-4 whitespace-nowrap hover:bg-gray-800 transition-colors">
                        <span className="text-sm">Let's Discuss</span>
                        <span className="bg-green-400 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                            <ArrowRight className="w-3 h-3 text-black" />
                        </span>
                    </Button>
                </a>
            </div>

        </footer>
    )
}

export default Footer