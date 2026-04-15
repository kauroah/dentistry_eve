import { NextResponse } from "next/server";
import { kv } from '@vercel/kv'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 Received booking data:", body);

    // Validate required fields
if (!body.name?.trim() || !body.phone?.trim() || body.phone === "+7") {
  return NextResponse.json(
    { error: "Имя и телефон обязательны для заполнения" },
    { status: 400, headers: corsHeaders }
  );
}

    const newRow = {
      id: `app-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      Дата: new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
      Имя: body.name.trim(),
      Телефон: body.phone.trim(),
      Email: body.email?.trim() || "",
      Услуга: body.service?.trim() || "",
      Комментарий: body.comment?.trim() || "",
      ЖелаемаяДата: body.date || "",
      Время: body.time || "",
      Врач: body.doctor || "",
      Источник: "Сайт",
      Статус: "new",
    };

    console.log("📝 Creating new appointment:", newRow);

    // Get existing appointments from KV
    const existingAppointments = (await kv.get('appointments')) as any[] || [];
    
    // Add new appointment
    const updatedAppointments = [...existingAppointments, newRow];
    
    // Save back to KV
    await kv.set('appointments', updatedAppointments);
    
    console.log(`✅ Saved to KV. Total: ${updatedAppointments.length}`);

    return NextResponse.json({
      success: true,
      message: "Заявка успешно отправлена!",
    }, { headers: corsHeaders });

  } catch (error) {
    console.error("❌ Appointment save error:", error);

    return NextResponse.json(
      { error: "Не удалось сохранить заявку. Пожалуйста, попробуйте позже." },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    message: "Booking API is working" 
  }, { headers: corsHeaders })
}