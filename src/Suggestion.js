export default function Suggestion(props) {

    let txt = "";
    if (Math.random() > 0.5) txt = "Segue você";
    else txt = "Novo no instagram";
  

    return (
      <>
        <li class="sugestao">
          <div class="usuario">
            <img src={props.usrURL} alt={props.usr} />
            <div class="texto">
              <div class="nome">{props.usr}</div>
              <div class="razao">{txt}</div>
            </div>
          </div>
  
  
          <div class="seguir">Seguir</div>
        </li>
      </>
    );
  }