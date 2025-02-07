import React from "react";
import { AdviceSlipData } from "..";


interface AdviceSlipProps {
    data: AdviceSlipData;
    fetchData: () => void;
    saveToFavourites: () => void;
  }
  
  function AdviceSlip({ data, fetchData, saveToFavourites }: AdviceSlipProps) {
    console.log(data);
    return (
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{data.advice}</p>
        <button onClick={() => fetchData()}>Get More Advice</button>
        <button onClick={() => saveToFavourites()}>Save to Favourties</button>
      </section>
    );
  }
  
  export default AdviceSlip;