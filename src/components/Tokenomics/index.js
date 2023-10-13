import React, { useEffect } from 'react';
import './Tokenomics.css'

const Tokenomics = () => {

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&/()=?¿";
        let intervals = [];

        const handleMouseOver = (event) => {
            let iteration = 0;
            clearInterval(intervals[event.target.dataset.index]);
            intervals[event.target.dataset.index] = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");
                if (iteration >= event.target.dataset.text.length) {
                    clearInterval(intervals[event.target.dataset.index]);
                }
                iteration += 1 / 3;
            }, 100);
        };

        const glitchNumberElements = document.querySelectorAll(".TokeTitle");
        glitchNumberElements.forEach((element, index) => {
            element.dataset.index = index;
            element.addEventListener("mouseover", handleMouseOver);
            intervals[index] = null;
        });

        return () => {
            glitchNumberElements.forEach((element, index) => {
                element.removeEventListener("mouseover", handleMouseOver);
                clearInterval(intervals[index]);
            });
        };
    }, []);

    return (
        <div>

            <div className='TokenomicsMonitor'>
                <div className='TokeTitle'>
                    <h2 className="GlitchText GlitchNumber" data-text="Tokenomics">Tokenomics</h2>
                </div>
            </div>

        </div>
    )
}

export default Tokenomics