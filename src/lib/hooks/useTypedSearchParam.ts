import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useTypedSearchParam = <
  PossibleValue extends string,
  DefaultValue extends string
>(
  key: string,
  possibleValues: PossibleValue[],
  defaultValue: DefaultValue
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const raw = current.get(key);

  const parsedValue = parseParam(raw, possibleValues, defaultValue);

  const setValue = (value: PossibleValue | DefaultValue) => {
    current.set(key, value);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const toggleValue = (value: PossibleValue) =>
    setValue(value === parsedValue ? defaultValue : value);

  return {
    value: parsedValue,
    setValue,
    toggleValue,
  };
};

const parseParam = <PossibleValue, NonValue>(
  param: string | null | undefined,
  possibleValues: PossibleValue[],
  nonValue: NonValue
) => {
  for (const value of possibleValues) {
    if (param === value) {
      return value;
    }
  }
  return nonValue;
};
