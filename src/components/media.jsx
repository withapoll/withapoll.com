import "./media.css";
function Media() {
  return (
    <div className="media">
      <div className="title">Медийка</div>
      <div className="content">
        <div className="block">
          <img
            className="logo"
            src={`${import.meta.env.BASE_URL}vc.ru.png`}
            alt="VC.RU"
          />
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
        <div className="block">
          <img
            className="logo"
            src={`${import.meta.env.BASE_URL}a.products.png`}
            alt="VC.RU"
          />
          <div className="text">
            <div className="nickname">@a.products</div>
            <div className="description">Блог команды a.products</div>
          </div>
          <a
            href="https://t.me/adotproducts"
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe"
          >
            Подписаться
          </a>
        </div>
        <div className="block">
          <img
            className="logo"
            src={`${import.meta.env.BASE_URL}telegram.png`}
            alt="VC.RU"
          />
          <div className="text">
            <div className="nickname">@Drews</div>
            <div className="description">Мой личный канал</div>
          </div>
          <a
            href="https://t.me/itsapoll"
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
