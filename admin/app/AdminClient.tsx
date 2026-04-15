"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Phone,
  Mail,
  Clock,
  Stethoscope,
  MessageSquare,
  CheckCircle2,
  Trash2,
  RefreshCw,
  Save,
  X,
  Edit2,
  User,
} from "lucide-react";

import { Button } from "../components/button";
import { Input } from "../components/input";

export interface Appointment {
  id: string;
  Дата: string;
  Имя: string;
  Телефон: string;
  Email?: string;
  Услуга?: string;
  Комментарий?: string;
  ЖелаемаяДата?: string;
  Время?: string;
  Врач?: string;
  Источник?: string;
  Статус: string;
}

export interface AdminClientProps {
  initialAppointments: Appointment[];
}

export default function AdminClient({
  initialAppointments,
}: AdminClientProps) {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Appointment>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchAppointments = async () => {
    try {
      console.log("🔄 Fetching appointments...");
      const res = await fetch("/api/bookings", {
        cache: "no-store",
      });
      const data = await res.json();
      console.log("📦 Received:", data.appointments?.length || 0, "appointments");
      setAppointments(Array.isArray(data) ? data : data.appointments || []);
    } catch (error) {
      console.error("❌ Failed to fetch appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const saveToServer = async (updatedAppointments: Appointment[]) => {
    setIsSaving(true);
    try {
      console.log("💾 Saving", updatedAppointments.length, "appointments");
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appointments: updatedAppointments }),
      });
      const data = await res.json();
      console.log("✅ Save response:", data);
    } catch (error) {
      console.error("❌ Failed to save:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const updateStatus = async (id: string, status: "confirmed") => {
    const updated = appointments.map((app) =>
      app.id === id ? { ...app, Статус: status } : app
    );
    setAppointments(updated);
    await saveToServer(updated);
  };

  const deleteAppointment = async (id: string) => {
    if (!confirm("Удалить запись?")) return;
    
    console.log("🗑️ Deleting appointment:", id);
    const updated = appointments.filter((app) => app.id !== id);
    
    setAppointments(updated);
    await saveToServer(updated);
    
    setTimeout(() => {
      fetchAppointments();
    }, 500);
  };

  const startEditing = (app: Appointment) => {
    setEditingId(app.id);
    setEditForm({ ...app });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEditing = async () => {
    if (!editingId) return;
    const updated = appointments.map((app) =>
      app.id === editingId ? { ...app, ...editForm } : app
    );
    setAppointments(updated);
    await saveToServer(updated);
    setEditingId(null);
    setEditForm({});
  };

  const updateEditField = (field: keyof Appointment, value: string) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const refreshData = async () => {
    setIsRefreshing(true);
    await fetchAppointments();
    setIsRefreshing(false);
  };

  const isNewStatus = (status: string): boolean => {
    const normalized = status?.toLowerCase();
    return normalized === "new" || status === "Новая" || status === "Новый";
  };

  const getStatusBadge = (status: string) => {
    const normalizedStatus = status?.toLowerCase();
    
    if (normalizedStatus === "confirmed" || status === "Подтверждено") {
      return {
        label: "Подтверждено",
        color: "bg-green-100 text-green-700",
        icon: CheckCircle2,
      };
    }
    return {
      label: "Новая",
      color: "bg-yellow-100 text-yellow-700",
      icon: Clock,
    };
  };

  const today = new Date().toLocaleDateString("ru-RU");

  const todayAppointments = appointments.filter(
    (a) => a.ЖелаемаяДата?.includes(today) || a.Дата?.includes(today)
  );

  const newAppointments = appointments.filter((a) => isNewStatus(a.Статус));

  const confirmedAppointments = appointments.filter(
    (a) => a.Статус?.toLowerCase() === "confirmed" || a.Статус === "Подтверждено"
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Записи на приём
              </h1>
              <p className="text-muted-foreground">
                Всего записей: {appointments.length}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={refreshData}
                disabled={isRefreshing}
                className="gap-2"
              >
                <RefreshCw
                  className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
                {isRefreshing ? "Обновление..." : "Обновить"}
              </Button>

              {isSaving && (
                <span className="text-sm text-muted-foreground flex items-center">
                  Сохранение...
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <StatCard
            icon={<Calendar className="w-4 h-4 text-primary" />}
            label="Сегодня"
            value={todayAppointments.length}
          />
          <StatCard
            icon={<Clock className="w-4 h-4 text-yellow-500" />}
            label="Новые"
            value={newAppointments.length}
          />
          <StatCard
            icon={<CheckCircle2 className="w-4 h-4 text-green-500" />}
            label="Подтверждено"
            value={confirmedAppointments.length}
          />
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-3 px-4 text-sm font-semibold">Статус</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Дата заявки</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Имя</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Контакты</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Услуга</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Желаемая дата</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Врач</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Комментарий</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold">Действия</th>
                </tr>
              </thead>

              <tbody>
                {appointments.length === 0 && (
                  <tr>
                    <td colSpan={9} className="text-center py-12 text-muted-foreground">
                      Нет записей на приём
                    </td>
                  </tr>
                )}

                {appointments.map((app, index) => {
                  const statusBadge = getStatusBadge(app.Статус);
                  const StatusIcon = statusBadge.icon;
                  const isEditing = editingId === app.id;
                  const isNew = isNewStatus(app.Статус);
                  const uniqueKey = app.id || `appointment-${index}-${Date.now()}`;

                  return (
                    <tr
                      key={uniqueKey}
                      className="border-b border-border hover:bg-secondary/20"
                    >
                      {/* Status */}
                      <td className="py-3 px-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full inline-flex items-center gap-1 ${statusBadge.color}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {statusBadge.label}
                        </span>
                      </td>

                      {/* Дата заявки */}
                      <td className="py-3 px-4 text-sm">
                        {isEditing ? (
                          <Input
                            type="text"
                            value={editForm.Дата || app.Дата || ""}
                            onChange={(e) => updateEditField("Дата", e.target.value)}
                            className="w-44 text-sm"
                          />
                        ) : (
                          app.Дата
                        )}
                      </td>

                      {/* Имя */}
                      <td className="py-3 px-4">
                        {isEditing ? (
                          <Input
                            type="text"
                            value={editForm.Имя || app.Имя || ""}
                            onChange={(e) => updateEditField("Имя", e.target.value)}
                            className="w-36 text-sm"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <User className="w-3 h-3 text-muted-foreground" />
                            {app.Имя}
                          </div>
                        )}
                      </td>

                      {/* Контакты */}
                      <td className="py-3 px-4">
                        {isEditing ? (
                          <div className="space-y-2">
                            <Input
                              type="text"
                              value={editForm.Телефон || app.Телефон || ""}
                              onChange={(e) => updateEditField("Телефон", e.target.value)}
                              className="w-44 text-sm"
                              placeholder="Телефон"
                            />
                            <Input
                              type="text"
                              value={editForm.Email || app.Email || ""}
                              onChange={(e) => updateEditField("Email", e.target.value)}
                              className="w-44 text-sm"
                              placeholder="Email"
                            />
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <Phone className="w-3 h-3 text-muted-foreground" />
                              {app.Телефон}
                            </div>
                            {app.Email && (
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Mail className="w-3 h-3" />
                                {app.Email}
                              </div>
                            )}
                          </div>
                        )}
                      </td>

                      {/* Услуга */}
                      <td className="py-3 px-4">
                        {isEditing ? (
                          <Input
                            type="text"
                            value={editForm.Услуга || app.Услуга || ""}
                            onChange={(e) => updateEditField("Услуга", e.target.value)}
                            className="w-40 text-sm"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <Stethoscope className="w-3 h-3 text-muted-foreground" />
                            {app.Услуга || "—"}
                          </div>
                        )}
                      </td>

                      {/* Желаемая дата */}
                      <td className="py-3 px-4">
                        {isEditing ? (
                          <div className="space-y-2">
                            <Input
                              type="text"
                              value={editForm.ЖелаемаяДата || app.ЖелаемаяДата || ""}
                              onChange={(e) => updateEditField("ЖелаемаяДата", e.target.value)}
                              className="w-36 text-sm"
                              placeholder="Дата"
                            />
                            <Input
                              type="text"
                              value={editForm.Время || app.Время || ""}
                              onChange={(e) => updateEditField("Время", e.target.value)}
                              className="w-24 text-sm"
                              placeholder="Время"
                            />
                          </div>
                        ) : (
                          <div>
                            {app.ЖелаемаяДата || "—"}
                            {app.Время && (
                              <div className="text-xs text-muted-foreground">{app.Время}</div>
                            )}
                          </div>
                        )}
                      </td>

                      {/* Врач */}
                      <td className="py-3 px-4">
                        {isEditing ? (
                          <Input
                            type="text"
                            value={editForm.Врач || app.Врач || ""}
                            onChange={(e) => updateEditField("Врач", e.target.value)}
                            className="w-40 text-sm"
                          />
                        ) : (
                          app.Врач || "Любой врач"
                        )}
                      </td>

                      {/* Комментарий */}
                      <td className="py-3 px-4 max-w-xs">
                        {isEditing ? (
                          <Input
                            type="text"
                            value={editForm.Комментарий || app.Комментарий || ""}
                            onChange={(e) => updateEditField("Комментарий", e.target.value)}
                            className="w-48 text-sm"
                          />
                        ) : app.Комментарий ? (
                          <div className="flex items-start gap-2">
                            <MessageSquare className="w-3 h-3 mt-1 shrink-0 text-muted-foreground" />
                            <span className="text-sm line-clamp-2">{app.Комментарий}</span>
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>

                      {/* Действия */}
                      <td className="py-3 px-4">
                        {isEditing ? (
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={saveEditing}
                              className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                              title="Сохранить"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="p-2 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                              title="Отменить редактирование"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-1">
                            {/* Confirm button - only for NEW status */}
                            {isNew && (
                              <button
                                onClick={() => updateStatus(app.id, "confirmed")}
                                className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                                title="Подтвердить"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            )}

                            {/* Edit button */}
                            <button
                              onClick={() => startEditing(app)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              title="Редактировать"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>

                            {/* Delete button */}
                            <button
                              onClick={() => deleteAppointment(app.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                              title="Удалить"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}