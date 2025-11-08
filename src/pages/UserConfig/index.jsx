import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";

function UserConfig() {
  return (
    <PagesTemplate>
      <section style={{ padding: 16 }}>
        <h2 style={{ color: 'var(--textprimary)', marginBottom: 12 }}>Configuración</h2>
        <div
          style={{
            background: 'var(--accent)',
            border: '1px solid var(--bordersdivs)',
            borderRadius: 14,
            padding: 16,
            maxWidth: 720,
          }}
        >
          <p style={{ marginTop: 0, color: 'var(--textsecondary)' }}>
            Prototipo de configuración: aquí puedes imaginar formularios de datos,
            preferencias y opciones de privacidad. Diseño mobile-first.
          </p>
        </div>
      </section>
    </PagesTemplate>
  );
}

export default UserConfig;