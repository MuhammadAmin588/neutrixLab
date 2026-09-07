import Icon from './Icon'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { isLight, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={isLight}
      title={isLight ? 'Dark theme' : 'Light theme'}
    >
      <Icon
        name={isLight ? 'dark_mode' : 'light_mode'}
        fill
        className="theme-toggle-icon"
      />
    </button>
  )
}
