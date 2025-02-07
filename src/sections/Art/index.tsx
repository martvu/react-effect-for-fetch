import React, { useEffect, useState } from "react";
import ArtList from "./components/ArtList";
import useFetchData from "../../hooks/useFetchData";

export interface Art {
  id: number;
  artist: string;
  imageURL: string;
  publicationHistory: string[];
  title: string;
}

export const baseUrl = "https://boolean-uk-api-server.fly.dev";

function ArtsSection() {
  const artUrl = `${baseUrl}/art`;
  const { data } = useFetchData<Art[]>(artUrl, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList artData={data} />
    </section>
  );
}

export default ArtsSection;
