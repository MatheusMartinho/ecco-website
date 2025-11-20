'use client'

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { AnimatedText } from "@/components/animated-text"

export default function ContactPage() {
    const { t } = useLanguage()

    return (
        <main className="bg-background min-h-screen flex flex-col">
            <Header />

            <section className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full flex flex-col justify-center">

                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 md:mb-32"
                >
                    <h1 className="text-6xl md:text-9xl font-serif tracking-tighter">
                        <AnimatedText id="contact-title" text={t.contact.title} />
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-4 space-y-12"
                    >
                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                <AnimatedText id="contact-email-label" text={t.contact.emailLabel} />
                            </h2>
                            <a href="mailto:contact@alessandrasantos.com" className="text-lg md:text-xl font-serif italic hover:text-accent transition-colors">
                                <AnimatedText id="contact-email-value" text={t.contact.emailValue} />
                            </a>
                        </div>

                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                <AnimatedText id="contact-studio-label" text={t.contact.studioLabel} />
                            </h2>
                            <p className="text-lg md:text-xl font-serif italic">
                                {t.contact.studioAddress.map((line, index) => (
                                    <span key={index} className="block">
                                        <AnimatedText id={`contact-studio-line-${index}`} text={line} />
                                    </span>
                                ))}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                <AnimatedText id="contact-socials-label" text={t.contact.socialsLabel} />
                            </h2>
                            <div className="flex flex-col gap-2">
                                {t.contact.socials.map((social) => (
                                    <a key={social} href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors w-fit">
                                        <AnimatedText id={`contact-social-${social}`} text={social} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:col-span-7 md:col-start-6"
                    >
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group">
                                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                        <AnimatedText id="contact-form-name" text={t.contact.form.name} />
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors"
                                        placeholder={t.contact.form.namePlaceholder}
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                        <AnimatedText id="contact-form-email" text={t.contact.form.email} />
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors"
                                        placeholder={t.contact.form.emailPlaceholder}
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label htmlFor="subject" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                    <AnimatedText id="contact-form-subject" text={t.contact.form.subject} />
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors"
                                    placeholder={t.contact.form.subjectPlaceholder}
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                    <AnimatedText id="contact-form-message" text={t.contact.form.message} />
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors resize-none"
                                    placeholder={t.contact.form.messagePlaceholder}
                                />
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="text-xs uppercase tracking-[0.3em] border border-foreground px-12 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
                                >
                                    <AnimatedText id="contact-form-submit" text={t.contact.form.submit} />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    )
}
