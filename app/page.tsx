"use client"

import { useState } from "react"
import { StoreHeader } from "@/components/rhyme-world/store-header"
import { HeroView } from "@/components/rhyme-world/hero-view"
import { ProductView } from "@/components/rhyme-world/product-view"
import { CheckoutView } from "@/components/rhyme-world/checkout-view"
import { translations, type LanguageCode, type Rhyme } from "@/lib/rhymes"

type View = "hero" | "product" | "checkout"

export default function Page() {
  const [lang, setLang] = useState<LanguageCode>("en")
  const [view, setView] = useState<View>("hero")
  const [selected, setSelected] = useState<Rhyme | null>(null)
  const t = translations[lang]

  function goHome() {
    setView("hero")
    setSelected(null)
  }

  return (
    <main className="relative flex h-dvh flex-col overflow-hidden bg-gradient-to-b from-violet-50 via-fuchsia-50 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-violet-300/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/3 size-72 rounded-full bg-fuchsia-300/30 blur-3xl"
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <StoreHeader t={t} lang={lang} onLangChange={setLang} onBrandClick={goHome} />

        <div className="min-h-0 flex-1">
          {view === "hero" && (
            <HeroView
              t={t}
              onSelect={(rhyme) => {
                setSelected(rhyme)
                setView("product")
              }}
            />
          )}

          {view === "product" && selected && (
            <ProductView
              t={t}
              rhyme={selected}
              onBack={goHome}
              onBuy={() => setView("checkout")}
            />
          )}

          {view === "checkout" && selected && (
            <CheckoutView
              t={t}
              rhyme={selected}
              onBack={() => setView("product")}
              onDone={goHome}
            />
          )}
        </div>
      </div>
    </main>
  )
}
