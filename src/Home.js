import React, { useState, useEffect } from "react";
import { Header } from "./component/Header";
import { GetInTouchBtn } from "./component/GetInTouchBtn";
import { CommonGetinTouchForm } from "./component/CommonGetinTouch";
import { Masthead } from "./component/Masthead";
import { LiveCelebLife } from "./component/LiveCelebLife";
import { GlobalLocation } from "./component/GlobalLocation";
import { Amenities } from "./component/Amenities";
import { Location } from "./component/Location";
import { Footer } from "./component/Footer";

function Home() {

  let [commonFormState, setCommonFormState] = useState(true);
  let [downloadReq, setDownloadReq] = useState(false);

  return (
    <>
      <Header
        setCommonFormState={setCommonFormState}
        setDownloadReq={setDownloadReq}
      />
      <CommonGetinTouchForm
        commonFormState={commonFormState}
        setCommonFormState={setCommonFormState}
        downloadReq={downloadReq}
      />
      <GetInTouchBtn
        setCommonFormState={setCommonFormState}
        setDownloadReq={setDownloadReq}
      />
      <Masthead />
      <LiveCelebLife />
      <GlobalLocation />
      <Amenities />
      {/* <FloorPlans /> */}
      <Location />
      <Footer
        setCommonFormState={setCommonFormState}
        setDownloadReq={setDownloadReq}
      />
    </>
  );
}

export default Home;
