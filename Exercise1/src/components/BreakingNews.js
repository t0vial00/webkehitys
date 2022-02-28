import React from 'react';

export default function BreakingNews() {
  return <div> 
            <div className="flex-breakingnews">
                <div className="breaking-title">PÄIVÄN TIMANTTI:</div>
                <div className="breaking-items"> Vesa-Matti Loiri voitti presidentinvaalit!</div>
            </div>

            <div className="flex-breakingnews">
                <div className="breaking-title">PÄIVÄN TIMANTTI:</div>
                <div className="breaking-items">Putin sairaalassa alkoholimyrkytyksestä</div>
            </div>

            <div className="flex-breakingnews flex-advert">
                <div className="breaking-title">Mainos: </div>
                <div className="breaking-items">Maista uusi sibs-maku: hernekeitto!</div>
            </div>
            
         </div>;
}
