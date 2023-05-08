import { useState } from "react";

export default function Post(props) {
  let [salvar, setSalvar] = useState("bookmark-outline");
  let [curtido, setCurtido] = useState("");
  let [curtidas, setCurtidas] = useState(Number(props.likes));
  let [filled, setFilled] = useState("heart-outline");


  

  return (
    <>
      {" "}
      <li data-test="post" class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.usrURL} alt={props.usr} />
            {props.usr}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>





        <div class="conteudo">
          <img
            data-test="post-image"
            src={props.imgURL}
            alt={props.dsc}
            onClick={() => {
              if (!curtido) {
                setCurtido("curtido");
                setFilled("heart");
                let maisUm = curtidas + 1;
                setCurtidas(maisUm);
              }
            }}
          />
        </div>




        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon
                data-test="like-post"
                name={filled}
                class={curtido}
                onClick={() => {
                  if (!curtido) {
                    setCurtido("curtido");
                    setFilled("heart");
                    let maisUm = curtidas + 1;
                    setCurtidas(maisUm);
                  } else {
                    setCurtido("");
                    setFilled("heart-outline");
                    let menosUm = curtidas - 1;
                    setCurtidas(menosUm);
                  }
                }}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                data-test="save-post"
                name={salvar}
                onClick={() => {
                  if (salvar === "bookmark") setSalvar("bookmark-outline");
                  else setSalvar("bookmark");
                }}
              ></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/respondeai.svg" alt="respondeai" />
            <div data-test="likes-number" class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras {curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}