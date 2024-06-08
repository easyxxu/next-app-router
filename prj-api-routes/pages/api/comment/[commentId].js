import { buildCommentPath, extractComment } from ".";

export default function handler(req, res) {
  const eventId = req.query.commentId;
  const filePath = buildCommentPath();
  const fileData = extractComment(filePath);
  const commentData = fileData.filter((data) => data.eventId === eventId);
  res
    .status(200)
    .json({ message: `${eventId}'s comment loaded`, comment: commentData });
}
