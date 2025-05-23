import React from "react";
import { TrackingHeader } from "./component/TrackingHeader";
import { Footer } from "./component/Footer";
import './index.css';
import useScript from "./hooks/useScript";

const ThankYou = () => {
  useScript('https://pxl.iqm.com/i/pixel/0af78a3b-c49d-475a-99b9-1fcfc6339b44');
  useScript('https://pxl.iqm.com/i/pixel/940ab7f9-48bb-4157-ac40-138e400d4893');

  return (
    <>
      
      <TrackingHeader />
      <div className="thank-you-container">
      <h1 className="heading-big">Thank You</h1>
      <br />
        <h1 className="heading">
          For showing your interest in Roswalt Zaiden. We will get in
          touch with you shortly.
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
