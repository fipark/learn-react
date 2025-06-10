interface ButtonProps {
  children: string
  onClick:(event: React.MouseEvent)=> void
  color?: string
  textColor?: string
}


function Button({children,onClick:handleClick,color, textColor}: ButtonProps){
  return (
    <button type="button" onClick={ handleClick } style={{backgroundColor:color, color: textColor}} className="rounded-button">{children}</button>
  )
}

export default Button