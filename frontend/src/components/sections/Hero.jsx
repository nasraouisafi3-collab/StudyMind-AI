import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, BrainCircuit, FileText, BookOpen } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-60 right-0 h-[700px] w-[700px] rounded-full bg-orange-300/20 blur-[120px]" />

        <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-orange-200/20 blur-[120px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Navbar */}

        <nav className="flex h-24 items-center justify-between">

          <div className="flex items-center gap-4">

            <span className="text-5xl text-[#FF7A1A]">
              ✦
            </span>

            <h1 className="text-4xl font-black">

              <span className="text-[#0F172A]">

                StudyMind

              </span>

              <span className="text-[#FF7A1A]">

                AI

              </span>

            </h1>

          </div>

          <div className="hidden gap-12 text-lg font-medium text-gray-600 lg:flex">

            <a className="hover:text-[#FF7A1A]" href="#">Features</a>

            <a className="hover:text-[#FF7A1A]" href="#">About</a>

            <a className="hover:text-[#FF7A1A]" href="#">Contact</a>

          </div>

        </nav>

        {/* Hero */}

        <div className="grid min-h-[82vh] items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-[#FF7A1A]">

              🇹🇳 Built for Tunisian Students

            </div>

            <h2 className="mt-8 text-6xl font-black leading-tight text-[#111827] lg:text-7xl">

              Learn

              <br />

              <span className="text-[#FF7A1A]">

                Smarter.

              </span>

            </h2>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-500">

              Your AI study companion that summarizes lessons,
              answers questions, creates quizzes and flashcards,
              and helps every Tunisian student learn faster.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="flex items-center gap-3 rounded-2xl bg-[#FF7A1A] px-8 py-5 text-lg font-semibold text-white shadow-xl transition hover:scale-105">

                Get Started

                <ArrowRight size={20} />

              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-8 py-5 text-lg font-semibold transition hover:shadow-lg">

                <Play size={18} />

                Watch Demo

              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="relative">

              <div className="rounded-[38px] border border-orange-100 bg-white p-8 shadow-[0_40px_80px_rgba(0,0,0,.08)]">

                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-400">

                      AI Workspace

                    </p>

                    <h3 className="mt-2 text-3xl font-black">

                      Ready to Study?

                    </h3>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">

                    <Sparkles />

                  </div>

                </div>

                <div className="space-y-5">

                  <div className="flex items-center gap-5 rounded-2xl border border-gray-100 p-6 transition hover:shadow-md">

                    <div className="rounded-xl bg-orange-100 p-3">

                      <FileText className="text-[#FF7A1A]" />

                    </div>

                    <div>

                      <h4 className="font-bold">

                        AI Summaries

                      </h4>

                      <p className="text-gray-500">

                        Upload your PDF

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-5 rounded-2xl border border-gray-100 p-6 transition hover:shadow-md">

                    <div className="rounded-xl bg-orange-100 p-3">

                      <BrainCircuit className="text-[#FF7A1A]" />

                    </div>

                    <div>

                      <h4 className="font-bold">

                        AI Tutor

                      </h4>

                      <p className="text-gray-500">

                        Ask anything

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-5 rounded-2xl border border-gray-100 p-6 transition hover:shadow-md">

                    <div className="rounded-xl bg-orange-100 p-3">

                      <BookOpen className="text-[#FF7A1A]" />

                    </div>

                    <div>

                      <h4 className="font-bold">

                        Flashcards & Quizzes

                      </h4>

                      <p className="text-gray-500">

                        Learn faster

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-orange-300/20 blur-3xl" />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Hero