import "../styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Header />
          
          <main className={styles.main}>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

const styles = {
  container: "flex flex-col min-h-screen justify-between",
  main: "flex-grow container mx-auto px-4 py-8",
};
