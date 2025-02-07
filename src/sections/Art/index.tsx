import React, { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

export interface Art {
  id: number;
  artist: string;
  imageURL: string;
  publicationHistory: string[];
  title: string;
}

function ArtsSection() {
  const baseUrl = "https://boolean-uk-api-server.fly.dev";
  const artUrl = `${baseUrl}/art`;
  const [artData, setArtData] = useState<Art[]>([]);

  const fetchData = async () => {
    const response = await fetch(artUrl);
    const data = await response.json();
    setArtData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(artData);

  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList artData={artData} baseUrl={baseUrl} />
    </section>
  );
}

export default ArtsSection;




