function Button({ children }) {

  return (
    <button
      className="
      px-8
      py-4
      rounded-full
      bg-[#D97732]
      text-white
      font-medium
      shadow-xl
      shadow-orange-900/20
      hover:scale-105
      transition
      duration-300
      "
    >
      {children}
    </button>
  )
}

export default Button