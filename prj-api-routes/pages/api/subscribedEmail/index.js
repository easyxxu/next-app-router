import path from "path";
import fs from "fs";

export function buildSubscribedEmailPath() {
  return path.join(process.cwd(), "data", "subscribedEmail.json");
}

export function extractSubscribedEmail(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default function handler(req, res) {
  const filePath = buildSubscribedEmailPath();
  const data = extractSubscribedEmail(filePath);

  if (req.method === "POST") {
    const email = req.body.email;
    if (
      !email ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Email!" });
      return;
    }
    data.push(email);
    fs.writeFileSync(filePath, JSON.stringify(data));
    console.log(email);
    res.status(201).json({ message: "Success Newsletter-Registration" });
  }
}
