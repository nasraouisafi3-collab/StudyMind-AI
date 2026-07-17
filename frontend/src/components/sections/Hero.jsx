import { motion } from "framer-motion"
import Logo from "../Logo"
import TunisianPattern from "../TunisianPattern"


function Hero() {

  return (

    <section className="
      min-h-screen
      relative
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      pt-24
      bg-[#FCFAF7]
    ">


      {/* Tunisian hidden pattern */}
      <TunisianPattern position="top-right"/>


      {/* Orange sunlight */}
      <div className="
        absolute
        top-[-250px]
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-orange-300/40
        blur-[160px]
      "/>


      {/* Blue Mediterranean glow */}
      <div className="
        absolute
        bottom-[-200px]
        right-[-100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#168AAD]/20
        blur-[120px]
      "/>




      <div className="
        relative
        max-w-6xl
        w-full
        text-center
      ">



        {/* Spark */}

        <motion.div

          initial={{
            opacity:0,
            scale:0.5
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.8
          }}

          className="
            flex
            justify-center
            mb-8
          "

        >

          <Logo showName={false}/>

        </motion.div>





        {/* Title */}

        <motion.h1

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}


          className="
            text-6xl
            md:text-8xl
            font-semibold
            tracking-tight
            leading-[1.05]
            text-gray-900
          "

        >

          Learn without limits
          
          <br/>

          with your

          <span className="
            text-orange-500
          ">
            {" "}AI tutor
          </span>


        </motion.h1>





        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.5
          }}

          className="
            mt-8
            text-xl
            text-gray-500
            max-w-2xl
            mx-auto
            leading-relaxed
          "

        >

          Transform your courses into knowledge.
          Understand lessons in English,
          Français and Tounsi 🇹🇳.

        </motion.p>





        {/* Buttons */}

        <div className="
          mt-10
          flex
          justify-center
          gap-4
          flex-wrap
        ">


          <button className="
            px-8
            py-4
            rounded-full
            bg-orange-500
            text-white
            font-medium
            shadow-xl
            shadow-orange-500/20
            hover:scale-105
            transition
          ">

            Start Learning

          </button>



          <button className="
            px-8
            py-4
            rounded-full
            border
            border-gray-200
            bg-white/70
            backdrop-blur-xl
            hover:scale-105
            transition
          ">

            See how it works

          </button>


        </div>





        {/* App preview floating card */}

        <motion.div

          initial={{
            opacity:0,
            y:80
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:0.8,
            duration:1
          }}


          className="
            mt-20
            mx-auto
            max-w-4xl
            rounded-[40px]
            bg-white
            shadow-2xl
            border
            border-gray-100
            p-6
          "

        >


          <div className="
            rounded-[30px]
            bg-[#FCFAF7]
            p-10
          ">


            <div className="
              text-left
              text-gray-400
              text-sm
              mb-5
            ">

              ✦ StudyMind AI Tutor

            </div>


            <div className="
              bg-white
              rounded-3xl
              p-6
              shadow-sm
              text-left
            ">

              <p className="
                text-gray-500
              ">

                Explain inflation simply

              </p>


              <div className="
                mt-4
                bg-orange-500
                text-white
                rounded-2xl
                p-4
              ">

                Inflation means prices increase
                over time.

                <br/><br/>

                🇹🇳 Ya3ni el 7aja twalli aghla
                w el flous techri a9al.

              </div>


            </div>


          </div>


        </motion.div>



      </div>


    </section>

  )

}


export default Hero