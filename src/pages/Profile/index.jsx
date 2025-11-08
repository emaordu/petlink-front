import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";

function Profile() {
  return (
    <PagesTemplate>
      <section style={{ padding: 16 }}>
        <h2 style={{ color: 'var(--textprimary)', marginBottom: 12 }}>Perfil</h2>
        <div
          style={{
            background: 'var(--accent)',
            border: '1px solid var(--bordersdivs)',
            borderRadius: 14,
            padding: 16,
            maxWidth: 720,
          }}
        >
          <p style={{ margin: 0, color: 'var(--textsecondary)' }}>
            Prototipo de perfil: aquí irán datos del usuario, avatar, estadísticas,
            y acciones relacionadas. Diseño mobile-first.
          </p>
        </div>
      </section>
    </PagesTemplate>
  );
}

export default Profile;