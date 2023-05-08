export default function Story(props) {
    
    return (
      <>
        <li class="story">
          <div class="imagem">
            <img src={props.url} alt= {props.usr} />
          </div>
          <div class="usuario">{props.usr}</div>
        </li>
      </>
    );
  }