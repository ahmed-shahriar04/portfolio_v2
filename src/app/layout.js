import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOSInit from "@/components/AOSInit";

export const metadata = {
  title: "Shahriar Ahmed Riaz | Frontend Web Developer & Software Engineer",
  description: "Official portfolio of Shahriar Ahmed Riaz. Frontend Web Developer and Computer Science undergraduate at United International University (UIU). Specializing in React, Next.js, and modern UI engineering.",
  keywords: ["Shahriar Ahmed Riaz", "Frontend Developer", "Web Developer", "React", "Next.js", "Tailwind CSS", "UIU", "Software Engineer", "Dhaka"],
  authors: [{ name: "Shahriar Ahmed Riaz" }],
  creator: "Shahriar Ahmed Riaz",
  openGraph: {
    title: "Shahriar Ahmed Riaz | Frontend Web Developer",
    description: "Crafting High-Performance, Animated & Pixel-Perfect Web Experiences.",
    url: "https://shahriarahmedriaz.netlify.app",
    siteName: "Shahriar Ahmed Riaz Portfolio",
    images: [
      {
        url: "https://i.postimg.cc/WbSb1HtW/IMG-0993(1).jpg",
        width: 800,
        height: 800,
        alt: "Shahriar Ahmed Riaz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="https://i.postimg.cc/WbSb1HtW/IMG-0993(1).jpg" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className="antialiased selection:bg-cyan-500 selection:text-white">
        <AOSInit />
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
