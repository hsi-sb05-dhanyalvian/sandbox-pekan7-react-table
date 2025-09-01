// components/Breadcrumbs.tsx
import React from "react";
import Link from "next/link";

type Crumb = { href?: string; label: string };

interface BreadcrumbsProps {
  items: Crumb[]; // last item is current page (no href)
  className?: string;
  separator?: "slash" | "chevron";
}

const Chevron = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M7.05 4.55L11.5 9l-4.45 4.45 1.4 1.4L14.3 9l-5.85-5.85-1.4 1.4z" />
  </svg>
);

export default function Breadcrumbs({ items, className = "", separator = "chevron" }: BreadcrumbsProps) {
  const Sep = () =>
    separator === "slash" ? (
      <span className="px-2 text-gray-400" aria-hidden="true">/</span>
    ) : (
      <span className="px-2 text-gray-400" aria-hidden="true"><Chevron /></span>
    );

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center">
              {!isLast ? (
                <>
                  {item.href ? (
                    <Link href={item.href} className="hover:text-gray-700">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="hover:text-gray-700">{item.label}</span>
                  )}
                  <Sep />
                </>
              ) : (
                <span
                  className="text-gray-900 font-medium max-w-[16rem] truncate"
                  aria-current="page"
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
