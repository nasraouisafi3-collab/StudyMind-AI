import Button from "../ui/CustomButton"

function Button({ children, ...props }) {
  return (
    <ShadcnButton {...props}>
      {children}
    </ShadcnButton>
  )
}

export default Button