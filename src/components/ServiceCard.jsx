import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, image, route, navigate }) => (
  <div className="service-card" onClick={() => navigate(route)}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default ServiceCard;
