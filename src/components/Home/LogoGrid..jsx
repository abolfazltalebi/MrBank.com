export default function LogoGrid(logoItems) {
  return (
    <div className="w-2/3 flex items-center flex-wrap gap-4">
      {logoItems.map(({ id, image }) => (
        <div key={id}>
          <img src={image} alt={`Logo ${id}`} />
        </div>
      ))}
    </div>
  );
}
