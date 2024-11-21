import getTodosPosts from "../models/postsModel.js";

async function listarPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}

export { listarPosts };