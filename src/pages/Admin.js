import React, { Fragment, useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subtitle from '../components/Subtitle'
import UserList from '../components/UserList'
import { Navigate } from "react-router-dom";
import '../styles/app.css'
import '../styles/popup.css'
import '../styles/table_nodes.css'

function Admin() {
  //El hook useState es utilizado para crear variables de estado, quiere decir que su valor es dinámico, que este puede cambiar en el tiempo y eso requiere una re-renderización del componente donde se utiliza
  const [user, setUser] = useState([])
  const [users] = useState([])
  const [isOpenD, setIsOpenD] = useState(false);
  const [isOpenU, setIsOpenU] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const [id, setId] = useState([])
  const [username, setUsername] = useState([])
  const [firstName, setFirstName] = useState([])
  const [estado, setEstado] = useState([])
  const [cedula, setCedula] = useState([])
  const [rol, setRol] = useState([])
  const [email, setEmail] = useState([])
  const [tipo_vacuna, setTipo_vacuna] = useState([])
  const [setListUpdated] = useState(false)
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (authenticated === null) return null;

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <Fragment> {/* Se recomienda usar Fragment en lugar de Div, porque Fragment no se renderiza, no aplica CSS por defecto  */}
        <NavBar firstName="Portal de administrador" opcion="Cerrar Sesión" />
        <Subtitle isOpenC={isOpenC} setIsOpenC={setIsOpenC} principal='Control de vacunas' secondary='Sistema de control de vacunas para empleados de Kruger' />
        <div className='container-table'>
          <UserList id={id} setId={setId} username={username} setUsername={setUsername} firstName={firstName} setFirstName={setFirstName} rol={rol} setRol={setRol} estado={estado} setEstado={setEstado} cedula={cedula} setCedula={setCedula} email={email} setEmail={setEmail} tipo_vacuna={tipo_vacuna} setTipo_vacuna={setTipo_vacuna} user={user} setUser={setUser} users={users} setListUpdated={setListUpdated} isOpenD={isOpenD} setIsOpenD={setIsOpenD} isOpenU={isOpenU} setIsOpenU={setIsOpenU} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Admin;
