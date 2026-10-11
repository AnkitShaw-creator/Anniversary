import React from "react";
import "./awardcarousel.css";
import { wrappedAwards } from "../../data/wrapped.js";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react"; 

export default function AwardCarousel() {
    const [activeAward, setActiveAward] = useState(0);
    const [direction, setDirection] = useState(1);

    const showPreviousAward = () => {
        setDirection(-1);
        if (activeAward > 0)
            setActiveAward(activeAward - 1);
        else
            setActiveAward(wrappedAwards.length - 1);
    }

    const showNextAward = () => {
        setDirection(1);
        if (activeAward < wrappedAwards.length - 1)
            setActiveAward(activeAward + 1);
        else
            setActiveAward(0);
    }

    const award = wrappedAwards[activeAward]

    return (
        <section className="wrapped-awards">
            <h1>Awards</h1>
            <h3>Few things we are known for</h3>
            <div className="award-card-stage">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.article
                        key={award.id}
                        className="award-card"
                        initial={{
                            opacity: 0,
                            x: direction === 1 ? 100 : -100,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: direction === 1 ? -100 : 100,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <p className="award-label">🏆 {award.title}</p>
                        <h3>{award.value}</h3>
                        <p className="award-description">{award.description}</p>
                    </motion.article>
                </AnimatePresence>
            </div>
            
            <div className="award-controls">
                <button onClick={showPreviousAward} aria-label="Go back">
                    <ArrowLeft />
                </button>
                
                <h3 className="award-count">{activeAward + 1}/{wrappedAwards.length}</h3>
                
                <button onClick={showNextAward} aria-label="Go back">
                    <ArrowRight />
                </button>
            </div>
        </section>
    );
 }