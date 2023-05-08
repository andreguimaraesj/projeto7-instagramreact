import Post from "./Post";



export default function Posts() {
  let postLs = [
    {
      usr: "detto",
      post: "thuggin"
    },
    {
      usr: "meowed",
      post: "gato-telefone",
    },
    {
      usr: "barked",
      post: "dog",
    },
  ];

  

  return (
    <>
      <ul class="posts">
        {postLs.map((pst) => (
          <Post
            usrURL={"assets/img/" + pst.usr + ".svg"}
            usr={pst.usr}
            imgURL={"assets/img/" + pst.post + ".svg"}
            dsc={pst.post}
            likes={(Math.random() * (1000 - 2) + 2).toFixed(0)}
          />
        ))}
      </ul>
    </>
  );
}