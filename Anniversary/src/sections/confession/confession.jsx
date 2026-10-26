import { motion } from "motion/react";
import { Heart, Play } from "lucide-react";
import "./confession.css";

// Put the video in public/videos, or pass videoSrc as a prop.
const DEFAULT_VIDEO_SRC = "https://cdn.dbimg.app/vo5bfH7B.mp4";

export default function Confession({
  onContinue,
  videoSrc = DEFAULT_VIDEO_SRC,
}) {
  return (
    <main className="confession-page">
      <motion.section
        className="confession-content"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="confession-eyebrow">Confession</p>

        <h1 className="confession-title">
          A little note
          <br />
          <em>from me to You.</em>
        </h1>

        <div className="confession-divider" aria-hidden="true">
          <span />
          <Heart size={15} fill="currentColor" />
          <span />
        </div>

        <p className="confession-intro">
          No perfect words, just ami — aar amar moner kichu kotha jeta toke bolte chaitam.
        </p>

        <motion.div
          className="confession-video-frame"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          <video
            className="confession-video"
            controls
            playsInline
            preload="metadata"
            aria-label="A personal anniversary video note"
          >
            <source src={videoSrc} />
            Your browser does not support embedded videos.
          </video>

        </motion.div>

        <p className="confession-footnote">
          Whenever you’re ready.
        </p>

        <motion.button
          className="confession-continue"
          type="button"
          onClick={onContinue}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Continue</span>
          <span className="confession-continue-heart" aria-hidden="true">
            ♥
          </span>
        </motion.button>
      </motion.section>
    </main>
  );
}
