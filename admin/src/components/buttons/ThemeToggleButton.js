import useTheme from "@/redux/hooks/useTheme";
import styles from "./ThemeToggle.module.scss";

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <label className={styles.toggle}>
        <input type="checkbox" defaultChecked={isDark} onChange={toggleTheme} />
        <div className={styles.slider}>
          <div className={styles.circle}></div>
        </div>
      </label>
    </div>
  );
}

export default ThemeToggleButton;
