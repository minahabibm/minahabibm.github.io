'use client';
import Nav from './Nav';
// import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
     <header className={styles.container}>
      <div className={styles.main}>
        
        <div className={styles.div}>minahabib.dev</div>
        <Nav />
      
      </div>
    </header>
  );
}

const styles = {
  container: "h-10 bg-red-500 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50",
  main: "container mx-auto px-4 py-4 flex justify-between items-center",
  div: "text-xl font-bold"
};