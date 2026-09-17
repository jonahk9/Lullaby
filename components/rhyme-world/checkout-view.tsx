"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { ArrowLeft, CreditCard, CheckCircle2, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Rhyme, LanguageCode, translations } from "@/lib/rhymes"

function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim()
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4)
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

const fieldClass =
  "w-full rounded-xl border border-violet-200 bg-white px-3.5 py-2.5 text-sm text-violet-950 shadow-sm outline-none transition placeholder:text-violet-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-200"

const labelClass = "mb-1 block text-xs font-semibold text-violet-700"

export function CheckoutView({
  t,
  rhyme,
  onBack,
  onDone,
}: {
  t: (typeof translations)[LanguageCode]
  rhyme: Rhyme
  onBack: () => void
  onDone: () => void
}) {
  const [card, setCard] = useState("")
  const [expiry, setExpiry] = useState("")
  const [paid, setPaid] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setPaid(true)
  }

  if (paid) {
    return (
      <div className="flex h-full min-h-0 flex-col items-center justify-center px-5 pb-5 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="size-9" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-violet-950 sm:text-3xl">
          {t.success}
        </h2>
        <p className="mt-2 max-w-sm text-pretty text-sm text-violet-700/80">
          {t.successNote}
        </p>
        <Button
          onClick={onDone}
          size="lg"
          className="mt-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 hover:from-violet-600 hover:to-fuchsia-600"
        >
          {t.playAnother}
        </Button>
      </div>
    )
  }

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

      <div className="grid min-h-0 flex-1 grid-cols-1 content-center gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          <h2 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-violet-950">
            <CreditCard className="size-6 text-violet-500" aria-hidden="true" />
            {t.checkout}
          </h2>

          <div className="mt-4 space-y-3">
            <div>
              <label htmlFor="ck-email" className={labelClass}>
                {t.email}
              </label>
              <input id="ck-email" type="email" required placeholder="you@example.com" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="ck-name" className={labelClass}>
                {t.cardName}
              </label>
              <input id="ck-name" type="text" required placeholder="Jane Doe" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="ck-number" className={labelClass}>
                {t.cardNumber}
              </label>
              <input
                id="ck-number"
                inputMode="numeric"
                required
                placeholder="4242 4242 4242 4242"
                value={card}
                onChange={(e) => setCard(formatCardNumber(e.target.value))}
                className={fieldClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="ck-exp" className={labelClass}>
                  {t.expiry}
                </label>
                <input
                  id="ck-exp"
                  inputMode="numeric"
                  required
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="ck-cvc" className={labelClass}>
                  {t.cvc}
                </label>
                <input
                  id="ck-cvc"
                  inputMode="numeric"
                  required
                  maxLength={4}
                  placeholder="123"
                  className={fieldClass}
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-base shadow-lg shadow-violet-500/30 hover:from-violet-600 hover:to-fuchsia-600"
          >
            <Lock className="size-4" aria-hidden="true" />
            {t.payNow} · ${rhyme.price.toFixed(2)}
          </Button>
        </form>

        <div className="order-first lg:order-last">
          <div className="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm">
            <p className="mb-3 text-sm font-semibold text-violet-800">{t.orderSummary}</p>
            <div className="flex items-center gap-3">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-violet-50">
                <Image
                  src={rhyme.cover || "/placeholder.svg"}
                  alt={`Illustration for ${rhyme.title}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-bold text-violet-950">{rhyme.title}</p>
                <p className="text-xs text-violet-500">
                  <span aria-hidden="true">{rhyme.flag}</span> {rhyme.origin}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-violet-100 pt-3">
              <span className="text-sm font-semibold text-violet-700">{t.total}</span>
              <span className="text-xl font-extrabold text-violet-950">${rhyme.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
