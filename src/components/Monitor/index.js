import React, { useEffect } from 'react';
import '../Monitor/Monitor.css'

import Menu from '../Menu'
import Tokenomics from '../Tokenomics';

const Monitor = () => {

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

      <Menu />

      <div className='MonitorSec'>
        <div className='MonitorBox'>

          <div className='MonitorTitle'>
            <h2 className="GlitchText GlitchNumber" data-text="WHAT IF">WHAT IF</h2>
            <h1 className="GlitchText" data-text="?">?</h1>
          </div>

          <div className='MonitorSecondText'>
            <h3 className="GlitchMenu GlitchNumber" data-text="nothing">nothing </h3>
            <h3 className="GlitchMenu GlitchNumber" data-text="goes">goes </h3>
            <h3 className="GlitchMenu GlitchNumber" data-text="wrong!">wrong!</h3>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Monitor