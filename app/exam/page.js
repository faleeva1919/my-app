"use client";

import { useMemo, useState, useEffect } from "react";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const allQuestions = [
  // SINGLE

  {
    type: "single",
    question: "Что такое low-code разработка?",
    answers: [
      "Написание тысяч строк кода с нуля",
      "Подход с минимальным ручным программированием",
      "Только мобильная разработка",
      "Программирование на ассемблере",
    ],
    correct:
      "Подход с минимальным ручным программированием",
  },

  {
    type: "single",
    question: "В каком году Google приобрела AppSheet?",
    answers: ["2014", "2018", "2020", "2022"],
    correct: "2020",
  },

  {
    type: "single",
    question: "Какой источник данных основной для AppSheet?",
    answers: [
      "Oracle",
      "MongoDB",
      "Google Таблицы",
      "PostgreSQL",
    ],
    correct: "Google Таблицы",
  },

  {
    type: "single",
    question: "Сколько уровней включает архитектура AppSheet?",
    answers: ["2", "3", "4", "5"],
    correct: "3",
  },

  {
    type: "single",
    question: "Что такое Key?",
    answers: [
      "Поле с одинаковыми значениями",
      "Уникальный идентификатор записи",
      "Формула",
      "Тип данных",
    ],
    correct: "Уникальный идентификатор записи",
  },

  {
    type: "single",
    question: "Какой тип данных хранит изображения?",
    answers: ["Image", "Photo", "Picture", "Img"],
    correct: "Image",
  },

  {
    type: "single",
    question: "Какой вид подходит для отображения товаров?",
    answers: ["Gallery", "Map", "Calendar", "Form"],
    correct: "Gallery",
  },

  {
    type: "single",
    question: "Какой вид используется для задач?",
    answers: [
      "Kanban",
      "Gallery",
      "Map",
      "Detail",
    ],
    correct: "Kanban",
  },

  {
    type: "single",
    question: "Что такое Dashboard?",
    answers: [
      "Форма",
      "Главное меню",
      "Объединение нескольких видов",
      "Таблица",
    ],
    correct: "Объединение нескольких видов",
  },

  {
    type: "single",
    question: "Какой тип данных используется для связи таблиц?",
    answers: ["Enum", "Ref", "Image", "Text"],
    correct: "Ref",
  },

  {
    type: "single",
    question: "Что возвращает USEREMAIL()?",
    answers: [
      "Телефон",
      "Имя пользователя",
      "Email пользователя",
      "ID",
    ],
    correct: "Email пользователя",
  },

  {
    type: "single",
    question: "Какой тип View отображает даты?",
    answers: [
      "Gallery",
      "Calendar",
      "Kanban",
      "Map",
    ],
    correct: "Calendar",
  },

  {
    type: "single",
    question: "Что такое Virtual Column?",
    answers: [
      "Настоящий столбец таблицы",
      "Вычисляемое поле",
      "Тип изображения",
      "Фильтр",
    ],
    correct: "Вычисляемое поле",
  },

  {
    type: "single",
    question: "Какая функция проверяет пустое поле?",
    answers: [
      "ISBLANK()",
      "EMPTY()",
      "CHECK()",
      "NULL()",
    ],
    correct: "ISBLANK()",
  },

  {
    type: "single",
    question: "Какой оператор объединяет текст?",
    answers: ["+", "&", "*", "%"],
    correct: "&",
  },

  // MULTIPLE

  {
    type: "multiple",
    question: "Какие источники данных поддерживает AppSheet?",
    answers: [
      "Google Sheets",
      "Excel",
      "SQL",
      "Photoshop",
    ],
    correct: [
      "Google Sheets",
      "Excel",
      "SQL",
    ],
  },

  {
    type: "multiple",
    question: "Какие виды существуют в AppSheet?",
    answers: [
      "Table",
      "Gallery",
      "Calendar",
      "Paint",
    ],
    correct: [
      "Table",
      "Gallery",
      "Calendar",
    ],
  },

  {
    type: "multiple",
    question: "Что умеют боты AppSheet?",
    answers: [
      "Отправка email",
      "Автоматизация",
      "Работа по расписанию",
      "Монтаж видео",
    ],
    correct: [
      "Отправка email",
      "Автоматизация",
      "Работа по расписанию",
    ],
  },

  {
    type: "multiple",
    question: "Какие есть логические операторы?",
    answers: [
      "AND",
      "OR",
      "NOT",
      "PRINT",
    ],
    correct: [
      "AND",
      "OR",
      "NOT",
    ],
  },

  {
    type: "multiple",
    question: "Какие функции относятся к датам?",
    answers: [
      "TODAY()",
      "NOW()",
      "YEAR()",
      "DELETE()",
    ],
    correct: [
      "TODAY()",
      "NOW()",
      "YEAR()",
    ],
  },

  {
    type: "multiple",
    question: "Какие бывают виды интерфейсов?",
    answers: [
      "Map",
      "Gallery",
      "Calendar",
      "Assembler",
    ],
    correct: [
      "Map",
      "Gallery",
      "Calendar",
    ],
  },

  {
    type: "multiple",
    question: "Что важно для таблицы AppSheet?",
    answers: [
      "Уникальные заголовки",
      "Key",
      "Без объединённых ячеек",
      "GIF-анимации",
    ],
    correct: [
      "Уникальные заголовки",
      "Key",
      "Без объединённых ячеек",
    ],
  },

  // TEXT

  {
    type: "text",
    question:
      "Как называется функция текущей даты?",
    correct: "TODAY()",
  },

  {
    type: "text",
    question:
      "Как называется тип данных выбора нескольких значений?",
    correct: "EnumList",
  },

  {
    type: "text",
    question:
      "Как называется вид отображения карты?",
    correct: "Map",
  },

  {
    type: "text",
    question:
      "Как называется функция email пользователя?",
    correct: "USEREMAIL()",
  },

  {
    type: "text",
    question:
      "Как называется тип связи таблиц?",
    correct: "Ref",
  },

  {
    type: "text",
    question:
      "Как называется представление задач по колонкам?",
    correct: "Kanban",
  },

  {
    type: "text",
    question:
      "Как называется вычисляемый столбец?",
    correct: "Virtual Column",
  },

  {
    type: "text",
    question:
      "Как называется вид с карточками изображений?",
    correct: "Gallery",
  },

  {
    type: "text",
    question:
      "Как называется функция проверки пустого значения?",
    correct: "ISBLANK()",
  },

  {
    type: "text",
    question:
      "Как называется главный экран из нескольких views?",
    correct: "Dashboard",
  },

  {
    type: "text",
    question:
      "Как называется уникальный идентификатор записи?",
    correct: "Key",
  },

  {
    type: "text",
    question:
      "Как называется автоматический процесс в AppSheet?",
    correct: "Bot",
  },

  {
    type: "text",
    question:
      "Как называется вид для ввода данных?",
    correct: "Form",
  },
];

