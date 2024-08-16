import "./Button.css"

type ButtonProps = {
  label: string
  onClick: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="button"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
} 