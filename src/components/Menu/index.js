import React, { useEffect } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

import { FaXTwitter } from 'react-icons/fa6';

const Menu = () => {

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

        const glitchNumberElements = document.querySelectorAll(".GlitchNumber");
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

            <div className='MenuSec'>
                <div className='MenuInfo'>
                    <a href="https://twitter.com/What_if_sol" className="GlitchMenu GlitchNumber" data-text="Twitter" target="_blank">Twitter</a>
                    <a href="https://t.me/WIFonSOL" className="GlitchMenu GlitchNumber" data-text="Telegram" target="_blank">Telegram</a>
                </div>
            </div>

        </div>
    )
}

export default Menu