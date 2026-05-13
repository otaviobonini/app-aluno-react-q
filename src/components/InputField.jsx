export default function InputField({children,label, type='text', value, onChange, placeholder}){
    return(
        <div>
        <label>{label} {children}</label>
        <input type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}/>
        </div>
    )

}