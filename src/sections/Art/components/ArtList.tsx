import React from "react";
import ArtListItem from "./ArtListItem";
import { Art } from "..";

function ArtList({ artData }: { artData: Art[]}) {
    return (
      <div className="scroll-container">
        <ul className="art-list">
          {artData?.map((art) => (
            <ArtListItem art={art} />
          ))}
        </ul>
      </div>
    );
  }
  
  export default ArtList;