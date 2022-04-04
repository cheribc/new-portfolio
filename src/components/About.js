import React from "react";


export default function About() {

    return (
            <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, My name is Heather Cooper!
                    <br className="hidden lg:inline-block" />I am a full-stack web developer in Atlanta, GA.
                </h1>
                <p className="mb-8 leading-relaxed">
                I have always enjoyed creative writing, learning new technology, and traveling. I am completing my certification as a MERN full-stack web developer at Georgia Institute of Technology in Atlanta, Georgia and I am excited to apply the things that I have learned to teach other people that might be interested in changing careers or adding new skills to their current roles. 
                </p>
                <div className="flex justify-center">
                    <a
                    href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Contact 
                    </a>
                    <a
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    My Projects
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="HW20PORT/new-portfolio/src/assets/images/Hbc-Profile.png"
                />
                </div>
            </div>
            </section>
        );
    }
