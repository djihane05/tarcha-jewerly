import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TARCHA Jewelry",
  description: "Discover timeless elegance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
