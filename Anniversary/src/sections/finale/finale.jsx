import { motion } from "motion/react";
import { Heart } from "lucide-react";
import "./finale.css";

export default function Finale() {
  return (
    <main className="finale-page">
      <motion.section
        className="finale-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Heading */}
        <motion.p
          className="finale-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
            END OF YEAR: 001
        </motion.p>

        <motion.h1
          className="finale-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          This is only
          <br />
          the beginning.
        </motion.h1>

        <div className="finale-divider">
          <span />
          <Heart size={13} color="#ff454f" />
          <span />
        </div>

        {/* Photo and letter */}
        <motion.div
          className="finale-scrapbook"
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div className="finale-photo-frame">
            <img
              src="https://cdn.dbimg.app/q7FqOBcn.jpg"
              alt="One of our favourite memories"
            />
          </div>

          <div className="finale-letter">
            <p>Thanks for being with me, I know I am not easy to be with.</p>
            <p>For all the laughs that we shared, the chaos,</p>
            <p>the quiet days, the happening ones too.</p>
            <p>For everything that has happened in this One year,</p>
            <p>I feel lucky to do it with You.</p>
            <p>I Love You</p>

            <div className="finale-letter-heart">♡</div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          className="finale-closing"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9 }}
        >
          <p>With love, always.</p>
          <Heart size={14} color="#ff454f" />
        </motion.div>
      </motion.section>
    </main>
  );
}
