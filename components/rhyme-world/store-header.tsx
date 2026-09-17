"use client"

import { Music } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import type { LanguageCode, translations } from "@/lib/rhymes"

export function StoreHeader({
  t,
  lang,
  onLangChange,
  onBrandClick,
}: {
  t: (typeof translations)[LanguageCode]
  lang: LanguageCode
  onLangChange: (code: LanguageCode) => void
  onBrandClick: () => void
}) {
  return (
    <header className="flex shrink-0 items-center justify-between px-5 py-4 sm:px-8">
      <button
        type="button"
        onClick={onBrandClick}
        className="flex items-center gap-2.5 text-left"
      >
        <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md shadow-violet-500/30">
          <Music className="size-5" aria-hidden="true" />
        </span>
        <span className="text-lg font-extrabold tracking-tight text-violet-950">
          {t.brand}
        </span>
      </button>
      <LanguageSelector value={lang} onChange={onLangChange} />
    </header>
  )
}
