import { useState } from "react";


export default function User() {

  let [nome, setNome] = useState("detto");
  let [foto, setFoto] = useState("assets/img/detto.svg");


  return (
    <>
      <div class="usuario">
        <img
          data-test="profile-image"
          src={foto}
          alt="imagem de perfil"
          onClick={() => {
            let entrada = prompt("URL da nova imagem:");
            if (entrada) setFoto(entrada);
          }}
        />
        <div class="texto">
          <span>
            <strong data-test="name">{nome}</strong>
            <ion-icon
              data-test="edit-name"
              name="pencil"
              onClick={() => {
                let entrada = prompt("Edite seu nome:");
                if (entrada) setNome(entrada);
              }}
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}