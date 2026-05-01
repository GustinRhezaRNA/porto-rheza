import { Button } from '@base-ui/react'
import { ArrowRight } from 'lucide-react'

const Navigation = () => {
    return (
        <nav className="relative z-50">
            <div className="flex justify-between items-center p-4 sm:p-5 gap-4 sm:gap-10">
                <div className="shrink-0">
                    <a className="text-white font-bold text-xl sm:text-2xl">PORTOFOLIO
                        <sup className="text-third h-2 w-2"> ✦</sup>
                    </a>
                </div>

                <div className="hidden sm:block">
                    <ul className="flex justify-end gap-5">
                        <li>
                            <a href="#about" className="text-gray-500 font-light hover:text-third transition-colors cursor-pointer">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-500 font-light hover:text-third transition-colors cursor-pointer">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-500 font-light hover:text-third transition-colors cursor-pointer">Contact</a>
                        </li>
                    </ul>
                </div>

                <a href="#contact" className="flex justify-end items-center gap-3 sm:gap-5 cursor-pointer group">
                    <p className="text-white font-extralight text-lg sm:text-2xl hidden sm:block group-hover:text-third transition-colors">Let's discuss</p>
                    <Button
                        className="!rounded-full p-0 flex items-center justify-center cursor-pointer shadow-lg bg-third w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
                    >
                        <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6" />
                    </Button>
                </a>
            </div>
        </nav>
    )
}

export default Navigation