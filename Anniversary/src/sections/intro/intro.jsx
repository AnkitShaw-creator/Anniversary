import React from "react";
import "./intro.css";
import { useState } from "react";
import Button from "../../components/Button/Button.jsx";
import {motion} from "motion/react"

export default function Intro({ onContinue }) {
    const clickContinue = () => {
        onContinue();
    }
    return (
      <section className="wrapper-container">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          ACCESS GRANTED!
        </motion.h1>

        <div className="intro-text">
          <motion.h3
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Welcome to
          </motion.h3>
          <h3>
            <em>Our FIRST Year</em>
          </h3>
        </div>
        <motion.h3
          initial={{ opacity: 0, x: -2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
        >
          Lets see Our Journey Together so far...
        </motion.h3>
        <motion.div
          className="button-container"
          initial={{ opacity: 0, y: 2000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4.5 }}
        >
          <Button
            text="Continue"
            onClick={clickContinue}
            variant="primary"
            disabled={false}
          />
        </motion.div>
      </section>
    );
}