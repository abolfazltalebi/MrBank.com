import CheckItem from "./CheckItem";

export default function ContentSection({ checkItems }) {
  return (
    <div className="flex items-end justify-between sm:gap-2">
      <div className="space-y-4">
        <p className="text-sm text-muted">Tools</p>
        <h2 className="text-6xl font-bold">Seamless Integration</h2>
        <p className="text-sm text-muted">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="space-y-4">
        {checkItems.map(({ id, src, title }) => (
          <CheckItem key={id} src={src} title={title} />
        ))}
      </div>
    </div>
  );
}
