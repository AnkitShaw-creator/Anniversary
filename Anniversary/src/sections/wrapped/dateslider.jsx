import { useState } from "react";
import "./dateslider.css";
import { AnimatePresence, motion } from "motion/react";
import { wrappedDates } from "../../data/wrapped";
import { ArrowLeft, ArrowRight } from "lucide-react";


export default function DateSlider() {

    const [activeDate, setActiveDate] = useState(0);

    const showPrevious = () => {
        if (activeDate > 0)
            setActiveDate(activeDate - 1);
    };
    const showNext = () => {
        if (activeDate < wrappedDates.length - 1)
            setActiveDate(activeDate + 1);
    };
    const memory = wrappedDates[activeDate];

    return (
        <section className="dates-section">
            <h1 className="dates-intro-section">Our Timeline</h1>
            <h3>Dates that are just hard to forget</h3>

            <AnimatePresence mode="wait">
                <motion.article
                    key={memory.id}
                    className="date-card"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="date-card-date">{memory.value}</p>
                    <h3>{memory.title}</h3>
                    <p className="date-card-description">{memory.description}</p>
                </motion.article>
            </AnimatePresence>

            <div className="date-timeline" aria-label="important dates timeline">
                {wrappedDates.map((item, index) => (
                    <button
                        key={item.id}
                        className={`timeline-dot ${index === activeDate ? "active" : ""}`}
                        aria-label={`show ${item.value}: ${item.title}`}
                        aria-current={index === activeDate ? "true" : undefined}
                        onClick={()=>setActiveDate(index)}
                    />
                    
                ))}
            </div>
            <div className="date-navigation">
                <button
                    type="button"
                    onClick={showPrevious}
                    disabled={activeDate === 0}
                    aria-label="Previous Date"
                >
                    <ArrowLeft/>
                </button>
                <p>{memory.value} ({activeDate + 1}/{wrappedDates.length - 1})</p>
                <button
                    type="button"
                    onClick={showNext}
                    disabled={activeDate === wrappedDates.length - 1}
                    aria-label="Next Date"
                >
                    <ArrowRight/>
                </button>
            </div>
            
        </section>
    );
}
