export default function ProductCard({ product }) {
  const { name, price, bgColor, image } = product;
  return (
    <div>
      <div
        className={`${bgColor} rounded-3xl h-[200px] flex items-center justify-center`}
      >
        <img src={image} alt={name} />
      </div>
      <h2 className="font-bold">{name}</h2>
      <p className="text-xs text-muted">{price}</p>
    </div>
  );
}
