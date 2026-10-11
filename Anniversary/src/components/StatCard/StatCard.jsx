import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./StatCard.css";
import { X } from "lucide-react";

function StatCard({ label, value, description, bubbleColor }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <article className="stat-card">
        <button
            className="stat-number"
            style={{ "--bubble-color": bubbleColor }}
            type="button"
            aria-label={`Show ${label}`}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
        >
            {value}
        </button>

        <AnimatePresence>
            {isOpen && (
            <>
                <motion.button
                className="stat-backdrop"
                type="button"
                aria-label="Close statistic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                />

                <div className="stat-modal" role="dialog" aria-modal="true">
                <motion.section
                    className="stat-info"
                    initial={{ opacity: 0, scale: 0.9, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 16 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                    <button
                    className="stat-close"
                    type="button"
                    aria-label="Close"
                    onClick={() => setIsOpen(false)}
                    >
                    <X/>
                    </button>

                    <p className="stat-label">{label}</p>
                    <p className="stat-value">{value}</p>
                    <p className="stat-description">{description}</p>
                </motion.section>
                </div>
            </>
            )}
        </AnimatePresence>
    </article>
  );
}

export default StatCard;