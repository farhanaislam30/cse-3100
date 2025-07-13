export default function About() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick & Morty Logo"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      <h2
        style={{
          color: "#f80ab0ff",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        About Rick & Morty Explorer
      </h2>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}>
        <strong>Rick & Morty Explorer</strong> is a simple yet fun React web
        application that allows users to explore characters from the iconic Rick
        & Morty universe.
        <br />
        <br />
        This project was developed as part of the <strong>CSE-3100</strong>{" "}
        course by dedicated students, showcasing their ability to build
        responsive, dynamic, and engaging front-end apps using React and modern
        web technologies.
        <br />
        <br />
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ color: "#f80ab0ff", marginBottom: "1rem" }}>
          Contributors
        </h3>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            fontSize: "1rem",
            color: "#555",
          }}
        >
          <li>
            <a
              href="https://github.com/farhanaislam30"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f80ab0ff", textDecoration: "none" }}
            >
              Farhana Islam
            </a>
          </li>
          <li>
            <a
              href="https://github.com/anotherstudent"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f80ab0ff", textDecoration: "none" }}
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
