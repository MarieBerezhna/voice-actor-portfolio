"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import en from "@/locales/en.json"
import uk from "@/locales/uk.json"
import es from "@/locales/es.json"

// Update the Locale type to include "es"
type Locale = "en" | "uk" | "es"
type Translations = typeof en

interface LanguageContextType {
  locale: Locale
  translations: Translations
  setLocale: (locale: Locale) => void
}

// Add Spanish to the locales record
const locales: Record<Locale, Translations> = { en, uk, es }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Get initial locale from localStorage or default to English
  const [locale, setLocaleState] = useState<Locale>("en")
  const [translations, setTranslations] = useState<Translations>(locales.en)

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && locales[savedLocale]) {
      setLocaleState(savedLocale)
      setTranslations(locales[savedLocale])
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem("locale", newLocale)
    setLocaleState(newLocale)
    setTranslations(locales[newLocale])
    document.documentElement.lang = newLocale
  }

  return <LanguageContext.Provider value={{ locale, translations, setLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}