import { motion } from "framer-motion"
import Logo from "./Logo"


function LearningJourney() {

  const steps = [

    {
      icon:"📚",
      title:"Upload your courses",
      text:"Add your PDFs, lessons, and study materials."
    },

    {
      icon:"✦",
      title:"Understand with AI",
      text:"Ask questions and get explanations in your language."
    },

    {
      icon:"📝",
      title:"Practice smarter",
      text:"Generate quizzes, summaries, and flashcards."
    },

    {
      icon:"🎓",
      title:"Master your subjects",
      text:"Build confidence and improve every day."
    }

  ]


  return (

    <section className="
      min-h-screen
      bg-white
      px-6
      py-32
    ">


      <div className="
        max-w-5xl
        mx-auto
      ">


        {/* Title */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
            text-center
            mb-20
          "

        >

          <Logo showName={false}/>


          <h2 className="
            mt-6
            text-5xl
            font-semibold
            tracking-tight
          ">

            Your learning
            <br/>
            journey starts here.

          </h2>


          <p className="
            mt-5
            text-xl
            text-gray-500
          ">

            From your first question
            to complete understanding.

          </p>


        </motion.div>



        {/* Steps */}


        <div className="
          space-y-10
        ">


          {steps.map((step,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                x:-40
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              transition={{
                delay:index*0.15
              }}

              viewport={{
                once:true
              }}

              className="
                flex
                gap-6
                items-center
                bg-[#FCFAF7]
                rounded-3xl
                p-8
                border
                border-gray-100
              "

            >


              <div className="
                text-4xl
              ">
                {step.icon}
              </div>



              <div>

                <h3 className="
                  text-2xl
                  font-semibold
                ">
                  {step.title}
                </h3>


                <p className="
                  text-gray-500
                  mt-2
                  text-lg
                ">
                  {step.text}
                </p>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  )
}


export default LearningJourney