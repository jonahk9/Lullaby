"use client"

import Image from "next/image"
import { Sparkles, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { rhymes, type Rhyme, type LanguageCode, type translations } from "@/lib/rhymes"

export function HeroView({
  t,
  onSelect,
}: {
  t: (typeof translations)[LanguageCode]
  onSelect: (rhyme: Rhyme) => void
}) {
  return (
    <div className="grid h-full min-h-0 grid-cols-1 items-center gap-6 px-5 pb-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col justify-center">
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {t.heroKicker}
        </span>
        <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-violet-950 sm:text-5xl xl:text-6xl">
          {t.heroTitle}
        </h1>
        <p className="mt-4 max-w-md text-pretty text-base text-violet-700/80 sm:text-lg">
          {t.heroSubtitle}
        </p>
        <div className="mt-6">
          <Button
            size="lg"
            onClick={() => onSelect(rhymes[0])}
            className="group rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 text-base shadow-lg shadow-violet-500/30 hover:from-violet-600 hover:to-fuchsia-600"
          >
            {t.heroCta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="flex min-h-0 flex-col">
        <p className="mb-3 text-sm font-semibold text-violet-800">{t.featured}</p>
        <div className="min-h-0 overflow-y-auto pr-1">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {rhymes.map((rhyme) => (
              <button
                key={rhyme.id}
                type="button"
                onClick={() => onSelect(rhyme)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-violet-50">
                  <Image
                    src={rhyme.cover || "/placeholder.svg"}
                    alt={`Illustration for ${rhyme.title}`}
                    fill
                    sizes="(max-width: 640px) 45vw, 180px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-0.5 p-2.5">
                  <span className="line-clamp-1 text-xs font-bold text-violet-950">
                    {rhyme.title}
                  </span>
                  <span className="flex items-center justify-between text-[11px] text-violet-500">
                    <span className="truncate">
                      <span aria-hidden="true">{rhyme.flag}</span> {rhyme.origin}
                    </span>
                    <span className="font-semibold text-fuchsia-600">
                      ${rhyme.price.toFixed(2)}
                    </span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          <section aria-labelledby="testimonials-title" className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <h2 id="testimonials-title" className="text-sm font-semibold text-violet-800">
                Loved by little listeners
              </h2>
              <span className="text-[11px] text-violet-500">4.9 out of 5</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                ["Maya R.", "The sweetest bedtime ritual.", "Canada"],
                ["Daniel K.", "Beautiful songs from everywhere.", "Kenya"],
                ["Sofia L.", "My daughter asks for one more!", "Brazil"],
              ].map(([name, quote, location]) => (
                <figure key={name} className="rounded-xl border border-violet-100 bg-white/85 p-3 shadow-sm">
                  <div className="mb-1.5 flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-[11px] leading-relaxed text-violet-900">&quot;{quote}&quot;</blockquote>
                  <figcaption className="mt-1.5 text-[10px] font-semibold text-violet-500">{name} · {location}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
