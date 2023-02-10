import * as fs from "fs";

export default async function handleRequest(req, res) {
  if (req.method === "GET") {
    let data = await fs.promises.readdir("Json");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const items = data[index];
      myfile = await fs.promises.readFile("Json/" + items, "utf-8");
      allBlogs.push(JSON.parse(myfile));
    }
    res.status(200).json({ content: allBlogs });
  } else if (req.method == "POST") {
    
  } else {
  }
}
