import * as Icons from "@/features/dashboard/assets/vectors";
import Link from "next/link";

const SideBar = () => {
  const navItems = [
    {
      label: "გადარიცხვა",
      path: "/dashboard/transfer",
      icon: Icons.transfer,
    },
    {
      label: "ტრანზაქციები",
      path: "/dashboard/transactions",
      icon: Icons.transactions,
    },
    {
      label: "სტატისტიკა",
      path: "/dashboard/statistics",
      icon: Icons.statistics,
    },
    { label: "მხარდაჭერა", path: "/dashboard/support", icon: Icons.support },
    {
      label: "KYC Verification",
      path: "/dashboard/kyc",
      icon: Icons.kyc,
      isKyc: true,
    },
  ];
  return (
    <div>
      {navItems.map(({ path, label, isKyc, icon: Icon }) => (
        <div>
          <Link href={path}>
            <Icon />
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
