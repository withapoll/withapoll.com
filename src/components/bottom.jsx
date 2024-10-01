function Bottom() {
  const resumeUrl =
    "https://drive.google.com/file/d/1mWizCDou43tyC-CpQtw66czXb08fw9j3/view?usp=sharing";

  return (
    <div className="header">
      <div className="nickname">withapoll</div>

      {/* <a
        href="https://github.com/withapoll"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/withapoll/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a
        href="https://instagram.com/withapoll"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a
        href="https://t.me/withapoll"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-telegram-plane"></i>
      </a> */}

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

export default Bottom;
