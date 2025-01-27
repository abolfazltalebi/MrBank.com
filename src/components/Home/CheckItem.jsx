export default function CheckItem({ src, title }) {
  return (
    <div className="flex items-center gap-2">
      <img src={src} className="size-5" alt={title} />
      <p className="text-sm text-muted">{title}</p>
    </div>
  );
}
