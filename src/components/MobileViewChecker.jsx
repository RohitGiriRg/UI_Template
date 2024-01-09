import React, { useEffect, useState } from 'react';

import './mobile.css'

import user from '../assets/user.jpg'
import bell from '../assets/bell.png'

import StackedBarChart from './StackbarChart';
import RangeSlider from './RangeSlider';
import RangeSliderper from './RangeSliderper.jsx';
import { CircularProgressbar } from 'react-circular-progressbar';

const MobileViewChecker = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth <= 1100); // Check if screen width is less than or equal to 768px
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div>
      {isMobileView && <div className="mobile-container">
      <div className="mobile-container01">
        <div className="mobile-container02">
          <img
            alt="image"
            src={bell}
            className="mobile-image"
          />
        </div>
        <div className="mobile-container03">
          <img
            alt="image"
            src={user}
            className="mobile-image1"
          />
          <div className="mobile-container04">
            <span className="mobile-text">Hi Mike,</span>
            <span className="mobile-text01">Welcome back.</span>
          </div>
        </div>
        <div className="mobile-container05">
          <div className="mobile-container06">
            <div className="mobile-container07">
              <span className="mobile-text02">Today</span>
              <span className="mobile-text03">$19,892</span>
              <span className="mobile-text04">Account Balance</span>
              <div className="mobile-container08">
                <div className="mobile-container09">
                  <span className="mobile-text05">$4,000</span>
                  <span className="mobile-text06">Year-to-Date</span>
                </div>
                <div className="mobile-container10">
                  <span className="mobile-text07">$1,892</span>
                  <span className="mobile-text08">Total Interest</span>
                </div>
              </div>
              <button type="button" className="mobile-button button">
                <span className="mobile-text09">I want to...</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-container11">
          <div className="mobile-container12">
            <div className="mobile-container13">
              <span className="mobile-text10">Recent Transactions</span>
              <span className="mobile-text11">2020-08-07</span>
              <span className="mobile-text12">
                Withdrawal Transfer to Bank-XXX11
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="mobile-separator"></div>
              <span className="mobile-text13">2020-07-21</span>
              <span className="mobile-text14">
                Withdrawal Transfer to Bank-XXX11
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="mobile-separator1"></div>
              <span className="mobile-text15">2020-07-16</span>
              <span className="mobile-text16">
                <span className="mobile-text17">
                  Withdrawal Transfer to Bank-XXX11
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-container14">
        <div className="mobile-container15">
          <span className="mobile-text19">
            <span>Returement Income</span>
            <br></br>
          </span>
          <span className="mobile-text22">Starting Year 2056</span>
          <div className="mobile-container16">
            <span className="mobile-text23">
              <span>$300,000</span>
              <br></br>
            </span>
            <span className="mobile-text26">My Goal</span>
            <div className="mobile-separator2"></div>
          </div>
          <div className="mobile-container17">
            <div className="mobile-container18">
              <span className="mobile-text27">
                <span>59%</span>
                <br></br>
              </span>
              <span className="mobile-text30">Goal Achieved</span>
              <div className="mobile-separator3"></div>
            </div>
            <div className="mobile-container19">
              <span className="mobile-text31">
                <span>K 300</span>
                <br></br>
              </span>
              <span className="mobile-text34">Est. Montly Income</span>
              <div className="mobile-separator4"></div>
            </div>
          </div>
        </div>
        <div className="mobile-container20">
          <div className="mobile-container21">
            <span className="mobile-text35">Contributions Overtime</span>
            <StackedBarChart  />
          </div>
        </div>
        <div className="mobile-container22">
          <div className="mobile-container23">
            <span className="mobile-text36">How do I compare to my peers?</span>
            <span className="mobile-text37">
              These numbers represent current goal achievement
            </span>
            <div className="mobile-container24">
              <div className="mobile-container25">
                <div className="mobile-container26">
                  <span className="mobile-text38">Age:</span>
                  <span className="mobile-text39">        Under 30 ▼</span>
                </div>
                <div className="mobile-separator5"></div>
                <div className="mobile-container27">
                  <span className="mobile-text40">Salary:</span>
                  <span className="mobile-text41">    K 20 - K 30 ▼</span>
                </div>
                <div className="mobile-separator6"></div>
                <div className="mobile-container28">
                  <span className="mobile-text42">Gender:</span>
                  <span className="mobile-text43">   Male ▼</span>
                </div>
              </div>
            </div>
            <div className="mobile-container29">
              <div className="mobile-container30">
               <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbar value={78}  text='78%'></CircularProgressbar>
                </div>
                <span>Average</span>
              </div>
              <div className="mobile-container31">
              <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbar value={95}  text='95%'></CircularProgressbar>
                </div>
                <span>Top</span>
              </div>
              <div className="mobile-container32">
              <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbar value={59}  text='59%'></CircularProgressbar>
                </div>
                <span>Me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-container33">
        <div className="mobile-container34">
          <div className="mobile-container35">
            <span className="mobile-text47">Retirement Strategy</span>
            <div className="mobile-container36">
              <span className="mobile-text48">Employee Contribution</span>
              <div className="mobile-container37">
                <RangeSliderper />
              </div>
            </div>
            <div className="mobile-container38">
              <span className="mobile-text49">Retirement Age</span>
              <div className="mobile-container39">
                <RangeSlider />
              </div>
            </div>
            <div className="mobile-container40">
              <span className="mobile-text50">Employer Contribution</span>
              <span className="mobile-text51"> 8.4%</span>
            </div>
            <div className="mobile-container41">
              <span className="mobile-text52">Interest Rate</span>
              <span className="mobile-text53"> 5%</span>
            </div>
           
          </div>
          <div className="mobile-container42">
              <button type="button" className="mobile-button1 button">
                <span className="mobile-text54">Update </span>
              </button>
            </div>
        </div>
      </div>
    </div>
    }
      {/* Other components or content */}
    </div>
  );
};

export default MobileViewChecker;
