import "./Input.css"

type InputProps = {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {

  return (
    <div className="input">
      <div className="input-header">
        <label>{props.placeholder}</label>
      </div>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}