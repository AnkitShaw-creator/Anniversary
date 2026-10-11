import { useState } from "react";
import { motion } from "motion/react";
import "./PhotoCard.css";

export default function PhotoCard({
  photo,
  index,
  maxZIndex,
  setMaxZIndex,
  containerRef,
}) {
  // Tracks the individual z-index of this card
  const [zIndex, setZIndex] = useState(index);

  // Generate a slightly randomized initial position and rotation for the "scattered" look
  const [initialPosition] = useState(() => {
    const isMobile = window.innerWidth <= 768;

    const cardWidth = isMobile ? 125 : 180;
    const cardHeight = isMobile ? 170 : 220;

    const centerX = window.innerWidth / 2 - cardWidth / 2;

    const centerY = isMobile
      ? window.innerHeight * 0.62 - cardHeight / 2
      : window.innerHeight * 0.63 - cardHeight / 2;

    // Controlled offsets around the centre
    const positions = [
      { x: -120, y: -70 },
      { x: -40, y: -100 },
      { x: 50, y: -80 },
      { x: 130, y: -20 },

      { x: -140, y: 0 },
      { x: -55, y: 10 },
      { x: 35, y: 15 },
      { x: 120, y: 50 },

      { x: -125, y: 75 },
      { x: -35, y: 85 },
      { x: 55, y: 95 },
      { x: 135, y: 125 },

      { x: -90, y: 155 },
      { x: 10, y: 165 },
      { x: 100, y: 180 },
    ];

    const base = positions[index % positions.length];

    const randomX = (Math.random() - 0.5) * 40;
    const randomY = (Math.random() - 0.5) * 30;

    return {
      x: centerX + base.x + randomX,
      y: centerY + base.y + randomY,
    };
  });

  // Predefined rotation angles for a scattered effect
  const rotations = [-8, 5, -4, 7, -6, 3, -9, 6, -3, 8, -5, 4, -7, 2, 9];
  const initialRotate = rotations[index % rotations.length];

  const handleDragStart = () => {
    // Bring card to the absolute front when dragging begins
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setZIndex(newZ);
  };

  return (
    <motion.article
      drag
      dragConstraints={containerRef} // Constrain dragging within the parent container
      dragElastic={0.1} // Adds a slight "stretch" effect when dragging near the edges
      dragMomentum={true} // Adds smooth glide physics after releasing from touchpad
      dragTransition={{ power: 0.2, timeConstant: 200 }}
      onPointerDown={handleDragStart} // Ensures it jumps to top immediately on click/touch
      initial={{
        x: initialPosition.x,
        y: initialPosition.y,
        rotate: initialRotate,
      }}
      whileDrag={{
        scale: 1.05,
        rotate: initialRotate * 0.5,
        cursor: "grabbing",
        boxShadow: "0px 25px 50px rgba(0,0,0,0.5)", // CamelCase required for motion/react styles
      }}
      style={{ zIndex }}
      className="card-container"
    >
      <div className="card-media">
        {photo.type === "video" ? (
          <video
            src={photo.url}
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
        ) : (
          <img
              src={photo.url}
              alt={photo.title}
              download="false"
              draggable={false} // Prevents default browser drag behavior on the image
              className="card-image"
              loading="lazy"
              onLoad={() => console.log("Image loaded:", photo.title)}
              onError={(e) => console.error("Image failed:", photo.title, e.currentTarget.src)}
          />
        )}
      </div>

      <p className="card-caption">{photo.title}</p>
    </motion.article>
  );
}
