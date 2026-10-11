
import react from "react";

export default function IconButton({ children, onClick, ariaLabel, className='', variant='default' }) {

    return (
        <button className={`icon-button icon-button-${variant} ${className}`} onClick={onClick} aria-label={ariaLabel}>
            {children}
        </button>
    );
}