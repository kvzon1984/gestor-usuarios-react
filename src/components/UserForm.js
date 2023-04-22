import Input from "./Input";
import Button from "./Button"
import useForm from "../hooks/useForm";

const UserFrom = ({submit}) => {
    const [form, handleChange, reset] = useForm({ 
        name: '',
        lastName: '',
        phone: '',
        email: ''
      })
      
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(form)
        reset()
    }  
    return(
        <form onSubmit={handleSubmit}>
            <Input label='Nombre' name='name' value={form.name} onChange={handleChange}/>
            <Input label='Apellido' name='lastName' value={form.lastName} onChange={handleChange}/>
            <Input label='Teléfono' name='phone' value={form.phone} onChange={handleChange}/>
            <Input label='Email' name='email' value={form.email} onChange={handleChange}/>
            <Button>Enviar</Button>
        </form>
    )
}

export default UserFrom