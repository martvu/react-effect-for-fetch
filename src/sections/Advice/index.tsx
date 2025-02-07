import React, { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

export interface AdviceSlipData {
  id: number;
  advice: string;
}

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [adviceSlip, setAdviceSlip] = useState<AdviceSlipData>({
    id: 0,
    advice: "",
  });
  const [favouriteSlips, setFavouriteSlips] = useState<AdviceSlipData[]>(
    localStorage.getItem("favouriteSlips")
      ? JSON.parse(localStorage.getItem("favouriteSlips")!)
      : []
  );

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAdviceSlip(data.slip);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveToFavourites = () => {
    setFavouriteSlips((prev) => {
      const updatedFavourites = [...prev, adviceSlip];
      localStorage.setItem("favouriteSlips", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        data={adviceSlip}
        fetchData={fetchData}
        saveToFavourites={saveToFavourites}
      />
      <FavouriteSlipsList favouriteSlips={favouriteSlips} />
    </section>
  );
}

export default AdviceSection;
