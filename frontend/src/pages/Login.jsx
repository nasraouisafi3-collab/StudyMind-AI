import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import LanguageSelector from "@/components/LanguageSelector"


function Login() {

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#F6F2EB]
      px-6
      relative
      "
    >

      <div
        className="
        absolute
        top-6
        right-6
        "
      >
        <LanguageSelector />
      </div>


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
          duration:0.6
        }}

        className="w-full max-w-md"

      >


        <Card
          className="
          rounded-3xl
          border-none
          shadow-xl
          bg-white/80
          backdrop-blur-xl
          "
        >


          <CardContent
            className="p-8"
          >


            <div
              className="
              text-center
              mb-8
              "
            >

              <div
                className="
                text-5xl
                text-[#D97732]
                "
              >
                ✦
              </div>


              <h1
                className="
                text-3xl
                font-bold
                text-[#1E293B]
                "
              >
                StudyMind AI
              </h1>


              <p
                className="
                text-gray-500
                mt-2
                "
              >
                Welcome back to your learning journey
              </p>


            </div>



            <div
              className="
              space-y-5
              "
            >


              <Input
                placeholder="Email"
                type="email"
                className="
                rounded-xl
                h-12
                "
              />


              <Input
                placeholder="Password"
                type="password"
                className="
                rounded-xl
                h-12
                "
              />


              <div
                className="
                text-right
                "
              >

                <Link

                  to="/forgot-password"

                  className="
                  text-sm
                  text-[#D97732]
                  font-semibold
                  "

                >

                  Forgot password?

                </Link>

              </div>



              <Button

                className="
                w-full
                h-12
                rounded-xl
                bg-[#D97732]
                hover:bg-[#C25F1E]
                text-white
                text-lg
                "

              >

                Sign In

              </Button>


            </div>



            <div

              className="
              text-center
              mt-6
              text-sm
              text-gray-500
              "

            >

              Don't have an account?


              <Link

                to="/register"

                className="
                text-[#D97732]
                ml-2
                cursor-pointer
                font-semibold
                "

              >

                Create account

              </Link>


            </div>


          </CardContent>


        </Card>


      </motion.div>


    </div>

  )

}


export default Login