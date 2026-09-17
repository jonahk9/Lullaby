"use client"

import Image from "next/image"
import { ArrowLeft, MapPin, Quote, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Rhyme, LanguageCode, translations } from "@/lib/rhymes"

export function ProductView({
  t,
  rhyme,
  onBack,
  onBuy,
}: {
  t: (typeof translations)[LanguageCode]
  rhyme: Rhyme
  onBack: () => void
  onBuy: () => void
}) {
  return (
    <div className="flex h-full min-h-0 flex-col px-5 pb-5 sm:px-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-3 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-violet-600 transition hover:text-violet-800"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t.back}
      </button>

      <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-10">
        <div className="relative mx-auto aspect-square w-full max-w-[min(42vh,26rem)] overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-xl shadow-violet-500/10">
          <Image
            src={rhyme.cover || "/placeholder.svg"}
            alt={`Illustration for ${rhyme.title}`}
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            <MapPin className="size-3.5" aria-hidden="true" />
            {t.origin}: <span aria-hidden="true">{rhyme.flag}</span> {rhyme.origin}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-violet-950 sm:text-4xl">
            {rhyme.title}
          </h2>

          <blockquote className="mt-4 flex gap-2 border-l-2 border-fuchsia-300 pl-3 text-pretty text-sm italic text-violet-700/90">
            <Quote className="mt-0.5 size-4 shrink-0 text-fuchsia-400" aria-hidden="true" />
            <span>{rhyme.firstLine}</span>
          </blockquote>

          <p className="mt-4 max-w-md text-pretty text-sm text-violet-700/80 sm:text-base">
            {rhyme.blurb}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-violet-400">
                {t.total}
              </span>
              <span className="text-3xl font-extrabold text-violet-950">
                ${rhyme.price.toFixed(2)}
              </span>
            </div>
            <Button
              size="lg"
              onClick={onBuy}
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 text-base shadow-lg shadow-violet-500/30 hover:from-violet-600 hover:to-fuchsia-600"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              {t.buyNow}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
