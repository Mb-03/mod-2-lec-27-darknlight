import ThemeSwitcher from "@/features/theme/components/ThemeSwitcher";
import SideBar from "./SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SideBar />
      <ThemeSwitcher />
      {children}
    </div>
  );
}
