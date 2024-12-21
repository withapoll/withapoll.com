import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="title">Проджекты</div>
      <div className="project-list">
        <div className="project">
          <img
            className="image"
            src={`${import.meta.env.BASE_URL}networky.png`}
            alt="InLink"
          />
          <div className="text">
            <div className="project-description">
              <span style={{ fontWeight: "bold" }}>Networky. </span>
              Приложение с удобной лентой митапов && удобным нетворингом 👻
            </div>

            <button
              className="button"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1x2Vsnl0Tr0YxyqbtAxOeox6C7ipKG94T/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Взглянуть
            </button>
            {/* <button className="button-noactive">Ссылка скоро появится</button> */}
          </div>
        </div>
        <div className="project">
          <img
            className="image"
            src={`${import.meta.env.BASE_URL}OneHome.png`}
            alt="OneHome"
          />
          <div className="text">
            <div className="project-description">
              <span style={{ fontWeight: "bold" }}>OneHome. </span>
              Интересный кейс с хакатона. Нужно было разработать приложение с
              интеграцией карт 📍А что если в приложение умного дома можно будет
              не только управлять умными устройствами, но и также следить за
              членами семьи 🤔
            </div>
            <a
              href="https://vc.ru/design/653295-umnoe-prilozhenie-dlya-umnogo-doma-onehome-dizain-keis-s-hakatona"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <button className="button">Прочитать статью</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img
            className="image"
            src={`${import.meta.env.BASE_URL}ITPark.png`}
            alt="IT-Park"
          />
          <div className="text">
            <div className="project-description">
              <span style={{ fontWeight: "bold" }}>IT-Park. </span>
              Ко мне обратились за помощью в дизайне веб-сайта для Школы
              Программирования 👨🏻‍💻 Были интересные задачки от заказчика, нашли
              коннект. Теперь любой студент может посмотреть курсы и выбрать для
              себя подходящий 🖱️
            </div>
            <a
              href="https://itpark32.ru/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <button className="button">Взглянуть</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img
            className="image"
            src={`${import.meta.env.BASE_URL}RuStore.png`}
            alt="RuStore Redesign"
          />
          <div className="text">
            <div className="project-description">
              <span style={{ fontWeight: "bold" }}>Редизайн RuStore. </span>
              Один из моих первых крупных проектов. Когда VK только запустили
              бету RuStore, я решил попробовать свои навыки в редизайне 😶‍🌫️
              Удалось улучшить UX приложения и предложить новые фичи, и даже
              получить фитчек от VK 💙
            </div>
            <a
              href="https://vc.ru/design/470947-redizain-rustore-chto-ne-tak-s-dizainom-rossiiskogo-magazina-prilozhenii-ot-komandy-vk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <button className="button">Прочитать статью</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img
            className="image"
            src={`${import.meta.env.BASE_URL}DoubleB.png`}
            alt="DoubleB"
          />
          <div className="text">
            <div className="project-description">
              <span style={{ fontWeight: "bold" }}>DoubleB. </span>
              Это курсовой проект. Была задача разработать приложение B2B для
              улучшение бизнес процессов компании 💰 Я решил создать CRM-ку в
              которой можно управлять практически всем - от персонала до
              автоматизации закупок 🚚
            </div>
            <a
              href="https://github.com/withapoll/DoubleB"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <button className="button">Взглянуть</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
