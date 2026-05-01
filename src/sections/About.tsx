import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const About = () => {
    return (
        <div id="about" className="bg-white text-black px-6 sm:px-12 py-28">

            <div className="border-t border-black/20 mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

                <div className="sm:col-span-1 flex flex-col justify-between">
                    <p className="text-xl uppercase  flex items-center gap-2 font-medium">
                        <span className="w-2 h-2 bg-green-500"></span>
                        WHO AM I?
                    </p>

                    <div className="mt-3">
                        <a href="#contact">
                            <Button className="flex items-center gap-4 bg-black text-white rounded-full px-5 py-8 hover:bg-gray-800 transition-colors">
                                <span className="text-sm">Let's Discuss</span>
                                <span className="bg-green-400 rounded-full w-6 h-6 flex items-center justify-center">
                                    <ArrowRight className="w-3 h-3" />
                                </span>
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <p className="text-xl sm:text-2xl leading-relaxed font-semibold">
                        Web Developer with 1+ year internship experience in frontend development and backend integration. Experienced in building scalable, responsive web applications, integrating APIs, implementing authentication systems, and optimizing performance. Familiar with modern development workflows and collaborative environments. Passionate about delivering seamless user experiences and high-quality code.
                    </p>

                </div>

            </div>

            {/* BOTTOM LINE */}
            <div className="border-t border-black/20 mt-12"></div>

        </div>

    )
}

export default About