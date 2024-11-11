export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          You&#39;ve reached the limit! <br />
          <strong>Reset</strong> <br />
          the count to continue.
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
