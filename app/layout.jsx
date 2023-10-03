import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import './globals.css'

export const metadata = {
  title: "Principles Next.js | Homepage",
  description: "This is the home page of the Principles Next.js website",
  keywords: "nextjs, react, SEO, principles",
};
//Voy a ejecutar Roboto porque es una función y lo extraemos
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", 'normal'],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
