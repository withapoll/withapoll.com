import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="nickname">withapoll</div>
      <a
        className="link"
        onClick={() => {
          window.open("./src/assets/docs/CV.pdf", "_blank");
        }}
      >
        резюме
      </a>
    </div>
  );
}

export default Header;
