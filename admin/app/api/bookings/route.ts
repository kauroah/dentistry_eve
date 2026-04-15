import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  })
}

export async function GET() {
  try {
    const appointments = (await kv.get('appointments')) as any[] || []

    return NextResponse.json(
      { appointments },
      { headers: corsHeaders }
    )
  } catch (error) {
    console.error('GET error:', error)

    return NextResponse.json(
      { appointments: [] },
      { headers: corsHeaders }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    console.log("📥 booking received:", body)

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400, headers: corsHeaders }
      )
    }

    const newAppointment = {
      id: `app-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      Дата: new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
      Имя: body.name,
      Телефон: body.phone,
      Email: body.email || "",
      Услуга: body.service || "",
      Комментарий: body.comment || "",
      ЖелаемаяДата: body.date || "",
      Время: body.time || "",
      Врач: body.doctor || "",
      Источник: "Сайт",
      Статус: "new",
    }

    const existing = (await kv.get("appointments")) as any[] || []

    const updated = [...existing, newAppointment]

    await kv.set("appointments", updated)

    console.log("✅ appointment saved")

    return NextResponse.json(
      { success: true },
      { headers: corsHeaders }
    )

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Save failed" },
      { status: 500, headers: corsHeaders }
    )
  }
}