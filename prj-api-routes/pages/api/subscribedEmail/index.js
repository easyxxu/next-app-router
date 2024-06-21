import { connectDatabase, insertDocument } from "../../../helpers/db-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    // Email 유효성 검사
    if (
      !userEmail ||
      !userEmail.includes("@") ||
      !userEmail.includes(".") ||
      userEmail.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Email!" });
      return;
    }
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(403).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Success Newsletter-Registration" });
  }
}
