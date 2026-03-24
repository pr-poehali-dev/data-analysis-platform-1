import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/70a792fa-31b7-4a0c-8d7f-582a832df75a/files/fe55a9d7-09ac-460c-8630-c3b95d70781c.jpg"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  const isHero = id === 'hero'

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      {isHero && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <img
            src={HERO_IMAGE}
            alt="Гномы в древних копях"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
        </motion.div>
      )}
      <div className="relative z-10">
        {subtitle && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-stone-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-amber-400 bg-transparent border-amber-400 hover:bg-amber-400 hover:text-stone-950 transition-colors font-semibold tracking-wide"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
