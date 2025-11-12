import { LightSwitcher } from "@/features/dashboard/assets/vectors";

interface DesktopThemeSwitcherProps {
  isLight: boolean;
  setTheme: (theme: "light" | "dark") => void;
}

const DesktopThemeSwitcher: React.FC<DesktopThemeSwitcherProps> = ({
  isLight,
  setTheme,
}) => {
  return (
    <div>
      <button
        className="cursor-pointer"
        onClick={() => setTheme(isLight ? "dark" : "light")}
      >
        <LightSwitcher
          className={`transition-colors duration-200 ease-in-out w-6 h-6 ${
            isLight ? "text-yellow-500" : "text-gray-500"
          }`}
        />
      </button>
    </div>
  );
};

export default DesktopThemeSwitcher;
