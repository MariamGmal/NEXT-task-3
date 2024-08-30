import Link from "next/link";
import React from "react";
import "./card.css";
const card = ({ title, body, id }) => {
  return (
    <>
      <div className="col" key={id}>
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <Link className=" linkk" href={`post/${id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
