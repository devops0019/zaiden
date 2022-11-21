import React, {useState, useEffect} from 'react'
import {gsap} from 'gsap'
import {Header} from './component/Header'
import {GetInTouchBtn} from './component/GetInTouchBtn'
import {CommonGetinTouchForm} from './component/CommonGetinTouch'
import {Masthead} from './component/Masthead'
import {LiveCelebLife} from './component/LiveCelebLife'
import { GlobalLocation } from './component/GlobalLocation'
import {Amenities} from './component/Amenities'
/* import {FloorPlans} from './component/FloorPlans' */
import {Location} from './component/Location'
import {Footer} from './component/Footer'

function App() {

  useEffect(() => {
    gsap.to(".logo-bg", {
      rotate: 720,
      ease: "none",
      scrollTrigger: {
        trigger: ".App",
        scrub: true
      }
    })
  }, [])

  let [commonFormState, setCommonFormState] = useState(true);
  let [downloadReq, setDownloadReq] = useState(false);

  return (
    <div className="App">
      <div className="logo-bg"></div>
      <Header
        setCommonFormState={setCommonFormState}
        setDownloadReq={setDownloadReq}
      />
      <CommonGetinTouchForm
        commonFormState={commonFormState}
        setCommonFormState={setCommonFormState}
        downloadReq={downloadReq}
      />
      <GetInTouchBtn setCommonFormState={setCommonFormState} setDownloadReq={setDownloadReq} />
      <Masthead />
      <LiveCelebLife />
      <GlobalLocation />
      <Amenities />
      {/* <FloorPlans /> */}
      <Location />
      <Footer setCommonFormState={setCommonFormState} setDownloadReq={setDownloadReq} />
    </div>
  );
}

export default App;
