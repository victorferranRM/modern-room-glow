import * as React from "react";
import { Input } from "@/components/ui/input";
import { getCountryByCode, Country } from "@/lib/countries";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  countryCode?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function PhoneInput({
  value = "",
  onChange,
  countryCode,
  placeholder = "Phone number",
  disabled = false,
  className,
}: PhoneInputProps) {
  const country = countryCode ? getCountryByCode(countryCode) : null;
  const prefix = country?.phonePrefix || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, spaces, and dashes
    const cleanValue = e.target.value.replace(/[^\d\s-]/g, "");
    onChange?.(cleanValue);
  };

  return (
    <div className={cn("flex", className)}>
      {/* Fixed prefix */}
      <div className="flex items-center gap-1.5 px-3 rounded-l-md border border-r-0 bg-muted text-muted-foreground text-sm min-w-[70px] shrink-0">
        {country && (
          <span className="text-base leading-none">{country.flag}</span>
        )}
        <span className="font-medium">{prefix || "+--"}</span>
      </div>
      {/* Phone number input */}
      <Input
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className="rounded-l-none flex-1"
      />
    </div>
  );
}