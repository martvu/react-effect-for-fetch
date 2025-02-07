import React, { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
import useFetchData from "../../hooks/useFetchData";

export interface AdviceSlipData {
  slip: {
    id: number;
    advice: string;
  };
}

const emptyAdviceSlip: AdviceSlipData = {
  slip: {
    id: 0,
    advice: "",
  },
};

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [favouriteSlips, setFavouriteSlips] = useState<
    AdviceSlipData["slip"][]
  >(
    localStorage.getItem("favouriteSlips")
      ? JSON.parse(localStorage.getItem("favouriteSlips")!)
      : []
  );
  const { data, refetch } = useFetchData<AdviceSlipData>(url, emptyAdviceSlip);

  /* useEffect(() => {
    // delete from local storage
    localStorage.removeItem("favouriteSlips");
  }, []);
   */
  const saveToFavourites = () => {
    // if slip is already in favourites, do not add it again
    if (favouriteSlips.some((slip) => slip.id === data.slip.id)) return;
    setFavouriteSlips((prev) => {
      const updatedFavourites = [...prev, data.slip];
      localStorage.setItem("favouriteSlips", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        data={data}
        fetchData={refetch}
        saveToFavourites={saveToFavourites}
      />
      <FavouriteSlipsList favouriteSlips={favouriteSlips} />
    </section>
  );
}

export default AdviceSection;
