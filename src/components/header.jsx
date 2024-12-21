import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="nickname">withapoll</div>
      <a
        className="link"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1MBuuYgc9WubFt_rIkzzhR9kZyAIwhgfq/view?usp=sharing",
            "_blank"
          );
        }}
      >
        резюме
      </a>
    </div>
  );
}

export default Header;
