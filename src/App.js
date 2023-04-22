import { useState } from "react";

function App() {
  const [ form, setform ] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }



  return (
    <form>
      <input
        name='name'
        placeholder='Nombre'
        value={form.name}
        onChange={handleChange}
      />
      <input
        name='lastName'
        placeholder='Apellido'
        value={form.lastName}
        onChange={handleChange}
      />
      <input
        name='phone'
        placeholder='Teléfono'
        value={form.phone}
        onChange={handleChange}
      />
      <input
        name='email'
        placeholder='Correo'
        value={form.email}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
