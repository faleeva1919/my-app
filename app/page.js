export default function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        Создание приложений в AppSheet
      </h1>

      <div style={styles.card}>
        <p style={{ ...styles.text, color: "white" }}>
          Этот курс лекций и практических работ позволит вам освоить современный low-code подход к разработке приложений на платформе AppSheet. Вы научитесь создавать рабочие приложения без написания кода, используя только Google Таблицы и встроенные инструменты платформы.
        </p>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <div style={styles.card}>
        <p style={{ ...styles.text, color: "white" }}>
          Изучайте лекции последовательно — материал каждой следующей лекции опирается на предыдущие. После каждой лекции выполняйте соответствующую практическую работу. Не пропускайте контрольные вопросы — они помогут закрепить материал перед практикой.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "40px",
  },
  card: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #334155",
    borderRadius: "12px",
    background: "#1e293b",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
};