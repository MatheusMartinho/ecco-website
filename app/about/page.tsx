'use client'

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { AnimatedText } from "@/components/animated-text"

export default function AboutPage() {
    const { t } = useLanguage()

    return (
        <main className="bg-background min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-muted/30" />
                    {/* Placeholder for a large background image if desired */}
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-6xl md:text-9xl font-serif tracking-tighter"
                    >
                        <AnimatedText id="about-hero-title" text={t.about.heroTitle} />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-6 text-xs md:text-sm uppercase tracking-[0.3em] font-light text-muted-foreground"
                    >
                        <AnimatedText id="about-hero-subtitle" text={t.about.heroSubtitle} />
                    </motion.p>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="aspect-[3/4] bg-muted relative overflow-hidden"
                    >
                        <img
                            src="https://i.imgur.com/6TgcMQ7.png"
                            alt="Alessandra Santos Portrait"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif italic">
                            <AnimatedText id="about-quote" text={t.about.quote} className="block" />
                        </h2>
                        <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
                            {t.about.paragraphs.map((paragraph, index) => (
                                <p key={index}>
                                    <AnimatedText id={`about-paragraph-${index}`} text={paragraph} className="block" />
                                </p>
                            ))}
                        </div>
                        <div className="pt-8">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                                alt="Signature"
                                className="h-12 opacity-50 invert dark:invert-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy / Stats */}
            <section className="py-24 bg-secondary/30">
                <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {t.about.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="space-y-2"
                            >
                                <h3 className="text-5xl md:text-7xl font-serif">{stat.value}</h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                    <AnimatedText id={`about-stat-${index}`} text={stat.label} />
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Clients */}
            <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.3em] mb-16 text-muted-foreground"
                >
                    <AnimatedText id="about-selected-clients" text={t.about.selectedClients} />
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
                    {/* Placeholder Logos - Text for now */}
                    {t.about.clients.map((client, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl md:text-2xl font-serif font-bold tracking-widest"
                        >
                            {client}
                        </motion.span>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
