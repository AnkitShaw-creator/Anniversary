import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Contract.css";
import { Heart } from "lucide-react";

export default function Contract({ onContinue }) {
    const [stage, setStage] = useState("contract");

    const handleAccept = () => {
      setStage("accepted");
    };

    return (
      <main className="contract-page">
        <AnimatePresence mode="wait">
          {stage === "contract" ? (
            <motion.section
              key="contract"
              className="contract-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="contract-eyebrow">RELATIONSHIP AGREEMENT · 002</p>

              <h1>
                One Year
                <br />
                Completed.
              </h1>

              <div className="contract-divider">
                <span>
                  <Heart color="red" />
                </span>
              </div>

              <div className="contract-text">
                <p>
                  After reviewing the events of the previous year, both parties
                  acknowledge that...
                </p>

                <p>
                  there were fights, <br />
                  stupid arguments, <br />
                  countless meals, unexpected adventures, <br />
                  and quite a lot of memories.
                </p>

                <p>And somehow, we made it here.</p>
              </div>

              <motion.div
                className="contract-question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="contract-question-label">THE QUESTION</p>

                <h2>
                  <em>
                    Would you like to
                    <br />
                    be my girlfriend again?
                  </em>
                </h2>
                <p className="contract-question-subtitle">
                  <em>Shall we do it again?</em>
                </p>
                <p className="contract-question-subtitle">
                  For another year.
                  <br />
                  And whatever comes after that.
                </p>
              </motion.div>

              <motion.div
                className="contract-actions"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.7 }}
              >
                <button
                  className="contract-button contract-button-primary"
                  onClick={handleAccept}
                >
                  <span>Yes, I agree</span>
                  <span className="contract-accept-heart" aria-hidden="true">
                    ♥
                  </span>
                </button>

                <button
                  className="contract-button contract-button-secondary"
                  onClick={() => setStage("thinking")}
                >
                  I need to think about it
                </button>
              </motion.div>
            </motion.section>
          ) : stage === "thinking" ? (
            <motion.section
              key="thinking"
              className="contract-content contract-thinking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {" "}
              <motion.div
                className="thinking-content"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="contract-eyebrow">FAIR ENOUGH</p>

                <h1>Take your time.</h1>

                <div className="contract-divider">
                  <span>
                    <Heart color="red" />
                  </span>
                </div>

                <p className="contract-text-single">
                  No pressure.
                  <br />
                  This agreement isn't going anywhere.
                  <br />
                  Nor am I.
                </p>

                <button
                  className="contract-button contract-button-primary"
                  onClick={() => setStage("contract")}
                >
                  Okay, let me reconsider...
                </button>
              </motion.div>
              <motion.div
                className="thinking-photo"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* /** LEFT - PHOTO */}
                <img src="/images/take_your_time.JPG" alt="" />
              </motion.div>
            </motion.section>
          ) : (
            <motion.section
              key="accepted"
              className="contract-content contract-accepted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="accepted-photo"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* /** LEFT - PHOTO */}
                <img src="/images/accepted_background.jpg" alt="us" />
              </motion.div>

              <motion.div
                className="accepted-content"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* RIGHT - CONTENT */}
                <p className="contract-eyebrow">AGREEMENT RENEWED</p>
                <h1>It's official.</h1>
                <br />
                <br />
                <div className="contract-divider">
                  <span>
                    <Heart color="red" />
                  </span>
                </div>
                <div className="accepted-details">
                  <p>
                    <span>TERM</span>Another year
                  </p>

                  <p>
                    <span>STATUS</span> Renewed
                  </p>

                  <p>
                    <span>PARTIES</span>Us
                  </p>
                </div>
                <p className="accepted-message">
                  Thank you for choosing me
                  <br />
                  for another year.
                </p>

                <motion.button
                  className="finale-button"
                  onClick={onContinue}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.7 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  One last thing… <span aria-hidden="true">→</span>
                </motion.button>

                <p className="finale-button-caption">
                  You've made it this far.
                  <br />
                  Let's see what's next.
                </p>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    );
}
