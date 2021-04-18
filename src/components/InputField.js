


function InputField({ label,type,name,placeholder,onchange}) {
    return (
        <div className="form-group">
          <label>{label}</label>
            <input type={type}
                placeholder={placeholder}
                name={name}
                className="form-content"
                onChange={onchange}
            />
        </div>
    )
}

export default InputField;