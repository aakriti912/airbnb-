import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = (props) => {
     console.log(props.openSpot);
  return (
   
    <div className="column">
      <div className="card">
        {props.openSpot === 0 && <div className="badge">soldout</div>}
        <img src={props.items.img} alt="img" className="swims" />
        <div className="card__details">
          <span className="tag">
            <AiFillStar style={{ fontSize: "15px", color: "orange" }} />
            {props.items.star}
          </span>

          <span className="tag">{props.items.country}</span>

          <p>{props.items.theory}</p>

          <button>{props.items.price}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
