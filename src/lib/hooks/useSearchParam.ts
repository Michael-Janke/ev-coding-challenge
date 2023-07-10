import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useSearchParam = (
  key: string,
  defaultValue: string | undefined = ""
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const value = current.get(key) || defaultValue;

  const setValue = (value: string | undefined) => {
    if (value === defaultValue || value === undefined) {
      current.delete(key);
    } else {
      current.set(key, value);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}`, { shallow: true });
  };

  return {
    value,
    setValue,
  };
};
