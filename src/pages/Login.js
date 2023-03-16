import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { MDBInput } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import logo from '../imagenes/logo.png';
import '../styles/login.css'

const Login = () => {

    const [navigate_admin, setNavigate_admin] = useState(false);
    const [navigate_employee, setNavigate_employee] = useState(false);
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [firstName, setFirstName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //Cargo en una variable el objeto almacenado en LocalStorage
        const datosUsuarios = JSON.parse(localStorage.getItem("datosUsuarios"));
        const account_admin = datosUsuarios.find((user) => (user.username === username && user.rol === "admin"));
        const account_employee = datosUsuarios.find((user) => (user.username === username && user.rol === "user"));

        if (account_admin && account_admin.password === password) {
            localStorage.setItem("authenticated", true);
            setNavigate_admin(true);
        } else if (account_employee && account_employee.password === password) {
            console.log("Correct User")
            localStorage.setItem("authenticated", true);
            setusername(account_employee.username)
            setFirstName(account_employee.firstName)
            setNavigate_employee(true);
        }
        else {
            console.log("Contraseña incorrecta");
        };
    }

    if (navigate_admin) {
        return <Navigate to="/admin" state={{
            firstName
        }} />;
    } else if (navigate_employee) {
        //Le paso props a la ventana de Usuario
        return <Navigate to="/user" state={{
            username, firstName
        }} />;
    }

    return (
        <div className='div-background'>
            <div className='div-container'>
                <div id="gradient-custom-2-id" className="gradient-custom-2">
                    <div className="div-text-login">
                        <h4 className="mb-4 titulo-login-izquierdo">Inventario de vacunación de empleados</h4>
                        <p className="medium mb-0 subtitulo-login-izquierdo">Registro del inventario del estado de vacunación de los empleados de Edwin Kruger. A continuación, ingrese con las siguientes credenciales:
                            <br />
                            <br />
                            Administrador:
                            <br />
                            Usuario: edwin06111998_admin
                            <br />
                            Contraseña: testkruger
                            <br />
                            <br />
                            Empleado:
                            <br />
                            Usuario: edwin06111998_employee
                            <br />
                            Contraseña: testkruger
                        </p>
                    </div>
                </div>

                <div className="div-login">
                    <div className="text-center">
                        <img src={logo} alt="logo" width={"185"} />
                    </div>
                    <div className='login-right-side'>
                        <h4 className="subtitle-bold">Iniciar sesión</h4>
                        <form className='text-fields' onSubmit={handleSubmit}>
                            <p className="text-muted">Nombre de usuario</p>
                            <MDBInput style={{ marginTop: -10 }} wrapperClass='mb-4' id='form1' value={username} onChange={(e) => { setusername(e.target.value); console.log(e.target.value) }} type='text' />
                            <p className="text-muted">Contraseña</p>
                            <MDBInput style={{ marginTop: -10 }} wrapperClass='mb-4' id='form2' onChange={(e) => { setpassword(e.target.value); console.log(e.target.value) }} type='password' />
                        </form>
                        <div className="text-left">
                            <Button style={{ borderColor: 'Background' }} type="submit" onClick={handleSubmit} className="gradient-custom-2">Iniciar sesión</Button>
                            <a className="text-muted" href="#!">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="div-right-side-final">
                            <p className="mb-0">¿No tienes cuenta?</p>
                            <a style={{ marginLeft: '3%' }} className="text-muted" href="#!">Registrarse</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
