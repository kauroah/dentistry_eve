import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны для заполнения" },
        { status: 400 }
      );
    }

    const newRow = {
      Дата: new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
      Имя: body.name.trim(),
      Телефон: body.phone.trim(),
      Email: body.email?.trim() || "",
      Услуга: body.service?.trim() || "",
      Комментарий: body.comment?.trim() || "",
      ЖелаемаяДата: body.date || "",
      Источник: "Сайт",
    };

    const dataDir = path.join(process.cwd(), "data");
    const csvPath = path.join(dataDir, "appointments.csv");
    const jsonPath = path.join(dataDir, "appointments.json");

    // Create folder if missing
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Create CSV header if file doesn't exist
    if (!fs.existsSync(csvPath)) {
      const header =
        "Дата,Имя,Телефон,Email,Услуга,Комментарий,ЖелаемаяДата,Источник\n";
      fs.writeFileSync(csvPath, header);
    }

    // Convert row to CSV format
    const row = [
      newRow.Дата,
      newRow.Имя,
      newRow.Телефон,
      newRow.Email,
      newRow.Услуга,
      newRow.Комментарий,
      newRow.ЖелаемаяДата,
      newRow.Источник,
    ]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(",");

    fs.appendFileSync(csvPath, row + "\n");

    // Optional JSON backup
    let jsonData: any[] = [];

    if (fs.existsSync(jsonPath)) {
      const raw = fs.readFileSync(jsonPath, "utf8");
      jsonData = JSON.parse(raw || "[]");
    }

    jsonData.push(newRow);
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

    console.log(`✅ Appointment saved. Total: ${jsonData.length}`);

    return NextResponse.json({
      success: true,
      message: "Заявка успешно отправлена!",
    });

  } catch (error) {
    console.error("❌ Appointment save error:", error);

    return NextResponse.json(
      { error: "Не удалось сохранить заявку. Пожалуйста, попробуйте позже." },
      { status: 500 }
    );
  }
}