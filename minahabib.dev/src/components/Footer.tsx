export default function Footer() {
  return (
    <footer className={styles.container}>
      © {new Date().getFullYear()} MH. All rights reserved.
    </footer>
  );
}

const styles = {
  container: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-4 text-center text-sm text-gray-600 dark:text-gray-400",
};