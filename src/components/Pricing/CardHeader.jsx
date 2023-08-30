export default function CardHeader({ title, subtitle, price }) {
  return (
    <div className="card-header">
      <div>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}
