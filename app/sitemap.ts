// app/sitemap.ts
import { MetadataRoute } from "next";
import { doctors } from "@/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://evadent.ru";

  // Static routes
  const staticRoutes = [
    "",
    "/o-klinike",
    "/doctors",
    "/otzyvy",
    "/kontakty",
    "/stomatologiya/tseny",
    "/stomatologiya/lechenie-zubov",
    "/stomatologiya/implantatsiya",
    "/stomatologiya/protezirovanie",
    "/stomatologiya/ortodontiya",
    "/stomatologiya/khirurgiya",
    "/stomatologiya/gigiena",
    "/stomatologiya/brekety",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Doctor routes
  const doctorRoutes = doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...doctorRoutes];
}