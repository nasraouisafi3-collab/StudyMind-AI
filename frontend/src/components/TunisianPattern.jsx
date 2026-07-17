function TunisianPattern({ position="top-right" }) {

  return (

    <div
      className={`
        absolute
        ${position === "top-right" ? "top-10 right-10" : ""}
        ${position === "bottom-left" ? "bottom-10 left-10" : ""}
        opacity-20
        pointer-events-none
      `}
    >

      <div className="
        text-orange-400
        text-5xl
        tracking-widest
      ">

        ◇ ✦ ◇

      </div>


      <div className="
        mt-2
        text-[#168AAD]
        text-2xl
        tracking-[15px]
      ">

        ◇◇◇

      </div>


    </div>

  )

}


export default TunisianPattern