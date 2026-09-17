"use client"

import { Globe, ChevronDown } from "lucide-react"
import { languages, type LanguageCode } from "@/lib/rhymes"

export function LanguageSelector({
  value,
  onChange,
}: {
  value: LanguageCode
  onChange: (code: LanguageCode) => void
}) {
  const current = languages.find((l) => l.code === value) ?? languages[0]

  return (
    <label className="group relative inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 py-1.5 pl-3 pr-2 text-sm font-medium text-violet-800 shadow-sm backdrop-blur transition hover:border-violet-300 hover:bg-white">
      <Globe className="size-4 text-violet-500" aria-hidden="true" />
      <span aria-hidden="true">{current.flag}</span>
      <span className="hidden sm:inline">{current.label}</span>
      <ChevronDown className="size-4 text-violet-400" aria-hidden="true" />
      <select
        aria-label="Select language and region"
        value={value}
        onChange={(e) => onChange(e.target.value as LanguageCode)}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label} — {lang.region}
          </option>
        ))}
      </select>
    </label>
  )
}
