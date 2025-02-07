import React from "react";
import ArtListItem from "./ArtListItem";
import { Art } from "..";

function ArtList({ artData, baseUrl }: { artData: Art[], baseUrl: string }) {
    return (
      <div className="scroll-container">
        <ul className="art-list">
          {artData?.map((art) => (
            <ArtListItem art={art} baseUrl={baseUrl}/>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ArtList;