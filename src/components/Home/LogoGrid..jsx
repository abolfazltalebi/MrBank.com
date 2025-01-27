export default function LogoGrid({ logoItems }) {
  if (!Array.isArray(logoItems)) {
    console.error("logoItems is not an array:", logoItems);
    return null;
  }

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
