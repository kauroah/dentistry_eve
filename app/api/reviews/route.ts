import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reviews.json");

export async function GET() {
  const data = fs.readFileSync(filePath, "utf8");
  return Response.json(JSON.parse(data));
}

export async function POST(req: Request) {

  const newReview = await req.json();

  const data = fs.readFileSync(filePath, "utf8");
  const reviews = JSON.parse(data);

  reviews.unshift({
    ...newReview,
    id: Date.now(),
    date: "Только что",
  });

  fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));

  return Response.json({ success: true });
}
