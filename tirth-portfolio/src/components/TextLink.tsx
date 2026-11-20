import type { TextLink as TextLinkData } from "@/content";

/** Underlined text link (accent underline on sky/cream, ink on orange). */
export default function TextLink({
  link,
  className,
}: {
  link: TextLinkData;
  className?: string;
}) {
  return (
    <a
      href={link.href}
      className={className ? `link ${className}` : "link"}
      {...(link.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {link.label}
    </a>
  );
}
