import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "./career.css";

function Career() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobDetails = [
    {
      title: "UX/UI Designer",
      company: "АО Нейросети",
      date: "Июль - Окт 2023",
      description:
        "После окончания 1 курса мне предложили должность UX/UI дизайнера, от которой я не стал отказываться. Мне было интересно как дизайнеры взаимодействуют с разработчиками. Проработал я не долго, но набрался многа опыта благодаря команде. По началу мне не давали крупные задачи, в основном был фикс шрифтов, layout и адаптивов. Но спустя месяц задачи стали по серьёзней. И в итоге мне удалось не только поработать над другими крупными проектами компании, но и создать внутренний продукт - Онбординг для сотрудников.",
      image: `${import.meta.env.BASE_URL}neiro.png`,
      projects: [
        {
          name: "Онбординг для сотрудников",
          url: "https://neiroseti.ai/onboarding",
        },
        {
          name: "Сайт продукта Index-5",
          url: "https://index-5.ru/",
        },
        {
          name: "Сайт компании",
          url: "https://neiroseti.ai/",
        },
      ],
    },
    {
      title: "Web Dev & Designer",
      company: "Фриланс",
      date: "Апр 2024 - Сегодня",
      description:
        "В свободное от учёбы время и от личных проектов занимаюсь дизайном сайтов и Frontend разработкой. Я всегда открыт к новым проектам и предложениям. Если у вас есть интересный проект, который вы хотите реализовать, напишите мне на почту или в телеграм и Мы все обсудим👇🏻",
      image: `${import.meta.env.BASE_URL}freelance.png`,
      projects: [
        {
          name: "Обновленный дизайн сайта школы программирования IT-Park",
          url: "https://itpark32.ru",
        },
        {
          name: "Разработка лендинга для приемной комиссии московского колледжа",
          url: "https://privetmgok.ru",
        },
      ],
    },
  ];

  const handleJobClick = (index) => {
    setSelectedJob(jobDetails[index]);
  };

  const closeBottomSheet = () => {
    const bottomSheet = document.querySelector(".bottom-sheet");
    if (bottomSheet) {
      bottomSheet.classList.remove("active");
      setTimeout(() => {
        setSelectedJob(null);
      }, 500);
    }
  };

  return (
    <div className="career">
      <div className="title">Карьера</div>
      <div className="jobs">
        {jobDetails.map((job, index) => (
          <div
            key={index}
            className="job"
            onClick={() => handleJobClick(index)}
          >
            <img className="job-icon" src={job.image} alt={job.title} />
            <div className="job-title">{job.title}</div>
            <div className="job-company">{job.company}</div>
            <div className="job-date">{job.date}</div>
          </div>
        ))}
      </div>
      {selectedJob && (
        <div className={`bottom-sheet ${selectedJob ? "active" : ""}`}>
          <div className="bottom-sheet-content">
            <div className="job-details">
              <img
                src={selectedJob.image}
                alt={selectedJob.title}
                className="bottom-sheet-image"
              />
              <div className="job-info">
                <h3>{selectedJob.title}</h3>
                <h3>{selectedJob.company}</h3>
                <p>{selectedJob.date}</p>
              </div>
            </div>

            <p>{selectedJob.description}</p>

            {selectedJob.title === "Web Dev & Designer" && (
              <div className="contact-icons">
                <a href="mailto:withapoll@outlook.com" aria-label="Email">
                  <FontAwesomeIcon icon={faAt} />
                </a>
                <a
                  href="https://t.me/withapoll"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </div>
            )}

            {selectedJob.projects && selectedJob.projects.length > 0 && (
              <div className="projects">
                <h3>Проекты:</h3>
                <ul>
                  {selectedJob.projects.map((project, index) => (
                    <li key={index}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className="close"
              onClick={closeBottomSheet}
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Career;
