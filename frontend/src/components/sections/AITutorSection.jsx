import { motion } from "framer-motion"
import Logo from "../Logo"
import TunisianPattern from "../TunisianPattern"


function AITutorSection() {

  return (

    <section className="
      relative
      overflow-hidden
      min-h-screen
      bg-[#FCFAF7]
      flex
      items-center
      justify-center
      px-6
      py-32
    ">

      {/* Tunisian detail */}
      <TunisianPattern position="top-right"/>


      {/* Orange Mediterranean glow */}
      <div className="
        absolute
        left-0
        top-40
        w-80
        h-80
        bg-orange-300
        rounded-full
        blur-3xl
        opacity-20
      "/>



      <div className="
        max-w-6xl
        w-full
        grid
        md:grid-cols-2
        gap-20
        items-center
      ">


        {/* LEFT */}

        <motion.div

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

          viewport={{
            once:true
          }}

        >

          <Logo showName={false}/>


          <h2 className="
            mt-8
            text-5xl
            md:text-6xl
            font-semibold
            tracking-tight
            text-gray-900
          ">

            Your AI tutor
            <br/>
            for every subject.

          </h2>


          <p className="
            mt-6
            text-xl
            text-gray-500
            leading-relaxed
          ">

            From economics to languages,
            technology and science.

            StudyMind adapts to the way
            you understand.

          </p>



          <div className="
            flex
            flex-wrap
            gap-3
            mt-8
          ">


            <span className="
              px-4
              py-2
              rounded-full
              bg-orange-100
              text-orange-600
              font-medium
            ">
              🇬🇧 English
            </span>



            <span className="
              px-4
              py-2
              rounded-full
              bg-blue-50
              text-[#168AAD]
              font-medium
            ">
              🇫🇷 Français
            </span>



            <span className="
              px-4
              py-2
              rounded-full
              bg-orange-500
              text-white
              font-medium
            ">
              🇹🇳 Tounsi
            </span>


          </div>


        </motion.div>





        {/* AI CARD */}

        <motion.div

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          viewport={{
            once:true
          }}

          className="
            bg-white
            rounded-[32px]
            p-8
            shadow-xl
            border
            border-gray-100
          "

        >


          <div className="
            flex
            items-center
            gap-3
            mb-8
          ">

            <Logo showName={false}/>

            <span className="
              font-semibold
            ">
              StudyMind Tutor
            </span>

          </div>




          {/* Question */}

          <div className="
            bg-gray-100
            rounded-2xl
            p-5
            mb-5
          ">

            Explain inflation simply

          </div>





          {/* English answer */}

          <div className="
            bg-orange-500
            text-white
            rounded-2xl
            p-5
            leading-relaxed
            mb-5
          ">


            Inflation means prices increase
            over time, so your money buys
            fewer things.


            <br/><br/>


            Example:

            A sandwich that costs 5 DT
            can become 6 DT later.


          </div>





          {/* Tounsi request */}

          <div className="
            bg-[#FCFAF7]
            border
            border-orange-200
            rounded-2xl
            p-5
            mb-5
          ">

            Fassrheli b Tounsi 🇹🇳

          </div>





          {/* Tounsi answer */}

          <div className="
            bg-[#168AAD]
            text-white
            rounded-2xl
            p-5
            leading-relaxed
          ">


            Ya3ni el flous ma3adech
            techri nafs el 7aja kif 9bal.


            <br/><br/>


            Mthalan sandwich kan b 5 DT
            w ba3d walla b 6 DT.


            <br/><br/>


            Hedha howa inflation.


          </div>



        </motion.div>


      </div>


    </section>

  )

}


export default AITutorSection