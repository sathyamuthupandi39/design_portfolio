import React from "react";

import CardInfog from "../components/CardInfo";

function Cardg(props) {
  return (
    <div
      className="d-inline-block g-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="g-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {/* conditionally rendering it, that is show only when clicked */}
      {/* {props.item.selected && ( */}
      <CardInfog
        title={props.item.title}
        subTitle={props.item.subTitle}
        link={props.item.link}
      />
    </div>
  );
}

export default Cardg;
