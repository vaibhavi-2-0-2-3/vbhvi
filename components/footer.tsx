import { socialLinks } from "@/data/contact";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 mx-auto max-w-2xl">
      <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

        {/* Text */}
        <p className="text-center sm:text-right">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-[hsl(var(--brandred))]">
            vaibhavig.dev
          </Link>{" "}
          |{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-[hsl(var(--brandred))]">
            Privacy
          </Link>
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon, href, label }) => {
            const isImage = typeof icon === "object" && "src" in icon;
            const Icon = icon;

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[hsl(var(--brandred))]"
              >
                {isImage ? (
                  <Image src={icon} alt={label} width={20} height={20} />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
