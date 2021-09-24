type Props = {
  value: string
  onClick: (event: any) => void
  className?: string
}

const ToggleButton = ({ value, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={`button ${className ? className : ''}`}>
      {value}
    </button>
  )
}

export default ToggleButton
