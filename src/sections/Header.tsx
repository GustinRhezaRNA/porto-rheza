"use client"

import { useState } from "react"
import Navigation from "@/components/navbar"
import { Button } from "@base-ui/react"
import { ArrowDown, ArrowRight } from "lucide-react"
import Stars from "@/components/stars"

const Header = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })


  return (
    <div
      id="home"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      className="relative bg-black h-screen overflow-hidden"
    >

      <div
        className="pointer-events-none absolute inset-0 transition duration-75"
        style={{
          background: `
            radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(45,250,67,0.25), transparent 60%)
          `,
        }}
      />

      
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_0%_100%,rgba(45,250,67,0.5),transparent_60%),radial-gradient(40%_40%_at_100%_0%,rgba(7,79,55,0.85),transparent_85%)]" />

      <Stars />
      <div className="relative z-20">
        <Navigation />

        <div className="grid grid-cols-3 gap-4 py-24 px-6 sm:px-12">

          <div className="col-span-3 sm:col-span-2">
            <p className="text-[4rem] sm:text-[8rem] lg:text-[12rem] xl:text-[15rem] font-semibold text-white leading-none">
              Gustin
              <sup className="text-third">✦</sup>
            </p>
          </div>

          <div className="flex flex-col justify-end items-end">
            <Button className="!rounded-full p-0 flex items-center justify-center border border-gray-500 w-12 h-12 sm:w-20 sm:h-20">
              <ArrowDown className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 px-6 sm:px-12">

          <div className="flex gap-10 sm:gap-16 text-white items-end">
            <div>
              <p className="text-2xl sm:text-3xl font-semibold">1+</p>
              <p className="text-sm text-gray-400">Years of experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-semibold">10+</p>
              <p className="text-sm text-gray-400">Successful project</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-semibold">98%</p>
              <p className="text-sm text-gray-400">Satisfied clients</p>
            </div>
          </div>

          <div className="text-white max-w-md ml-auto">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Hi, I am Rheza i am a fullstack developer with 1 Year of experience in the field.
            </p>

            <div className="mt-3">
              <a href="#contact">
                <Button className="flex items-center gap-4 bg-white text-black rounded-full px-5 py-4 hover:bg-gray-200 transition-colors">
                  <span className="text-sm">Let's Discuss</span>
                  <span className="bg-green-400 rounded-full w-6 h-6 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header