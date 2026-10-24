import { useState } from "react";
import "./dateslider.css";
import { AnimatePresence, motion } from "motion/react";
import { wrappedDates } from "../../data/wrapped";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function DateSlider() {
  const [activeDate, setActiveDate] = useState(0);

  const showPrevious = () => {
    setActiveDate((current) => Math.max(0, current - 1));
  };

  const showNext = () => {
    setActiveDate((current) => Math.min(wrappedDates.length - 1, current + 1));
  };

  const memory = wrappedDates[activeDate];

  if (!memory) return null;

  return (
    <section className="dates-section">
      <div className="date-header">
        <h1 className="dates-intro-section">Our Timeline</h1>
        <h3>Sob din special holeo kichu din just bhola jae naa</h3>
      </div>

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

      <div className="date-timeline">
        <input
          type="range"
          className="timeline-range"
          min={0}
          max={wrappedDates.length - 1}
          value={activeDate}
          onChange={(event) => setActiveDate(Number(event.target.value))}
          style={{
            "--timeline-progress": `${
              wrappedDates.length > 1
                ? (activeDate / (wrappedDates.length - 1)) * 100
                : 0
            }%`,
          }}
          aria-label="Navigate important dates"
          aria-valuetext={`${memory.value}: ${memory.title}`}
        />
      </div>

      <div className="date-navigation">
        <button
          type="button"
          onClick={showPrevious}
          disabled={activeDate === 0}
          aria-label="Previous date"
        >
          <ArrowLeft />
        </button>

        <p>
          {memory.value} ({activeDate + 1}/{wrappedDates.length})
        </p>

        <button
          type="button"
          onClick={showNext}
          disabled={activeDate === wrappedDates.length - 1}
          aria-label="Next date"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
