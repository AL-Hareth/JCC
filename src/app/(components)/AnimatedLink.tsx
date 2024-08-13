import Link from "next/link";

export default function AnimatedLink({ children, color="bg-yellow-600", href="#", classNames }: { children: React.ReactNode, color?: string, href?: string, classNames?: string }) {
  return (
    <Link
      className={`group transition duration-300 inline-block no-underline ${classNames}`}
      href={href}
    >{children}
      <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${color}`}></span>
    </Link>
  );
}
