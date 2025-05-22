import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <div className="flex flex-col h-screen justify-between">
          <Header />
          
          <main className="grow flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
