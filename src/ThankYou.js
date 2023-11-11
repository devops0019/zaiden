import React from "react";
import { TrackingHeader } from "./component/TrackingHeader";
import { Footer } from "./component/Footer";
import './index.css';

const ThankYou = () => {
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
