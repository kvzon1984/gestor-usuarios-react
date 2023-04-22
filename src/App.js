import {useState} from 'react';
import Card from "./components/Card"
import Container from "./components/Container"
import UserFrom from "./components/UserForm"


function App() {
  const [usuarios, setUsuarios] = useState([])

  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }

  return (
    <div style={{marginTop: 50}}>
      <Container>
        <Card>
          <div style={{ padding: 20}}>
            <UserFrom submit={submit}/>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(u => <li key={u.email}>{`${u.name} ${u.lastName} ${u.phone} ${u.email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>

  );
}

export default App;
