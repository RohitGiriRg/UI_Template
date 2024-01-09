import React from 'react';



import design1 from "../assets/design1.png"
import user from "../assets/user.jpg"
import StackedBarChart from './StackbarChart'
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import Navbar from './Navbar';

import './FirstSection.css';
import CircularProgressBar from './CircularProgressBar';
import RangeSlider from './RangeSlider';
import RangeSliderper from './RangeSliderper.jsx';



const FirstSection = (props) => {
  return (

    <div className="home-container display-container">
      <div className="home-container01">
        <div className="home-container02">
          <img
            alt="image"
            src={user}
            className="home-image"
          />
          <div className="home-container03">
            <span>Hi Mike,</span>
            <span className="home-text01">Welcome back.</span>
          </div>
        </div>
        <div className="home-container04">
          <div className="home-container05">
            <span className="home-text02">Today</span>
            <span className="home-text03">$19,892</span>
            <span className="home-text04">Account Balance</span>
            <span className="home-text05">$4,000</span>
            <span className="home-text06">Year-to-Date Contributions</span>
            <span className="home-text07">$1,892</span>
            <span className="home-text08">Total Interest</span>
            <button type="button" className="home-button button">
              <span className="home-text09">
                <span className="home-text10">I want to ▼</span>
                <span> </span>
              </span>
            </button>
          </div>
        </div>
            <br />
        <div className="home-container06">
          <div className="home-container07">
            <span className="home-text12">Recent Transactions</span>
            <span className="home-text13">2020-08-07</span>
            <span className="home-text14">
              Withdrawal Transfer to Bank-XXX11
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="home-separator"></div>
            <span className="home-text15">2020-07-21</span>
            <span className="home-text16">
              Withdrawal Transfer to Bank-XXX11
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="home-separator1"></div>
            <span className="home-text17">2020-07-16</span>
            <span className="home-text18">
              Withdrawal Transfer to Bank-XXX11
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="home-container08">
        <div className="home-container09">
          <span className="home-text19">
            <span>Returement Income</span>
            <br></br>
          </span>
          <span className="home-text22">Starting Year 2056</span>
          <div className="home-container10">
            <div className="home-container11">
              <span className="home-text23">
                <span>$3000,000</span>
                <br></br>
              </span>
              <span className="home-text26">My Goal</span>
              <div className="home-separator2"></div>
            </div>
            <div className="home-container12">
              <span className="home-text27">
                <span>59%</span>
                <br></br>
              </span>
              <span className="home-text30">Goal Achieved</span>
              <div className="home-separator3"></div>
            </div>
            <div className="home-container13">
              <span className="home-text31">
                <span>$300</span>
                <br></br>
              </span>
              <span className="home-text34">Est. Montly Income</span>
              <div className="home-separator4"></div>
            </div>
          </div>
        </div>
        <div className="home-container14">
          <span className="home-text35">Contributions Overtime</span>
           <StackedBarChart />
        </div>
        <div className="home-container15">

          <span className="home-text36">How do I compare to my peers?</span>
          <span className="home-text37">
            These numbers represent current goal achievement
          </span>
          <div className="home-container16">
            <div className="home-container17">
              <div className="home-container18">
                <span className="home-text38">Age:</span>
                <span className="home-text39">   Under 30 ▼</span>
              </div>
              <div className="home-separator5"></div>
              <div className="home-container19">
                <span className="home-text40">Salary:</span>
                <span className="home-text41">   K 20 - K 30 ▼</span>
              </div>
              <div className="home-separator6"></div>
              <div className="home-container20">
                <span className="home-text42">Gender:</span>
                <span className="home-text43">   Male ▼</span>
              </div>
            </div>
            <div className="home-container21">
              <div className="home-container22">
                <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbar value={78}  text='78%'></CircularProgressbar>
                </div>
                <span>Average</span>
              </div>
              <div className="home-container23">
              <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbar value={95}  text='95%'></CircularProgressbar>
                </div>
                <span>Top</span>
              </div>
              <div className="home-container24">
              <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbar value={59}  text='59%'></CircularProgressbar>
                </div>
                <span>Me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container25">
        <div className="home-container26">
          <div className="home-container27">
            <span className="home-text47">Retirement Strategy</span>
            <div className="home-container28">
              <span className="home-text48">Employee Contribution</span> 
               <RangeSliderper> </RangeSliderper> 
            </div>
            <div className="home-container28">
               <span className="home-text49">Retirement Age</span>
              <RangeSlider></RangeSlider>
            </div>           
            <div className="home-separator7"></div>
            <div className="home-container29">
              <span className="home-text50">Employer Contribution</span>
              <span className="home-text51"> 8.4%</span>
            </div>
            <div className="home-container30">
              <span className="home-text52">Interest Rate</span>
              <span className="home-text53"> 5%</span>
            </div>
            <div className="home-container31">
              <button type="button" className="home-button1 button">
                <span className="home-text54">Update </span>
              </button>
              <span className="home-text55">View Help Docs 〉</span>
            </div>
          </div>
        </div>
        <div className="home-container32">
          <div className="home-container33"></div>
          <div className="home-container34">
            <span className="home-text56">Are you considering a</span>
            <span className="home-text57">Housing Advance?</span>
            <span className="home-text58">Limited time reduced interest.</span>
            <span className="home-text59">Learn More  〉 </span>
          </div>
        </div>
        <img
          alt="image"
          src={design1}
          className="home-image1"
        />
      </div>
    </div>
   
  )
}

export default FirstSection
