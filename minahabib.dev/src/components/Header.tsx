'use client';
import Nav from './Nav';
// import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
     <header className="h-10 bg-red-500 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">minahabib.dev</div>
        <Nav />
      </div>
    </header>
  );
}