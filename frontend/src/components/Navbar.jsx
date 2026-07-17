import Logo from "./Logo"

function Navbar() {
  return (
    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-8
      py-5
      flex
      items-center
      justify-between
      backdrop-blur-xl
      bg-white/40
    ">

      {/* Logo */}
      <Logo />


      {/* Links */}
      <div className="
        hidden
        md:flex
        gap-8
        text-gray-600
        font-medium
      ">
        <a href="#">Features</a>
        <a href="#">How it works</a>
        <a href="#">Tounsi AI 🇹🇳</a>
      </div>


      {/* Button */}
      <button className="
        px-6
        py-3
        rounded-full
        bg-orange-500
        text-white
        font-medium
        shadow-lg
        shadow-orange-500/20
        hover:scale-105
        transition
      ">
        Start Learning
      </button>


    </nav>
  )
}

export default Navbar