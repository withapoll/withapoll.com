function Bottom() {
  return (
    <div className="header">
      <div className="nickname">withapoll</div>
      <a
        className="link"
        onClick={() => {
          window.open("./public/CV.pdf", "_blank");
        }}
      >
        резюме
      </a>
    </div>
  );
}

export default Bottom;
