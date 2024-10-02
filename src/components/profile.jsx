import "./profile.css";

function Profile() {
  return (
    <div className="profile">
      <img
        className="profile-image"
        src={`${import.meta.env.BASE_URL}me-2.jpg`}
        alt="Привет 👀"
      />
      <div className="profile-name">Эндрю</div>
      <div className="profile-description">
        Дизайнер Интерфейсов && Дэвелопер и просто tech guy,{" "}
        <span style={{ fontWeight: "bold" }}>живу в Москве</span>.
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/withapoll/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/withapoll"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
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
        </a>
      </div>
      <a
        href="https://t.me/withapoll"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="connect-button">Коннект</button>
      </a>
    </div>
  );
}

export default Profile;
