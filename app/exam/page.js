"use client";

import { useMemo, useState, useEffect } from "react";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const questions = [
  {
    question: "Что такое low-code разработка?",
    answers: shuffleArray([
      "Написание тысяч строк кода с нуля",
      "Подход, позволяющий создавать приложения с минимальным ручным программированием",
      "Разработка только мобильных приложений",
      "Программирование на ассемблере",
    ]),
    correct:
      "Подход, позволяющий создавать приложения с минимальным ручным программированием",
  },

  {
    question: "В каком году Google приобрела платформу AppSheet?",
    answers: shuffleArray(["2014", "2018", "2020", "2022"]),
    correct: "2020",
  },

  {
    question: "Какой источник данных является основным в AppSheet?",
    answers: shuffleArray([
      "Microsoft SQL Server",
      "Google Таблицы",
      "Oracle Database",
      "MongoDB",
    ]),
    correct: "Google Таблицы",
  },

  {
    question: "Сколько уровней включает архитектура AppSheet?",
    answers: shuffleArray(["2", "3", "4", "5"]),
    correct: "3",
  },

  {
    question:
      "Какой тариф AppSheet подходит для обучения и ограничен 10 пользователями?",
    answers: shuffleArray([
      "Business",
      "Enterprise",
      "Professional",
      "Community",
    ]),
    correct: "Community",
  },

  {
    question:
      "Что автоматически генерирует AppSheet при подключении источника данных?",
    answers: shuffleArray([
      "Только таблицу",
      "Базовый набор представлений (список, форма, детальная карточка)",
      "Только форму для ввода",
      "Готовую базу данных",
    ]),
    correct:
      "Базовый набор представлений (список, форма, детальная карточка)",
  },

  {
    question:
      "Какая функция отвечает за автоматическую адаптацию интерфейса под разные устройства?",
    answers: shuffleArray([
      "Она отсутствует, нужно верстать вручную",
      "Только для веб-версии",
      "Только для мобильных устройств",
      "Автоматическая адаптация под веб и мобильные устройства",
    ]),
    correct:
      "Автоматическая адаптация под веб и мобильные устройства",
  },

  {
    question:
      "Что должно находиться в первой строке Google Таблицы для корректной работы с AppSheet?",
    answers: shuffleArray([
      "Данные",
      "Заголовки столбцов",
      "Пустая строка",
      "Итоговые суммы",
    ]),
    correct: "Заголовки столбцов",
  },

  {
    question: "Что такое ключевое поле (Key) в AppSheet?",
    answers: shuffleArray([
      "Поле с одинаковыми значениями во всех строках",
      "Столбец с уникальными значениями для каждой строки",
      "Поле, которое нельзя редактировать",
      "Поле с формулой",
    ]),
    correct: "Столбец с уникальными значениями для каждой строки",
  },

  {
    question: "Почему важно явно задавать ключевое поле?",
    answers: shuffleArray([
      "Иначе AppSheet не запустится",
      "Без ключа могут возникнуть проблемы с обновлением данных",
      "Иначе приложение будет платным",
      "Ключ нужен только для Excel",
    ]),
    correct:
      "Без ключа могут возникнуть проблемы с обновлением данных",
  },

  {
    question:
      "Какой тип данных используется для выбора одного значения из предопределённого списка?",
    answers: shuffleArray(["EnumList", "Ref", "Enum", "Image"]),
    correct: "Enum",
  },

  {
    question: "Чем EnumList отличается от Enum?",
    answers: shuffleArray([
      "EnumList используется только для чисел",
      "EnumList позволяет выбрать несколько значений",
      "EnumList не поддерживает выпадающие списки",
      "Ничем, это одно и то же",
    ]),
    correct: "EnumList позволяет выбрать несколько значений",
  },

  {
    question: "Что такое Ref в AppSheet?",
    answers: shuffleArray([
      "Тип данных для ссылки на запись в другой таблице",
      "Название ключевого поля",
      "Функция для фильтрации",
      "Тип данных для изображений",
    ]),
    correct:
      "Тип данных для ссылки на запись в другой таблице",
  },

  {
    question:
      "Какой тип связи реализуется, когда один клиент может иметь много заказов?",
    answers: shuffleArray([
      "Один к одному",
      "Многие ко многим",
      "Один ко многим",
      "Многие к одному",
    ]),
    correct: "Один ко многим",
  },

  {
    question: "Что такое обратная ссылка (Reverse Ref)?",
    answers: shuffleArray([
      "Ссылка, которую нужно создавать вручную",
      "Виртуальный столбец, автоматически создаваемый AppSheet в родительской таблице",
      "Ссылка на внешний сайт",
      "Поле, которое нельзя редактировать",
    ]),
    correct:
      "Виртуальный столбец, автоматически создаваемый AppSheet в родительской таблице",
  },

  {
    question:
      "Какие три вида AppSheet создаёт автоматически при подключении таблицы?",
    answers: shuffleArray([
      "Таблица, форма, детальная карточка",
      "Таблица, календарь, галерея",
      "Форма, карта, дашборд",
      "Календарь, карточки Kanban, карта",
    ]),
    correct: "Таблица, форма, детальная карточка",
  },

  {
    question:
      "Какой вид лучше всего подходит для отображения товаров с фотографиями?",
    answers: shuffleArray([
      "Таблица",
      "Календарь",
      "Галерея",
      "Карта",
    ]),
    correct: "Галерея",
  },

  {
    question:
      "Какой вид используется для управления задачами с возможностью перетаскивания между колонками?",
    answers: shuffleArray([
      "Таблица",
      "Календарь",
      "Карточки (Kanban)",
      "Дашборд",
    ]),
    correct: "Карточки (Kanban)",
  },

  {
    question:
      "Какой вид объединяет несколько других видов на одном экране?",
    answers: shuffleArray([
      "Галерея",
      "Форма",
      "Дашборд",
      "Карта",
    ]),
    correct: "Дашборд",
  },

  {
    question:
      "Для каких данных лучше всего подходит вид «Календарь»?",
    answers: shuffleArray([
      "Для списка товаров",
      "Для данных, содержащих дату или время",
      "Для географических координат",
      "Для текстовых описаний",
    ]),
    correct:
      "Для данных, содержащих дату или время",
  },

  {
    question: "Что такое корневой вид?",
    answers: shuffleArray([
      "Вид, который открывается первым при запуске",
      "Вид, который отображается в навигационном меню",
      "Вид, который нельзя удалить",
      "Вид, созданный автоматически",
    ]),
    correct:
      "Вид, который открывается первым при запуске",
  },

  {
    question:
      "Как называется функция, позволяющая объединять поля формы в логические блоки?",
    answers: shuffleArray([
      "Фильтрация",
      "Группировка полей (Sections)",
      "Сортировка",
      "Валидация",
    ]),
    correct: "Группировка полей (Sections)",
  },

  {
    question:
      "Какой формулой можно объединить фамилию и имя?",
    answers: shuffleArray([
      "[Фамилия] + [Имя]",
      '[Фамилия] & " " & [Имя]',
      "CONCAT([Фамилия], [Имя])",
      "[Фамилия].[Имя]",
    ]),
    correct: '[Фамилия] & " " & [Имя]',
  },

  {
    question: "Что такое виртуальный столбец?",
    answers: shuffleArray([
      "Столбец, который хранится в Google Таблице",
      "Поле, которое вычисляется на лету по формуле и не хранится в источнике",
      "Столбец, который нельзя редактировать",
      "Ключевое поле таблицы",
    ]),
    correct:
      "Поле, которое вычисляется на лету по формуле и не хранится в источнике",
  },

  {
    question:
      "Какая функция возвращает email текущего пользователя?",
    answers: shuffleArray([
      "CURRENT_USER()",
      "USEREMAIL()",
      "GETEMAIL()",
      "USER()",
    ]),
    correct: "USEREMAIL()",
  },

  {
    question:
      "Какой тип действия используется для отправки электронного письма?",
    answers: shuffleArray([
      "Переход к виду",
      "Обновить запись",
      "Отправить email",
      "Показать диалог",
    ]),
    correct: "Отправить email",
  },

  {
    question: "Что такое бот в AppSheet?",
    answers: shuffleArray([
      "Вид интерфейса",
      "Автоматический процесс, запускающийся по событию",
      "Тип данных",
      "Кнопка в форме",
    ]),
    correct:
      "Автоматический процесс, запускающийся по событию",
  },

  {
    question:
      "Из каких трёх основных компонентов состоит бот?",
    answers: shuffleArray([
      "Таблица, вид, действие",
      "Триггер, процесс, условие",
      "Форма, кнопка, фильтр",
      "Данные, интерфейс, логика",
    ]),
    correct: "Триггер, процесс, условие",
  },

  {
    question:
      "Какой тип триггера используется для запуска бота по расписанию?",
    answers: shuffleArray([
      "Data Change",
      "Scheduled",
      "Manual",
      "Button Click",
    ]),
    correct: "Scheduled",
  },

  {
    question:
      "Какой режим публикации позволяет дать доступ только указанному списку email-адресов?",
    answers: shuffleArray([
      "Private",
      "Domain",
      "Public",
      "White list",
    ]),
    correct: "White list",
  },

  {
    question:
      "Что нужно сделать, чтобы изменения в редакторе стали видны пользователям?",
    answers: shuffleArray([
      "Сохранить приложение",
      "Перезагрузить компьютер",
      "Нажать кнопку Publish",
      "Пригласить пользователей заново",
    ]),
    correct: "Нажать кнопку Publish",
  },
];

