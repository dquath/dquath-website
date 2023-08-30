export default function CardBody({ featureList }) {
  return (
    <div className="card-body">
      <p>Features</p>

      <ul className="feature-list">
        {featureList.map((feature, index) => (
          <li key={index + 1}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
