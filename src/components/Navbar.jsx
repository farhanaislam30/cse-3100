import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#f80ab0ff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Link
        to="/"
        style={{
          backgroundColor: "#ecefefff",
          color: "#f80ab0ff",
          padding: "0.5rem 1.2rem",
          borderRadius: "20px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#d6d9db")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ecefefff")
        }
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          backgroundColor: "#ecefefff",
          color: "#f80ab0ff",
          padding: "0.5rem 1.2rem",
          borderRadius: "20px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#d6d9db")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ecefefff")
        }
      >
        About
      </Link>
      <Link
        to="/contact"
        style={{
          backgroundColor: "#ecefefff",
          color: "#f80ab0ff",
          padding: "0.5rem 1.2rem",
          borderRadius: "20px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#d6d9db")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ecefefff")
        }
      >
        Contact
      </Link>
    </nav>
  );
}
