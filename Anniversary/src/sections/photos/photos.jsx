import { useState, useRef } from "react";
import {ArrowRight} from "lucide-react";
import './photos.css';
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { PHOTO_DATA } from "../../data/imageData.js";
import Button from "../../components/Button/Button";
import { motion } from "motion/react";

const PHOTO_PER_BATCH = 7; 

export default function Photos({ onContinue }) {
  const containerRef = useRef(null);
  const [currentBatch, setCurrentBatch] = useState(0);
  // Track the highest z-index to continually increment it when a photo is clicked
  const [maxZIndex, setMaxZIndex] = useState(PHOTO_PER_BATCH);
  const startIndex = currentBatch * PHOTO_PER_BATCH;
  const dataBatch = PHOTO_DATA.slice(startIndex, startIndex + PHOTO_PER_BATCH);

  const hasMoreData = startIndex + PHOTO_PER_BATCH < PHOTO_DATA.length;
  const showNextBatch = () => {
    setCurrentBatch((currentBatch) => currentBatch + 1);
    setMaxZIndex(PHOTO_PER_BATCH);
  };

  const clickContinue = () => {
    onContinue();
  };

  return (
    <main className="fullscreen-container" ref={containerRef}>
      <section className="background-text">
        <div className="background-text-content">
          <h1>YEAR'S SCRAPBOOK</h1>
          <h3>
            The Moments We Shared.<br /> The Bond we Built.
          </h3>
        </div>
      </section>

      {dataBatch.map((photo, index) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          index={index}
          maxZIndex={maxZIndex}
          setMaxZIndex={setMaxZIndex}
          containerRef={containerRef} // Pass the container ref to each PhotoCard
        />
      ))}
      {hasMoreData ? (
        <motion.div
          className="load-more-container"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Button
            text="More Memories"
            children={<ArrowRight color="#e879a6" strokeWidth={1} />}
            onClick={showNextBatch}
            variant="borderless"
          />
        </motion.div>
      ) : (
        <motion.div
          className="load-more-container"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Button
            text="Continue"
            children={<ArrowRight color="#e879a6" strokeWidth={1} />}
            onClick={clickContinue}
            variant="borderless"
          />
        </motion.div>
      )}
    </main>
  );
}
