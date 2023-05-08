import Story from "./Story";


export default function Stories() {
  let storyLs = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];



  return (
    <>
      <ul class="stories">
        {storyLs.map((str) => 
          <Story url={"assets/img/" + str + ".svg"} usr={str} />
        )}



        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </ul>
    </>
  );
}