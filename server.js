import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma descrição qualquer",
    imagem: "https://placecats.com/millie/300/100"
  },
  {
    id: 2,
    descricao: "Uma descrição qualquer 1",
    imagem: "https://placecats.com/millie/300/100"
  },
  {
    id: 3,
    descricao: "Uma descrição qualquer 2",
    imagem: "https://placecats.com/millie/300/100"
  },
  {
    id: 4,
    descricao: "Uma descrição qualquer 3",
    imagem: "https://placecats.com/millie/300/100"
  },
  {
    id: 5,
    descricao: "Uma descrição qualquer 4",
    imagem: "https://placecats.com/millie/300/100"
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});