import ThemeSwitcher from "./themeSwitcher";

const Settings = () => {
  return (
    <nav className="fixed top-2 right-3 z-50 md:top-2.5">
      <span className="flex w-fit items-center overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/40">
        <ThemeSwitcher />
      </span>
    </nav>
  );
};

export default Settings;
