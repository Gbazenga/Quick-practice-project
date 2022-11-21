import React from 'react';
import './App.css';

import { useState } from "react"
 
const img1 = require ("./imgs/bg-header-1.jpg") 

const icon1 = require ("./imgs/icon-1.png") 
const icon2 = require ("./imgs/icon-2.png") 

function App() {

  const DUMMY_TEXT = <>
          <h3>Lorem Ipsum</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus euismod, interdum purus eget, dignissim sem. Aliquam at egestas diam.</span><br/>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus euismod, interdum purus eget, dignissim sem. Aliquam at egestas diam.</span><br/>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus euismod, interdum purus eget, dignissim sem. Aliquam at egestas diam.</span><br/>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus euismod, interdum purus eget, dignissim sem. Aliquam at egestas diam.</span>
    </>

  const [currentBackground, setCurrentBackground] = useState(`url(".${img1}") no-repeat`)

  function backgroundDefaultChanger(event: React.MouseEvent) {
    const element = event.target as HTMLElement
    const bgElement = element.nextSibling as HTMLElement
    const bgId = bgElement.id[11]
    const img = require (`./imgs/bg-header-${bgId}.jpg`) 

    setTimeout(() => {
      setCurrentBackground(`url(".${img}") no-repeat`)
    }, 300)
  }

  return (
    <div className="App">
      <div id="radial-menu">

        <div id="radial-lines">
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
        </div>

        <div id='background-default' style={{background: currentBackground}}></div>
      
        <div className='slice' id="top-left" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon1} className="title-icon" alt="icon 1"/>
          <p>top left</p>
        </div>
        <div className='background' id='background-1'></div>

        <div className='slice' id="top-center-left" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon2} className="title-icon" alt="icon 2" />
          <p>top center left</p>
        </div>
        <div className='background' id='background-2'></div>

        <div className='slice' id="top-right" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon2} className="title-icon" alt="icon 2" />
          <p>top right</p>
        </div>
        <div className='background' id='background-3'></div>

        <div className='slice' id="top-center-right" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon1} className="title-icon" alt="icon 1"/>
          <p>top center right</p>
        </div>
        <div className='background' id='background-4'></div>

        <div className='slice' id="bottom-right" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon1} className="title-icon" alt="icon 1"/>
          <p>bottom right</p>
        </div>
        <div className='background' id='background-5'></div>

        <div className='slice' id="bottom-center-right" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon2} className="title-icon" alt="icon 2" />
          <p>bottom center<br/>right</p>
        </div>
        <div className='background' id='background-6'></div>

        <div className='slice' id="bottom-left" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon2} className="title-icon" alt="icon 2" />
          <p>bottom left</p>
        </div>
        <div className='background' id='background-7'></div>

        <div className='slice' id="bottom-center-left" onMouseEnter={backgroundDefaultChanger}>
          <img src={icon1} className="title-icon" alt="icon 1"/>
          <p>bottom center<br/>left</p>
        </div>
        <div className='background' id='background-8'></div>

        <div className="text-wall" id="text-left">
          <div id="top-right-text" className='text-bit'>{DUMMY_TEXT}</div>
          <div id="top-center-right-text" className='text-bit'>{DUMMY_TEXT}</div>
          <div id="bottom-right-text" className='text-bit'>{DUMMY_TEXT}</div>
          <div id="bottom-center-right-text" className='text-bit'>{DUMMY_TEXT}</div>
        </div>
        <div className="text-wall" id="text-right">
          <div id="top-left-text" className='text-bit'>{DUMMY_TEXT}</div>
          <div id="top-center-left-text" className='text-bit'>{DUMMY_TEXT}</div>
          <div id="bottom-left-text" className='text-bit'>{DUMMY_TEXT}</div>
          <div id="bottom-center-left-text" className='text-bit'>{DUMMY_TEXT}</div>    
        </div>
 
      </div>
    </div>
  );
}

export default App;
