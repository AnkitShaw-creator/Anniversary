import react from "react";
import { useState } from 'react'
import "./password.css";
import Button from "../../components/Button/Button.jsx";  
import IconButton from "../../components/IconButton/IconButton.jsx";
import { ArrowLeft, X } from "lucide-react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { motion } from "motion/react";


const PIN_LENGTH = 6; // Define the required PIN length
export default function Password({onSuccess}) {

    const [pin, setPin] = useState("");
    const [unlocking, setUnlocking] = useState(false);

    const MySwal = withReactContent(Swal);
    const showErrorAlert = () => {
        MySwal.fire({
            title: <p>Opsss!</p>,
            text: "The date you entered is incorrect.",
            icon: "error",
            theme: "dark",
        });
    };

    const unlockWithPin = (enteredPin) => {
        if (enteredPin === "261025") {
            setUnlocking(true);

            setTimeout(() => { 
                    onSuccess(); // Call the onSuccess callback when the PIN is correct
                }, 2000); // 2000ms delay for the unlocking animation
        }
        else {
            setPin("");
            showErrorAlert(); 
        }
        return;
    }

    const handleKeyPress = (num) => {
        if (unlocking || pin.length >= PIN_LENGTH) return;

        const nextPin = pin + num;
        setPin(nextPin);
        if (nextPin.length === PIN_LENGTH)
            unlockWithPin(nextPin);
    };

    const handleBackspace = () => {
        const newPin = pin.slice(0, -1);
        setPin(newPin);
    };

    const handleClear = () => {
        setPin("");
    };

    return (
        <section className={`wrapper-container ${unlocking ? 'unlocking' : ''}`}>
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
            >
                Our Date
            </motion.h1>
            <motion.h3
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                Enter the date to unlock our story
            </motion.h3>
            <div className="pin-container">

                {/* Visual Dot Indicators */}
                <div className="pin-dots">
                    {Array.from({ length: PIN_LENGTH }).map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index < pin.length ? "filled" : ""}`}
                    />
                    ))}
                </div>

                {/* 3x4 Grid Number Pad Layout */}
                <div className="numpad-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            type="button"
                            className="num-btn"
                            onClick={() => handleKeyPress(num.toString())}
                        >{num}</button>
                    ))}
                    {/* Clear button */}
                    <IconButton onClick={handleClear} ariaLabel="Clear">
                        <X/>
                    </IconButton>

                    <button text="0" className="num-btn" onClick={() => handleKeyPress("0")}>0</button>
                    {/* Backspace button */}

                    <IconButton onClick={handleBackspace} ariaLabel="Backspace">
                        <ArrowLeft/>
                    </IconButton>
                </div>
            </div>
        </section>
    );
}