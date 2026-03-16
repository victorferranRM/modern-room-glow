import { Link, LinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { useCurrentLang } from "./useTranslation";
import { localizeHref } from "./routes";

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

export const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  ({ to, ...props }, ref) => {
    const lang = useCurrentLang();
    const localizedTo = localizeHref(to, lang);
    return <Link ref={ref} to={localizedTo} {...props} />;
  }
);

LocalizedLink.displayName = "LocalizedLink";
