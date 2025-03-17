import React from "react";
import "../styles/MembershipPlans.css";

const MembershipPlans = () => {
  const plans = [
    { id: 1, title: "Monthly", price: "₹2,000", duration: "1 Month" },
    { id: 2, title: "Quarterly", price: "₹5,500", duration: "3 Months" },
    { id: 3, title: "Half-Yearly", price: "₹10,500", duration: "6 Months" },
    { id: 4, title: "Annual", price: "₹19,500", duration: "12 Months" },
  ];

  const features = [
    "Unlimited Gym Access",
    "Personal Trainer Guidance",
    "Sauna & Steam Room Access",
    "Exclusive Group Classes",
    "Diet & Nutrition Consultation",
    "24/7 Gym Access",
    "Advanced Workout Analytics",
    "Premium Locker Facilities",
  ];

  return (
    <div className="membership-container">
      <h2 className="membership-title">Choose Your Membership Plan</h2>
      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <h3>{plan.title} Plan</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-duration">{plan.duration}</p>
            <ul className="plan-features">
              {features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
