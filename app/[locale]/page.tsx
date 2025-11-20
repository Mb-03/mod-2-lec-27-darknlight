import LocaleSwitcher from "@/features/components/LocaleSwitcher";
import { Link } from "@/features/routing";
import ThemeSwitcher from "@/features/theme/components/ThemeSwitcher";
import { useTranslations } from "next-intl";

const navItems = [
  { key: "transfer", path: "/dashboard/transfer" },
  {
    key: "transactions",
    path: "/dashboard/transactions",
  },
  {
    key: "statistics",
    path: "/dashboard/statistics",
  },
  { key: "support", path: "/dashboard/support" },
  {
    key: "kyc",
    path: "/dashboard/kyc",

    isKyc: true,
  },
];

const Home = () => {
  const t = useTranslations("Sidebar");

  return (
    <div>
      <LocaleSwitcher />
      {navItems.map(({ key, path }) => (
        <div key={key}>
          <Link href={path}>{t(key)}</Link>
        </div>
      ))}
      <ThemeSwitcher />
    </div>
  );
};

export default Home;
