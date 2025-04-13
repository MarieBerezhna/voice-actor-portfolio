"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const { locale, setLocale, translations } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  // Update the handleLanguageChange function to accept the new locale
  const handleLanguageChange = (newLocale: "en" | "uk" | "es") => {
    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent border-purple-700 text-purple-300 hover:bg-purple-900/30 rounded-full"
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      {/* Add Spanish option to the dropdown menu */}
      <DropdownMenuContent align="end" className="bg-gray-800 border-purple-900">
        <DropdownMenuItem
          className={`${
            locale === "en" ? "bg-purple-900/50 text-purple-300" : "text-gray-300"
          } hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer py-2`}
          onClick={() => handleLanguageChange("en")}
        >
          {translations.language.en}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${
            locale === "uk" ? "bg-purple-900/50 text-purple-300" : "text-gray-300"
          } hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer py-2`}
          onClick={() => handleLanguageChange("uk")}
        >
          {translations.language.uk}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${
            locale === "es" ? "bg-purple-900/50 text-purple-300" : "text-gray-300"
          } hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer py-2`}
          onClick={() => handleLanguageChange("es")}
        >
          {translations.language.es}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
