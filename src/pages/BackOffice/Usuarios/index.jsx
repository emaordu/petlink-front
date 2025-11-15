import React, { useEffect, useState } from "react";
import BackOfficeTemplate from "@/components/UI/BackOfficeTemplate";
import * as classes from "./Usuarios.module.css";
import FilaUsuario from "@/components/UI/BackOfficeComponents/FilaUsuario";
import FilaUsuarioRow from "@/components/UI/BackOfficeComponents/FilaUsuario/FilaUsuarioRow";

export default function BackOfficeUsuarios() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();
  const filteredUsers = normalized
    ? [...users]
        .filter((u) => u.email.toLowerCase().includes(normalized))
        .sort((a, b) => {
          const ea = a.email.toLowerCase();
          const eb = b.email.toLowerCase();
          const score = (e) => (e === normalized ? 3 : e.startsWith(normalized) ? 2 : 1);
          return score(eb) - score(ea);
        })
    : users;

  useEffect(() => {
    try {
      const raw = localStorage.getItem("appUsers");
      const initial = raw ? JSON.parse(raw) : [
        { id: 1, name: "Emanuel", email: "emaordu1234@gmail.com", role: "admin" },
        { id: 2, name: "Ana Torres", email: "ana@petlink.app", role: "user" },
        { id: 3, name: "Carlos Díaz", email: "carlos@petlink.app", role: "moderator" },
      ];
      setUsers(initial);
    } catch {}
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "appUsers") {
        try {
          const next = e.newValue ? JSON.parse(e.newValue) : [];
          setUsers(next);
        } catch {}
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const handleView = (user) => {};
  const handleBan = (user) => {
    try {
      const remaining = users.filter((u) => u.id !== user.id);
      setUsers(remaining);
      localStorage.setItem("appUsers", JSON.stringify(remaining));
    } catch {}
  };

  return (
    <BackOfficeTemplate>
      <main className={classes.page}>
        <div className={classes.searchRow}>
          <input
            className={classes.searchInput}
            type="search"
            placeholder="Buscar por email..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar usuario por email"
          />
        </div>
        <h2 className={classes.title}>Usuarios</h2>
        <div className={classes.table}>
          <FilaUsuario />
          <div className={classes.rows}>
            {filteredUsers.map((u) => (
              <FilaUsuarioRow key={u.id} user={u} onView={handleView} onBan={handleBan} />
            ))}
          </div>
        </div>
      </main>
    </BackOfficeTemplate>
  );
}