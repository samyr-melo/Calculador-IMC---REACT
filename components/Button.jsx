import "./button.css"

function Button({id, text, action}) {//desetruturação de props
  const handleAction = (e) => {
    action(e);
  }
    return <button id={id} onClick={handleAction}>
        {text}
        </button>
}

export default Button;
