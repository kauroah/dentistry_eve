import { kv } from '@vercel/kv'
import AdminClient from './AdminClient'

export interface Appointment {
  id: string
  Дата: string
  Имя: string
  Телефон: string
  Email?: string
  Услуга?: string
  Комментарий?: string
  ЖелаемаяДата?: string
  Время?: string
  Врач?: string
  Источник?: string
  Статус: 'new' | 'confirmed'
}

export const dynamic = 'force-dynamic'

async function getAppointments(): Promise<Appointment[]> {
  try {
    const appointments = (await kv.get('appointments')) as Appointment[] || []
    return appointments.reverse()
  } catch (error) {
    console.error('Error reading KV:', error)
    return []
  }
}

export default async function AdminPage() {
  const initialAppointments = await getAppointments()
  return <AdminClient initialAppointments={initialAppointments} />
}