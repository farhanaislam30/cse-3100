import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((char) => {
    const matchesSearch = char.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || char.status.toLowerCase() === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main style={{ padding: "2rem", backgroundColor: "#f4f4f4" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
        Rick & Morty Explorer
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            border: "1px solid #ccc",
            width: "180px",
          }}
        >
          <option value="all">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {filteredCharacters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </main>
  );
}
