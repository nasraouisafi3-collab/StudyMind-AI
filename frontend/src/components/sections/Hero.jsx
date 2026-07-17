import { motion } from "framer-motion"
import Glow from "../ui/Glow"
import { Button } from "../ui/button"


function Hero() {

  return (

    <section
      className="
      min-h-screen
      relative
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      pt-32
      bg-[#F6F2EB]
      "
    >

      <Glow />


      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1.2,
          ease:"easeOut"
        }}

        className="
        max-w-6xl
        w-full
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >


        {/* LEFT SIDE */}

        <div>


          {/* Animated Spark */}

          <motion.div

            animate={{
              scale:[1,1.08,1],
              rotate:[0,5,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity,
              ease:"easeInOut"
            }}

            className="
            text-5xl
            text-[#D97732]
            mb-6
            drop-shadow-lg
            "
          >
            ✦
          </motion.div>



          <h1
            className="
            text-6xl
            md:text-7xl
            font-semibold
            leading-tight
            tracking-tight
            text-[#1E293B]
            "
          >

            Learn without
            <br/>

            limits.

          </h1>



          <p
            className="
            mt-8
            text-xl
            text-gray-600
            leading-relaxed
            "
          >

            Your AI tutor that transforms
            courses into knowledge.

            <br/>

            English · Français · Tounsi 🇹🇳

          </p>



          <div
            className="
            mt-10
            flex
            gap-5
            flex-wrap
            "
          >

            <Button>
              Start Learning
            </Button>


            <button
              className="
              px-8
              py-4
              rounded-full
              border
              border-orange-300
              text-[#D97732]
              bg-white/60
              backdrop-blur
              "
            >
              See how it works
            </button>


          </div>


        </div>





        {/* RIGHT SIDE AI CARD */}


        <motion.div

          animate={{
            y:[0,-18,0],
            rotate:[0,1,-1,0]
          }}

          transition={{
            duration:6,
            repeat:Infinity,
            ease:"easeInOut"
          }}

          className="
          relative
          "
        >


          {/* Orange soft glow */}

          <div
          className="
          absolute
          inset-0
          bg-[#D97732]/20
          blur-3xl
          rounded-full
          "
          />



          <div
            className="
            relative
            rounded-[32px]
            bg-white/80
            backdrop-blur-xl
            border
            border-orange-100
            shadow-2xl
            p-6
            "
          >


            <div
              className="
              flex
              items-center
              gap-3
              "
            >

              <div
                className="
                text-2xl
                text-[#D97732]
                "
              >
                ✦
              </div>


              <div>

                <h3
                className="
                font-semibold
                text-[#1E293B]
                "
                >
                  StudyMind AI
                </h3>


                <p
                className="
                text-sm
                text-gray-500
                "
                >
                  Your personal tutor
                </p>


              </div>


            </div>




            <div
              className="
              mt-8
              rounded-2xl
              bg-[#F6F2EB]
              p-4
              "
            >

              <p
              className="
              text-sm
              text-gray-500
              "
              >
                📄 Economics.pdf
              </p>


              <p
              className="
              mt-3
              font-medium
              "
              >
                Explain inflation simply
              </p>


            </div>





            <div
              className="
              mt-5
              space-y-4
              "
            >


              <div
              className="
              bg-orange-50
              rounded-2xl
              p-4
              "
              >

                <p
                className="
                text-sm
                font-medium
                text-[#D97732]
                "
                >
                  AI Explanation
                </p>


                <p
                className="
                mt-2
                text-gray-700
                "
                >
                  Inflation means prices increase
                  over time.
                </p>


              </div>





              <div
              className="
              bg-[#788B3D]/10
              rounded-2xl
              p-4
              "
              >

                <p
                className="
                text-sm
                font-medium
                text-[#788B3D]
                "
                >
                  🇹🇳 Tounsi explanation
                </p>


                <p
                className="
                mt-2
                text-gray-700
                "
                >

                Ya3ni el 7aja twalli aghla
                w el flous techri a9al.

                </p>


              </div>


            </div>




            <div
            className="
            mt-6
            grid
            grid-cols-3
            gap-3
            "
            >

              <div className="bg-[#F6F2EB] rounded-xl p-3 text-center text-sm">
                📄 Summary
              </div>


              <div className="bg-[#F6F2EB] rounded-xl p-3 text-center text-sm">
                📝 Quiz
              </div>


              <div className="bg-[#F6F2EB] rounded-xl p-3 text-center text-sm">
                🗂 Cards
              </div>


            </div>


          </div>


        </motion.div>


      </motion.div>


    </section>

  )
}


export default Hero