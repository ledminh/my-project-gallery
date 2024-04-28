import "@/app/globals.css";

export const metadata = {
  title: "Shop Landing Page 1",
  description:
    "A landing page for a shop. It features a hero section with a call to action, a product grid, and a footer with social media links.",
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
