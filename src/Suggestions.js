import Suggestion from "./Suggestion";


export default function Suggestions() {
  let suggestionLs = [
    "bad.vibes.memes",
    "chibirdart",
    "razoesparaacreditar",
    "adorable_animals",
    "smallcutecats",
  ];
  
  return (
    <>
      <ul class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {suggestionLs.map((sgt) => (
          <Suggestion usr={sgt} usrURL={"assets/img/" + sgt + ".svg"} />
        ))}
      </ul>
    </>
  );
}