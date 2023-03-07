import React from "react";

function MiniCard({ BgColor, Icon, CardCount, Cardtext }) {
  return (
    <>
      <div className="t-mini-card mt-4 d-flex col-5 col-md-2 ml-cut-4 mx-auto mx-md-1">
        <div
          className="t-mini-card-icon-container"
          style={{
            backgroundColor: BgColor ,
          }}
        >
          <img className="" src={Icon} />
        </div>
        <div className="mini-card-detail">
          <h4>{CardCount}</h4>
          <p className="t-gray">{Cardtext}</p>
        </div>
      </div>
    </>
  );
}

export default MiniCard;
