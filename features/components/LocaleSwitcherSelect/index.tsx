"use client";

import { Locale, routing, usePathname, useRouter } from "@/features/routing";
import { useParams } from "next/navigation";

type Props = {
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace({ pathname }, { locale: nextLocale as Locale });
  }

  return (
    <select
      defaultValue={defaultValue}
      onChange={onSelectChange}
      aria-label={label}
      // want that
      className="border border-error rounded-[10px] px-[15px] py-2.5"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