export default function ExamPage() {
  const randomizedQuestions = useMemo(() => {
    return shuffleArray(questions).slice(0, 30);
  }, []);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(1800);

  useEffect(() => {
    if (finished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishTest();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [finished]);

  const handleSelect = (questionIndex, answer) => {
    if (finished) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const finishTest = () => {
    let correctAnswers = 0;

    randomizedQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setFinished(true);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container">
      <h1>📘 Экзаменационный тест</h1>

      <div className="card">
        <h2>
          ⏰ Осталось времени: {minutes}:
          {seconds.toString().padStart(2, "0")}
        </h2>

        <p>
          В тесте отображаются 30 случайных вопросов.
        </p>

        {!finished && (
          <button
            onClick={finishTest}
            style={{
              padding: "12px 20px",
              background: "#1e293b",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Проверить тест
          </button>
        )}

        {finished && (
          <div style={{ marginTop: "20px" }}>
            <h2>
              ✅ Результат: {score} /{" "}
              {randomizedQuestions.length}
            </h2>

            <p>
              Процент:{" "}
              {Math.round(
                (score / randomizedQuestions.length) * 100
              )}
              %
            </p>
          </div>
        )}
      </div>

      {randomizedQuestions.map((q, index) => (
        <div className="card" key={index}>
          <h2>
            {index + 1}. {q.question}
          </h2>

          <div style={{ marginTop: "15px" }}>
            {q.answers.map((answer, i) => {
              const isCorrect = answer === q.correct;
              const isSelected =
                selectedAnswers[index] === answer;

              return (
                <label
                  key={i}
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    cursor: finished ? "default" : "pointer",
                    padding: "8px",
                    borderRadius: "6px",

                    background:
                      finished && isCorrect
                        ? "#d1fae5"
                        : finished &&
                          isSelected &&
                          !isCorrect
                        ? "#fee2e2"
                        : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={answer}
                    disabled={finished}
                    checked={isSelected}
                    onChange={() =>
                      handleSelect(index, answer)
                    }
                    style={{ marginRight: "10px" }}
                  />

                  {answer}
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}