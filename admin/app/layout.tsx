import "./globals.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "Dentistry Eve Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}