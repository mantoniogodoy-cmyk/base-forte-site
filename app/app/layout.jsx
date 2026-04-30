import "./globals.css";

export const metadata = {
  title: "Base Forte Refeições Corporativas",
  description: "Alimentação que sustenta operações."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
