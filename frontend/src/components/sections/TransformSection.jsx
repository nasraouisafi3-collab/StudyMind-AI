import { motion } from "framer-motion"


function TransformSection() {

  return (
    <section className="
      min-h-screen
      bg-[#FCFAF7]
      flex
      items-center
      justify-center
      px-6
      py-32
    ">

      <div className="
        max-w-6xl
        w-full
      ">


        <motion.div

          initial={{
            opacity:0,
            y:50
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

          className="text-center"
        >

          <h2 className="
            text-5xl
            md:text-6xl
            font-semibold
            text-gray-900
            tracking-tight
          ">

            From courses
            <br />

            to
            <span className="text-orange-500">
              {" "}knowledge
            </span>

          </h2>


          <p className="
            mt-6
            text-xl
            text-gray-500
            max-w-2xl
            mx-auto
          ">

            Upload your course material and let
            StudyMind transform it into a smarter
            learning experience.

          </p>


        </motion.div>



        <div className="
          mt-20
          grid
          md:grid-cols-4
          gap-6
        ">


          {[
            {
              icon:"📄",
              title:"Your Courses",
              text:"Upload PDFs and notes"
            },

            {
              icon:"🧠",
              title:"AI Summary",
              text:"Understand faster"
            },

            {
              icon:"🎯",
              title:"Smart Quiz",
              text:"Practice your knowledge"
            },

            {
              icon:"💬",
              title:"AI Tutor",
              text:"Ask anything"
            }

          ].map((item,index)=>(

            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index*0.15,
                duration:0.6
              }}

              viewport={{
                once:true
              }}

              className="
                bg-white/70
                backdrop-blur-xl
                rounded-3xl
                p-8
                border
                border-gray-100
                shadow-sm
                hover:-translate-y-2
                transition
              "
            >

              <div className="
                text-4xl
                mb-5
              ">
                {item.icon}
              </div>


              <h3 className="
                text-xl
                font-semibold
                text-gray-900
              ">
                {item.title}
              </h3>


              <p className="
                mt-3
                text-gray-500
              ">
                {item.text}
              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  )
}


export default TransformSection