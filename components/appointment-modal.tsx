"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ArrowRight, X, Clock, User, Phone, Mail, AlertCircle, CheckCircle2, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { doctors, type Doctor } from "@/data/doctors";

interface AppointmentModalProps {
  children: React.ReactNode;
  className?: string;
  doctorList?: Doctor[];
}

// Time slots
const timeSlots = [
  "8:00", "8:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00"
];

export function AppointmentModal({ 
  children, 
  className,
  doctorList = doctors 
}: AppointmentModalProps) {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "+7",
    email: "",
    service: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);

  // Handle form field changes
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Validate form
  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.service.trim()) errors.service = "Укажите желаемую услугу";
      if (!selectedDoctor) errors.doctor = "Выберите врача";
      if (!selectedDate) errors.date = "Выберите дату";
      if (!selectedTime) errors.time = "Выберите время";
    } else if (step === 2) {
      if (!formData.name.trim()) errors.name = "Введите имя";
      if (!formData.phone || formData.phone === "+7") errors.phone = "Введите телефон";
      if (formData.phone && !/^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = "Неверный формат телефона";
      }
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Неверный формат email";
      }
      if (!agreed) errors.agreed = "Необходимо согласие";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(2)) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const selectedDoctorData = doctorList.find(d => String(d.id) === selectedDoctor);

      const appointmentData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        doctor: selectedDoctorData ? `${selectedDoctorData.name} ${selectedDoctorData.surname}` : selectedDoctor,
        date: selectedDate,
        time: selectedTime,
        comment: formData.comment,
      };

      const res = await fetch("https://admin-ten-zeta-51.vercel.app/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setOpen(false);
          resetForm();
        }, 3000);
      } else {
        const error = await res.json();
        setSubmitError(error.error || "Ошибка при отправке заявки");
      }
    } catch (error) {
      setSubmitError("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedDoctor("");
    setSelectedDate(today);
    setSelectedTime("");
    setFormData({
      name: "",
      phone: "+7",
      email: "",
      service: "",
      comment: "",
    });
    setAgreed(false);
    setSubmitted(false);
    setSubmitError("");
    setFormErrors({});
  };

  const handlePhoneChange = (value: string) => {
    let formatted = value.replace(/\D/g, '');
    if (formatted.startsWith('7')) formatted = formatted.slice(1);
    if (formatted.length > 10) formatted = formatted.slice(0, 10);
    
    let result = '+7';
    if (formatted.length > 0) result += ' (' + formatted.slice(0, 3);
    if (formatted.length >= 4) result += ') ' + formatted.slice(3, 6);
    if (formatted.length >= 7) result += '-' + formatted.slice(6, 8);
    if (formatted.length >= 9) result += '-' + formatted.slice(8, 10);
    
    setFormData(prev => ({ ...prev, phone: result }));
  };

  const selectedDoctorData = doctorList.find(d => String(d.id) === selectedDoctor);

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) resetForm();
    }}>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent 
        className="max-w-[600px] max-h-[85vh] gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-2xl flex flex-col"
        aria-describedby="appointment-dialog-description"
      >
        <DialogHeader className="relative border-b border-border px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-foreground">
              {submitted ? "Заявка отправлена!" : "Запись на приём"}
            </DialogTitle>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-secondary transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
          
          {/* Accessibility Description */}
          <DialogDescription id="appointment-dialog-description" className="sr-only">
            {submitted 
              ? `Ваша заявка на приём успешно отправлена. Услуга: ${formData.service}. Врач: ${selectedDoctorData?.name} ${selectedDoctorData?.surname}. Дата и время: ${new Date(selectedDate).toLocaleDateString('ru-RU')} в ${selectedTime}. Ожидайте звонка для подтверждения.`
              : `Форма записи на приём в стоматологическую клинику. Шаг ${currentStep} из 2. ${currentStep === 1 ? 'Выберите услугу, врача, дату и время.' : 'Введите ваши контактные данные.'}`
            }
          </DialogDescription>
          
          {!submitted && (
            <div className="mt-4 flex items-center gap-2">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                currentStep === 1 ? "bg-primary text-primary-foreground" : "bg-green-100 text-green-700"
              )}>
                {currentStep > 1 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
              </div>
              <div className={cn("h-0.5 flex-1", currentStep > 1 ? "bg-green-500" : "bg-border")} />
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                currentStep === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                2
              </div>
            </div>
          )}
        </DialogHeader>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/30">
          {submitted ? (
            <div className="flex flex-col items-center justify-center pb-4">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <p className="text-center text-lg font-medium text-foreground">
                Спасибо за заявку!
              </p>
              <p className="mt-2 text-center text-muted-foreground">
                Мы свяжемся с вами в ближайшее время для подтверждения записи
              </p>
              <div className="mt-6 rounded-lg bg-secondary/30 p-4 w-full">
                <p className="text-sm font-medium text-foreground mb-2">Детали записи:</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Услуга: {formData.service}</p>
                  <p>Врач: {selectedDoctorData?.name} {selectedDoctorData?.surname}</p>
                  <p>Дата: {new Date(selectedDate).toLocaleDateString('ru-RU')} в {selectedTime}</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pb-2">
              {currentStep === 1 ? (
                <div className="space-y-4">
                  {/* Service Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Stethoscope className="h-4 w-4 text-primary" />
                      Желаемая услуга <span className="text-red-500">*</span>
                    </label>
                    <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                      <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                        Услуга
                      </label>
                      <input
                        type="text"
                        value={formData.service}
                        onChange={(e) => {
                          handleChange("service", e.target.value);
                          setFormErrors(prev => ({ ...prev, service: "" }));
                        }}
                        placeholder="Например: Консультация, Лечение кариеса, Имплантация..."
                        className={cn(
                          "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none",
                          formErrors.service && "border-red-500"
                        )}
                      />
                    </div>
                    {formErrors.service && (
                      <p className="text-xs text-red-500">{formErrors.service}</p>
                    )}
                  </div>

                  {/* Doctor Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Выберите врача <span className="text-red-500">*</span>
                    </label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger className={cn(
                        "w-full",
                        formErrors.doctor && "border-red-500"
                      )}>
                        <SelectValue placeholder="Выберите врача" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctorList.map((doctor) => (
                          <SelectItem key={doctor.id} value={String(doctor.id)}>
                            <div>
                              <p>{doctor.name} {doctor.surname}</p>
                              <p className="text-xs text-muted-foreground">{doctor.specialty}</p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formErrors.doctor && (
                      <p className="text-xs text-red-500">{formErrors.doctor}</p>
                    )}
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Выберите дату <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={today}
                      className={cn(formErrors.date && "border-red-500")}
                    />
                    {formErrors.date && (
                      <p className="text-xs text-red-500">{formErrors.date}</p>
                    )}
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Выберите время <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "rounded-lg border px-3 py-2 text-sm transition-colors",
                            selectedTime === time
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50 hover:bg-secondary/50"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {formErrors.time && (
                      <p className="text-xs text-red-500">{formErrors.time}</p>
                    )}
                  </div>

                  {/* Summary */}
                  {formData.service && selectedDoctor && selectedDate && selectedTime && (
                    <div className="rounded-lg bg-secondary/30 p-4">
                      <p className="text-sm font-medium text-foreground mb-2">Ваша запись:</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Услуга: {formData.service}</p>
                        <p>Врач: {selectedDoctorData?.name} {selectedDoctorData?.surname}</p>
                        <p>Специализация: {selectedDoctorData?.specialty}</p>
                        <p>Дата и время: {new Date(selectedDate).toLocaleDateString('ru-RU')} в {selectedTime}</p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="button"
                    onClick={handleNext}
                    className="w-full"
                  >
                    Продолжить
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                      <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                        Имя <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            handleChange("name", e.target.value);
                            setFormErrors(prev => ({ ...prev, name: "" }));
                          }}
                          placeholder="Александра"
                          className={cn(
                            "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none",
                            formErrors.name && "border-red-500"
                          )}
                          required
                        />
                      </div>
                    </div>
                    {formErrors.name && (
                      <p className="text-xs text-red-500 -mt-2">{formErrors.name}</p>
                    )}

                    <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                      <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                        Телефон <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            handlePhoneChange(e.target.value);
                            setFormErrors(prev => ({ ...prev, phone: "" }));
                          }}
                          className={cn(
                            "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none",
                            formErrors.phone && "border-red-500"
                          )}
                          required
                        />
                      </div>
                    </div>
                    {formErrors.phone && (
                      <p className="text-xs text-red-500 -mt-2">{formErrors.phone}</p>
                    )}

                    <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                      <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                        Email
                      </label>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            handleChange("email", e.target.value);
                            setFormErrors(prev => ({ ...prev, email: "" }));
                          }}
                          placeholder="name@mail.com"
                          className={cn(
                            "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none",
                            formErrors.email && "border-red-500"
                          )}
                        />
                      </div>
                    </div>
                    {formErrors.email && (
                      <p className="text-xs text-red-500 -mt-2">{formErrors.email}</p>
                    )}

                    <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                      <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                        Комментарий
                      </label>
                      <Textarea
                        value={formData.comment}
                        onChange={(e) => handleChange("comment", e.target.value)}
                        placeholder="Дополнительная информация..."
                        className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms-modal"
                      checked={agreed}
                      onCheckedChange={(checked) => {
                        setAgreed(checked as boolean);
                        setFormErrors(prev => ({ ...prev, agreed: "" }));
                      }}
                      className={cn(
                        "mt-0.5 h-5 w-5 rounded border-2",
                        formErrors.agreed && "border-red-500"
                      )}
                    />
                    <label
                      htmlFor="terms-modal"
                      className="text-xs leading-relaxed text-muted-foreground"
                    >
                      Я даю{" "}
                      <a href="/privacy" className="text-foreground underline hover:text-primary">
                        согласие на обработку персональных данных
                      </a>{" "}
                      {/* и принимаю{" "}
                      <a href="/terms" className="text-foreground underline hover:text-primary">
                        условия публичной оферты
                      </a> */}
                    </label>
                  </div>
                  {formErrors.agreed && (
                    <p className="text-xs text-red-500">{formErrors.agreed}</p>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {submitError}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1"
                    >
                      Назад
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? "Отправка..." : "Записаться"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}