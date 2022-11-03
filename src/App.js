import React, {useState} from 'react'
import {Header} from './component/Header'
import {GetInTouchBtn} from './component/GetInTouchBtn'
import {CommonGetinTouch} from './component/CommonGetinTouch'
import {Masthead} from './component/Masthead'
import {LiveCelebLife} from './component/LiveCelebLife'
import { GlobalLocation } from './component/GlobalLocation'
import {Amenities} from './component/Amenities'
import {FloorPlans} from './component/FloorPlans'
import {Location} from './component/Location'
import {Footer} from './component/Footer'

function App() {

  let [commonFormState, setCommonFormState] = useState(false);

  return (
    <div className="App">
      <Header
        setCommonFormState={setCommonFormState}
      />
      <CommonGetinTouch
        commonFormState={commonFormState}
      />
      <GetInTouchBtn />
      <Masthead />
      <LiveCelebLife />
      <GlobalLocation />
      <Amenities />
      <FloorPlans />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
