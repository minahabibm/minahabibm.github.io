'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={isActive ? styles.navLinkActive : styles.navLink}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

const navLinks = [
  { href: '/', label: '👨‍💻 Dev' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const styles = {
  container: "flex gap-6 text-sm font-medium",
  navLink: "text-gray-600 dark:text-gray-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400",
  navLinkActive: "text-black dark:text-white font-semibold"
};