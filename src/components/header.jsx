import "./header.css";
function Header() {
  const resumeUrl =
    "https://drive.google.com/file/d/1mWizCDou43tyC-CpQtw66czXb08fw9j3/view?usp=sharing";
  return (
    <div className="header">
      <div className="nickname">withapoll</div>
      <a
        href={resumeUrl}
        className="resume-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        резюме
      </a>
    </div>
  );
}

export default Header;
