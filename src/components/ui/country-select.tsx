import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getSortedCountries, Country } from "@/lib/countries";

interface CountrySelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function CountrySelect({
  value,
  onValueChange,
  placeholder = "Select country",
  disabled = false,
}: CountrySelectProps) {
  const [open, setOpen] = React.useState(false);
  const { priority, others } = getSortedCountries();
  const allCountries = [...priority, ...others];

  const selectedCountry = allCountries.find((country) => country.code === value);

  const renderCountryItem = (country: Country) => (
    <CommandItem
      key={country.code}
      value={country.name}
      onSelect={() => {
        onValueChange?.(country.code);
        setOpen(false);
      }}
      className="flex items-center gap-2 cursor-pointer"
    >
      <span className="text-lg leading-none">{country.flag}</span>
      <span className="flex-1 truncate">{country.name}</span>
      <Check
        className={cn(
          "h-4 w-4",
          value === country.code ? "opacity-100" : "opacity-0"
        )}
      />
    </CommandItem>
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
          disabled={disabled}
        >
          {selectedCountry ? (
            <span className="flex items-center gap-2 truncate">
              <span className="text-lg leading-none">{selectedCountry.flag}</span>
              <span className="truncate">{selectedCountry.name}</span>
            </span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0 bg-background border z-50" align="start">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            {/* Priority countries */}
            <CommandGroup>
              {priority.map(renderCountryItem)}
            </CommandGroup>
            {/* Separator */}
            <CommandSeparator />
            {/* All other countries */}
            <CommandGroup className="max-h-48 overflow-auto">
              {others.map(renderCountryItem)}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}