import styles from "./Button.module.css";

const Button = ({variant,disabled,buttonType,children}) => {
  return <button className={`text-white cursor-pointer p-5 m-10 rounded-lg 
    ${variant === "primary" ? "bg-blue-500" :""}
    ${variant === "warning" ? "bg-orange-500" :""}
    ${variant === "error" ? "bg-red-500" :""}
    ${variant === "success" ? "bg-green-500" :""}
    ${(buttonType === "outline" && variant==="primary") ? "border border-blue-500 text-blue-500 " :" "}
    ${disabled ? "bg-gray-400 text-black cursor-not-allowed border-none"  :""}

    `
  }>
    {children}
  </button>
}

export default Button