import React from "react";
import { Art, baseUrl } from "..";
import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ art }: { art: Art; }) {
  console.log(art.imageURL);
  return (
    <li>
      <div className="frame">
        <img src={`${baseUrl}${art.imageURL}`} />
      </div>
      <h3>{art.title}</h3>
      <p>{art.artist}</p>
      <PublicationHistoryList publicationHistory={art.publicationHistory} />
    </li>
  );
}

export default ArtListItem;


