import React from "react";
import "./wrapped.css";
import StatCard from "../../components/StatCard/StatCard.jsx";
import { wrappedStats} from "../../data/wrapped.js";
import AwardCarousel from "./awardcarousel.jsx";
import DateSlider from "./dateslider.jsx";
import Button from "../../components/Button/Button.jsx";
import { motion } from "motion/react"
import {ArrowDown, Infinity} from "lucide-react";

export default function Wrapped({ onContinue }) { 

    const scrollToStats = () => {
        document.getElementById("wrapped-stats")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    const clickContinue = () => {
        onContinue();
    }

    return (
      <main className="wrapped-page">
        <section className="wrapped-intro">
          <div className="wrapped-intro-label">
            <h1>OUR YEAR.</h1>
            <h3>
              One Year.
              <br />
              lots of memories.
            </h3>
            <br />
            <br />
            <h1>Let's see</h1>
          </div>

          <button className="scroll-cue" onClick={scrollToStats}>
            <span>Scroll to explore</span>
            <span className="scroll-arrow" aria-hidden="true">
              <ArrowDown strokeWidth={1} size={24} />
            </span>
          </button>
        </section>

        <section className="wrapped-stats" id="wrapped-stats">
          {/* Stat cards will be rendered here */}
          {wrappedStats.map((stat, index) => (
            <div key={stat.id} className="wrapped-stat-section">
              <StatCard
                label={stat.label}
                value={stat.value==="" ? <Infinity size={64} /> : stat.value}
                description={stat.description}
                bubbleColor={stat.bubbleColor}
              />
            </div>
          ))}
        </section>
        <section className="wrapped-awards" id="wrapped-awards">
          <AwardCarousel />
        </section>

        <section className="wrapped-dates" id="wrapped-dates">
          <DateSlider />
        </section>

        <section className="wrapped-ending" id="wrapped-ending">
          <h3>
            Feels like yesterday, that we started talking, both anxious, curious
            and excited at the same time.
          </h3>
          <motion.div
            className="button-container"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity, //repeat the animation indefinitely
              ease: "easeInOut", // Use easeInOut for smooth scaling
              repeatDelay: 1.5, // Optional: add a delay between repeats
            }}
          >
            <Button
              text="Continue"
              onClick={clickContinue}
              variant="accent"
              disabled={false}
            />
          </motion.div>
        </section>
      </main>
    );
}