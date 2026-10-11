import {useState} from 'react';
import {motion} from 'motion/react';
import './confession.css';
import { PHOTO_DATA } from "../../data/imageData.js";
import Button from "../../components/Button/Button";
import { ArrowRight } from "lucide-react";

export default function Confession({ onContinue }) {
    const clickContinue = () => {
      onContinue();
    };


    return (
      <main className="confession-container">
        <section className="confession-section">
          <motion.article className="confession-content">
            <video
              src="/videos/test.mp4"
              className="card-video"
              controls
              download="false"
              sound="true"
              playsInline
              preload="metadata"
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <p className="confession-title">A little note for you</p>
          </motion.article>
        </section>
        <motion.div
          className='confession-button'
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
      </main>
    );
}