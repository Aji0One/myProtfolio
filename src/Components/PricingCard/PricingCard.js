import "./PricingCardStyle.css";

import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = () => {
    const cardText=[{type: "Basic", price: "$100", days: "3 Days", pages: "3 Pages"},
    {type: "Premium", price: "$200", days: "2 Days", pages: "5 Pages"},
    {type: "Business", price: "$300", days: "5 Days", pages: "8 Pages"}]
  return (
    <div className="pricing">
        <div className="card-container">
            {cardText.map((ele,index) => (
            <div className="card" key={index}>
                <h3>- {ele.type} -</h3>
                <span className="bar"></span>
                <p className="btc">{ele.price}</p>
                <p>- {ele.days} -</p>
                <p>- {ele.pages} -</p>
                <p>- Features -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            ))}
        </div>
     
    </div>
  )
}

export default PricingCard
