"use client";

import { Star, Users, Award, Shield } from "lucide-react";

export function CTASection() {
  const stats = [
    { 
      icon: Users, 
      value: "10 000+", 
      label: "Довольных пациентов",
      color: "text-blue-500"
    },
    { 
      icon: Star, 
      value: "4.9", 
      label: "Рейтинг на Яндекс.Картах",
      color: "text-yellow-500"
    },
    { 
      icon: Award, 
      value: "15+", 
      label: "Лет опыта",
      color: "text-purple-500"
    },
    { 
      icon: Shield, 
      value: "100%", 
      label: "Гарантия безопасности",
      color: "text-green-500"
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Нам доверяют ваши улыбки
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Присоединяйтесь к тысячам пациентов, которые уже выбрали нас
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}