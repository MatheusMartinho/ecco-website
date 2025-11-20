'use client'

import type { ReactNode } from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "pt" | "en"

const translations = {
  pt: {
    nav: { work: "Portfólio", about: "Sobre", contact: "Contato" },
    hero: {
      tagline: "Fotografia de Moda e Editorial",
      scroll: "Role",
      leftAlt: "Perfil da modelo",
      rightAlt: "Ensaio editorial de moda",
    },
    gallery: { title: "Trabalhos Editoriais", altPrefix: "Trabalho de portfólio" },
    footer: {
      name: "Alessandra M Santos",
      role: "Produção de Alta-costura",
      location: "São Paulo, Brasil",
      email: "E-mail",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      credit: "Criado por Matheus Moura Martinho",
    },
    about: {
      heroTitle: "A ARTISTA",
      heroSubtitle: "Alessandra Santos — Narradora Visual",
      quote: "A fotografia não é só capturar um momento, é criar um sentimento.",
      paragraphs: [
        "Com mais de uma década de experiência na moda e no editorial, dedico minha vida à busca pela excelência visual. Meu trabalho reflete minha paixão por narrativa, textura e luz.",
        "Baseada em São Paulo, colaboro com marcas e publicações que valorizam autenticidade e estética sofisticada. Minha abordagem é pessoal, garantindo que cada projeto ressoe com uma voz e visão únicas.",
      ],
      stats: [
        { label: "Anos de carreira", value: "12+" },
        { label: "Ensaios editoriais", value: "150+" },
        { label: "Marcas globais", value: "45" },
      ],
      selectedClients: "Clientes selecionados",
      clients: ["VOGUE", "ELLE", "HARPER'S BAZAAR", "L'OFFICIEL", "MARIE CLAIRE"],
    },
    contact: {
      title: "Contato",
      emailLabel: "E-mail",
      emailValue: "contact@alessandrasantos.com",
      studioLabel: "Estúdio",
      studioAddress: ["Rua Oscar Freire, 1234", "Jardins, São Paulo", "Brasil"],
      socialsLabel: "Redes",
      socials: ["Instagram", "LinkedIn", "Behance"],
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "E-mail",
        emailPlaceholder: "Seu e-mail",
        subject: "Assunto",
        subjectPlaceholder: "Detalhes do projeto",
        message: "Mensagem",
        messagePlaceholder: "Conte sobre sua ideia...",
        submit: "Enviar mensagem",
      },
    },
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    hero: {
      tagline: "Couture & Editorial Photography",
      scroll: "Scroll",
      leftAlt: "Model side profile",
      rightAlt: "Fashion editorial shot",
    },
    gallery: { title: "Editorial Works", altPrefix: "Portfolio work" },
    footer: {
      name: "Alessandra M Santos",
      role: "Couture Production",
      location: "São Paulo, Brazil",
      email: "Email",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      credit: "Made by Matheus Moura Martinho",
    },
    about: {
      heroTitle: "THE ARTIST",
      heroSubtitle: "Alessandra Santos — Visual Storyteller",
      quote: `"Photography is not just about capturing a moment, it's about creating a feeling."`,
      paragraphs: [
        "With over a decade of experience in the fashion and editorial industry, I have dedicated my life to the pursuit of visual excellence. My work is a reflection of my passion for storytelling, texture, and light.",
        "Based in São Paulo, I collaborate with brands and publications that value authenticity and sophisticated aesthetics. My approach is deeply personal, ensuring that every project resonates with a unique voice and vision.",
      ],
      stats: [
        { label: "Years Active", value: "12+" },
        { label: "Editorial Shoots", value: "150+" },
        { label: "Global Brands", value: "45" },
      ],
      selectedClients: "Selected Clients",
      clients: ["VOGUE", "ELLE", "HARPER'S BAZAAR", "L'OFFICIEL", "MARIE CLAIRE"],
    },
    contact: {
      title: "Inquiries",
      emailLabel: "Email",
      emailValue: "contact@alessandrasantos.com",
      studioLabel: "Studio",
      studioAddress: ["Rua Oscar Freire, 1234", "Jardins, São Paulo", "Brazil"],
      socialsLabel: "Socials",
      socials: ["Instagram", "LinkedIn", "Behance"],
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "Your email",
        subject: "Subject",
        subjectPlaceholder: "Project details",
        message: "Message",
        messagePlaceholder: "Tell me about your vision...",
        submit: "Send Message",
      },
    },
  },
} as const

type Translation = (typeof translations)[Language]

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en"
    window.localStorage.setItem("language", language)
    document.cookie = `language=${language}; path=/; max-age=31536000`
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === "pt" ? "en" : "pt"))

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
