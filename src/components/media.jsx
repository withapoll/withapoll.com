import "./media.css";
function Media() {
  return (
    <div className="media">
      <div className="title">Медийка</div>
      <div className="content">
        <div className="block">
          <img className="logo" src="/vc.ru.png" alt="VC.RU" />
          <div className="text">
            <div className="nickname">@withapoll</div>
            <div className="description">Блог о проектах в Дизайне и IT</div>
          </div>
          <a
            href="https://vc.ru/u/943980-withapoll"
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe"
          >
            Подписаться
          </a>
        </div>
      </div>
    </div>
  );
}

export default Media;
