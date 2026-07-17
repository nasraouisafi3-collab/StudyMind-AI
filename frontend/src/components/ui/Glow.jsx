function Glow() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Main orange sunlight */}
      <div
        className="
        absolute
        -top-72
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-[#C96A2B]/30
        blur-[160px]
        "
      />


      {/* Olive atmosphere */}
      <div
        className="
        absolute
        bottom-[-250px]
        left-[-150px]
        w-[600px]
        h-[600px]
        rounded-full
        bg-[#788B3D]/20
        blur-[150px]
        "
      />


      {/* Mediterranean light */}
      <div
        className="
        absolute
        top-[200px]
        right-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#3F8FA8]/10
        blur-[140px]
        "
      />

    </div>
  )
}

export default Glow