"use client";

import { useLanguage } from "@/lib/language-context";

export function GoogleReviewsBadge() {
  const { t } = useLanguage();

  return (
    <a
      href="https://www.google.com/search?q=courtyard+pickle+da+nang&sxsrf=ANbL-n6OrSRuq7N0Sm7EtV5rPuT6ZOpkFQ%3A1776261746390#irp="
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group w-fit"
    >
      <div className="flex gap-1">
        {/* Google branding typically uses #FBBC04 for their stars */}
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i <= 4
                ? "text-[#FBBC04] fill-[#FBBC04]"
                : "text-[#FBBC04] fill-[url(#half-star)]"
            }`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {i === 5 && (
              <defs>
                <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                  <stop offset="70%" stopColor="#FBBC04" />
                  <stop offset="70%" stopOpacity="0" />
                </linearGradient>
              </defs>
            )}
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
        {t.reviews.badgeFormat}
      </span>
      <span className="sr-only">Google Business Profile</span>
    </a>
  );
}
