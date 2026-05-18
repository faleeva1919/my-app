import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b, #334155)",
          color: "white",
          padding: "50px 30px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "10px" }}>
          Курс по AppSheet
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.9 }}>
          Этот курс лекций и практических работ позволит вам освоить современный low-code подход к разработке приложений на платформе AppSheet. Вы научитесь создавать рабочие приложения без написания кода, используя только Google Таблицы и встроенные инструменты платформы.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>📖 Лекции</h2>
          <p>
            Теоретические материалы по low-code разработке
            и работе с AppSheet.
          </p>

          <Link href="/lecture/1">
            Перейти к лекциям
          </Link>
        </div>

        <div className="card">
          <h2>💻 Практические работы</h2>
          <p>
            Практика создания приложений,
            формул, ботов и интерфейсов.
          </p>

          <Link href="/practice/1">
            Открыть практические работы
          </Link>
        </div>

        <div className="card">
          <h2>📚 Вопросы к экзамену</h2>
          <p>
            Полный список тестовых вопросов
            для подготовки к итоговому тестированию.
          </p>

          <Link href="/vopros">
            Открыть вопросы
          </Link>
        </div>

        <div className="card">
          <h2>📝 Тестирование</h2>
          <p>
            Пройди случайный тест из 30 вопросов
            с таймером и подсчётом результата.
          </p>

          <Link href="/exam">
            Начать тест
          </Link>
        </div>
      </div>
    </div>
  );
}
