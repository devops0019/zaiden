import React, {useState, useEffect} from 'react'
import {gsap} from 'gsap'
import {Header} from './component/Header'
import {GetInTouchBtn} from './component/GetInTouchBtn'
import {CommonGetinTouch} from './component/CommonGetinTouch'
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

  return (
    <div className="App">
      <div className="logo-bg"></div>
      <Header
        setCommonFormState={setCommonFormState}
      />
      <CommonGetinTouch
        commonFormState={commonFormState}
        setCommonFormState={setCommonFormState}
      />
      <GetInTouchBtn setCommonFormState={setCommonFormState} />
      <Masthead />
      <LiveCelebLife />
      <GlobalLocation />
      <Amenities />
      {/* <FloorPlans /> */}
      <Location />
      <Footer setCommonFormState={setCommonFormState} />
    </div>
  );
}

export default App;
