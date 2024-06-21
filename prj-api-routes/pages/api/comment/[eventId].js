import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  // 데이터베이스 연결
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connection to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, content } = req.body;

    // input 유효성 검사
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !content ||
      content.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      content,
      eventId,
    };
    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Add Comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { eventId: eventId },
        { _id: -1 }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed" });
    }
  }

  client.close();
}
