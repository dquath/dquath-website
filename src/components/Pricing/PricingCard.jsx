import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import "./PricingCard.css";

export default function PricingCard({ content }) {
  return (
    <div className="card">
      <CardHeader
        title={content[0].title}
        subtitle={content[0].subtitle}
        price={content[0].price}
      />

      <CardBody featureList={content[1].features} />

      <div className="card-footer">
        <a href="#" className="btn">
          See details
        </a>
      </div>
    </div>
  );
}
