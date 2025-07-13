export default function Contact() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f80ab0ff 0%, #5a2a83ff 100%)",
        padding: "2rem",
      }}
    >
      <form
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "2rem",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
          width: "100%",
          maxWidth: "400px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted! (Implement your logic here)");
        }}
      >
        <h2
          style={{
            marginBottom: "1.5rem",
            color: "#5a2a83ff",
            textAlign: "center",
          }}
        >
          Contact Us
        </h2>

        <label
          style={{
            fontWeight: "600",
            marginBottom: "0.5rem",
            display: "block",
          }}
        >
          Name
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            fontSize: "1rem",
          }}
          required
        />

        <label
          style={{
            fontWeight: "600",
            marginBottom: "0.5rem",
            display: "block",
          }}
        >
          Email
        </label>
        <input
          type="email"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            fontSize: "1rem",
          }}
          required
        />

        <label
          style={{
            fontWeight: "600",
            marginBottom: "0.5rem",
            display: "block",
          }}
        >
          Message
        </label>
        <textarea
          rows="5"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "1.5rem",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            fontSize: "1rem",
            resize: "vertical",
          }}
          required
        ></textarea>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#f80ab0ff",
            color: "#fff",
            border: "none",
            padding: "0.75rem",
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(248, 10, 176, 0.6)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#c6078e")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#f80ab0ff")
          }
        >
          Send
        </button>
      </form>
    </div>
  );
}
