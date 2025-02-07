import React from "react";

function PublicationHistoryList({
    publicationHistory,
  }: {
    publicationHistory: string[];
  }) {
    return (
      <>
        <h4>Publication History:</h4>
        <ul>
          {publicationHistory.map((publication) => (
            <li>{publication}</li>
          ))}
        </ul>
      </>
    );
  }
  
  export default PublicationHistoryList;