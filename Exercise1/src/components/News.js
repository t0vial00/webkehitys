import React from 'react';
import logo from './man.jpg';

export default function News() {
  return (
            <div className="News-Container">
              <div className="News-item"> 
                  <h2>MAN kuorma-auton matka päättyi lyhyeen. </h2>          
                    <img src={logo} />
                    <li>HS uutiset avaruudesta. </li>
                  <p className="Title">BREAKING NEWS: Corona beer sold out as lockdown ends</p>
                <div>Click to read the full article</div>                          
              </div>
            </div>
);}
