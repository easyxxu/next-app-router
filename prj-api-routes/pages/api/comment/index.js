import path from "path";
import fs from "fs";

export function buildCommentPath() {
  return path.join(process.cwd(), "data", "comment.json");
}

export function extractComment(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}
export default function handler(req, res) {
  const filePath = buildCommentPath();
  const commentData = extractComment(filePath);

  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const content = req.body.content;
    const eventId = req.body.eventId;

    const comment = {
      email: email,
      name: name,
      content: content,
      eventId: eventId,
    };

    commentData.push(comment);
    fs.writeFileSync(filePath, JSON.stringify(commentData));
    res.status(201).json({ message: "Add Comment!", comment: comment });
  } else {
    res.status(200).json({ message: "get comment", comment: commentData });
  }
}