export default function ExamPage() {
 const randomizedQuestions = useMemo(() => {
  return shuffleArray(allQuestions)
    .slice(0, 30)
    .map((q) => ({
      ...q,

      answers: q.answers
        ? shuffleArray(q.answers)
        : [],
    }));
}, []);

  const [answers, setAnswers] = useState({});
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

  const handleSingle = (index, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));
  };

  const handleMultiple = (index, answer) => {
    const current = answers[index] || [];

    if (current.includes(answer)) {
      setAnswers((prev) => ({
        ...prev,
        [index]: current.filter((a) => a !== answer),
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [index]: [...current, answer],
      }));
    }
  };

  const handleText = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const finishTest = () => {
    let correct = 0;

    randomizedQuestions.forEach((q, index) => {
      const userAnswer = answers[index];

      if (q.type === "single") {
        if (userAnswer === q.correct) correct++;
      }

      if (q.type === "multiple") {
        const sortedUser = [...(userAnswer || [])].sort();
        const sortedCorrect = [...q.correct].sort();

        if (
          JSON.stringify(sortedUser) ===
          JSON.stringify(sortedCorrect)
        ) {
          correct++;
        }
      }

      if (q.type === "text") {
        if (
          userAnswer?.trim().toLowerCase() ===
          q.correct.toLowerCase()
        ) {
          correct++;
        }
      }

      if (q.type === "match") {
        correct++;
      }
    });

    setScore(correct);
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
          Тест содержит разные типы вопросов:
        </p>

        <ul>
          <li>Один вариант ответа</li>
          <li>Множественный выбор</li>
          <li>Письменный ответ</li>
          <li>Вопросы на соответствие</li>
        </ul>

        {!finished && (
          <button
            onClick={finishTest}
            style={{
              padding: "12px 20px",
              background: "#1e293b",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Завершить тест
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

          {/* SINGLE */}
          {q.type === "single" &&
            q.answers.map((answer, i) => (
              <label
                key={i}
                style={{
                  display: "block",
                  marginTop: "10px",
                }}
              >
                <input
                  type="radio"
                  name={`q-${index}`}
                  checked={answers[index] === answer}
                  onChange={() =>
                    handleSingle(index, answer)
                  }
                  disabled={finished}
                />

                {" "}{answer}
              </label>
            ))}

          {/* MULTIPLE */}
          {q.type === "multiple" &&
            q.answers.map((answer, i) => (
              <label
                key={i}
                style={{
                  display: "block",
                  marginTop: "10px",
                }}
              >
                <input
                  type="checkbox"
                  checked={
                    answers[index]?.includes(answer) || false
                  }
                  onChange={() =>
                    handleMultiple(index, answer)
                  }
                  disabled={finished}
                />

                {" "}{answer}
              </label>
            ))}

          {/* TEXT */}
          {q.type === "text" && (
            <input
              type="text"
              value={answers[index] || ""}
              onChange={(e) =>
                handleText(index, e.target.value)
              }
              disabled={finished}
              placeholder="Введите ответ..."
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}