"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import StarsCanvas from "./StarBackground";
import { useSeason } from "@/components/SeasonProvider";

const AboutSection = () => {
    const { id } = useSeason();
    
    const videoHueMap: Record<string, string> = {
        winter: "hue-rotate(0deg)",       
        spring: "hue-rotate(-120deg)",    
        summer: "hue-rotate(150deg)",     
        autumn: "hue-rotate(180deg)"      
    };

    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full overflow-hidden px-6 sm:px-10 md:px-14 py-24"
        >
            <StarsCanvas />
            
            <div className="md:absolute w-auto h-auto md:top-[120px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.95] text-center text-ice-50 z-50 transition-colors duration-600"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice-500 to-ice-300 transition-colors duration-600 ml-3">
                                Me
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-start relative mt-16 md:mt-[150px] z-[20] w-auto h-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden ring-[3px] ring-ice-500/30 bg-gradient-to-r from-ice-600 to-ice-400 transition-colors duration-600 mb-8"
                        >
                            <img
                                src="/profile.jpg"
                                alt="profile placeholder"
                                width={200}
                                height={200}
                                className="object-cover md:w-[220px] md:h-[220px]"
                            />
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="px-5 py-2.5 z-[20] border mb-6 border-ice-400/30 bg-ink-1/60 backdrop-blur-md transition-colors duration-600 rounded-xl shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                        >
                            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-ice-50 transition-colors duration-600">
                                Suresh Mahima Kumar Tirumala
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="px-6 sm:px-8 w-[95%] md:max-w-3xl py-6 z-[20] border mb-[20px] border-ice-400/30 bg-ink-1/60 backdrop-blur-md transition-colors duration-600 rounded-2xl shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                        >
                            <p className="text-sm sm:text-base md:text-lg text-ice-200 transition-colors duration-600 leading-relaxed text-center sm:text-justify">
                                I&apos;m Suresh, a software engineer completing my
                                Master of Computer Applications. I like building
                                things end-to-end — from the logic behind the
                                scenes to the experience someone actually uses.
                                Lately I&apos;ve been drawn to weaving AI into
                                real products in useful, practical ways rather
                                than just for the sake of it. I picked up most
                                of my skills through hands-on internships and
                                personal projects, and I care more about writing
                                things that hold up over time than just getting
                                something to work. I&apos;m currently looking
                                for a team where I can keep learning by building.
                            </p>
                        </motion.div>
                    )}
                </InView>
            </div>
            
            <div className="absolute z-[20] bottom-8 md:bottom-[40px] px-[5px]">
                <div className="text-[11px] uppercase tracking-[0.25em] text-center text-ice-400 transition-colors duration-600">
                    Software engineer who enjoys turning ideas into working products.
                </div>
            </div>

            <div className="w-full hidden md:flex items-center justify-center absolute inset-0 z-[1]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    style={{ filter: videoHueMap[id] || "hue-rotate(0deg)" }}
                    className="h-full w-full object-cover opacity-45 mix-blend-screen transition-all duration-[600ms]"
                    src="/encryption.webm"
                />
            </div>
        </section>
    );
};

export default AboutSection;


