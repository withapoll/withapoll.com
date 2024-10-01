import "./me.css";

function Me() {
  return (
    <div className="me">
      <img className="image" src="/another-me.png" alt="'Это я 👻'" />
      <div className="about-me">
        Привет 👋🏻 Я дизайнер и разработчик 👨🏻‍💻 Люблю создавать продукты B2B и для
        обычных пользователей. Свой путь начал с позиции UX/UI Дизайнера в
        компании с резиденством в Сколково. Сейчас готовлюсь к стажировкам в
        качестве Android Разработчика и работаю на фрилансе как Дизайнер и
        Frontend Разработчик. В оставшееся время веду блог о проектах в Дизайне
        и IT. Если у вас есть идея по проекту - пишите мне на{" "}
        <a href="mailto:withapoll@outlook.com" className="link">
          почту
        </a>{" "}
        или{" "}
        <a
          href="https://t.me/withapoll"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          телеграм
        </a>
        .
      </div>
    </div>
  );
}

export default Me;
