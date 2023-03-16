import React from 'react';
import Delete from '../pages/Delete';
import Update from '../pages/Update';
import '../styles/table_nodes.css'
import '../styles/popup.css'

//UserList es un componente que recibe props del padre
const UserList = ({ id, setId, firstName, setFirstName, rol, setRol, username, setUsername, setEstado, cedula, setCedula, email, setEmail, setTipo_vacuna, isOpenD, setIsOpenD, isOpenU, setIsOpenU }) => {

    const dataUsuarios = JSON.parse(localStorage.getItem("datosUsuarios"));
    //let {firstName, estado, cedula, email } = user
    const togglePopupD = () => {
        setIsOpenD(!isOpenD);
    }

    const togglePopupU = () => {
        setIsOpenU(!isOpenU);
    }

    const setearInfo = (id, firstName, cedula, username) => {
        console.log("ID a configurar: " + id + firstName + cedula)
        setId(id);
        setUsername(username);
    }
    
    return (
        <table className='table_nodes'>
            <tbody>
                <tr>
                    <th className='th-id'>ID</th>
                    <th className='th-nombre'>Nombre y Apellido</th>
                    <th className='th-cedula'>Cédula</th>
                    <th className='th-estado'>Estado</th>
                    <th className='th-cedula'>Vacuna</th>
                    <th className='th-correo'>Correo Electrónico</th>
                    <th className='th-acciones'>Acciones</th>
                </tr>
                {dataUsuarios.map(user => (
                    <tr key={user.id}>
                        <td className='th-id'>{user.id}</td>
                        <td className='th-nombre'>{user.firstName}</td>
                        <td className='th-cedula'>{user.cedula}</td>
                        <td className='td-estado'>
                            <div className={user.estado === 'Vacunado' ? 'div_estado' : 'div_estado2'}>
                                {user.estado}
                            </div>
                        </td>
                        <td className='th-cedula'>{user.tipo_vacuna}</td>
                        <td className='th-correo'>{user.email}</td>
                        <td className='td-acciones'>
                            <div className='div-acciones'>
                                <h3 type="button" onClick={function (event) {
                                    togglePopupU();
                                    setearInfo(user.id, user.firstName, user.cedula, user.username);
                                }} className="texto-acciones-editar" title="Editar nodo">Editar</h3>
                                {isOpenU ?
                                    <Update id={id} username={username} togglePopupU={togglePopupU} /> : null}
                                <h3 type="button" onClick={() => {
                                    togglePopupD();
                                    setearInfo(user.id, user.firstName, user.cedula, user.username);
                                }} className="texto-acciones-eliminar" title="Eliminar nodo">Eliminar</h3>
                                {isOpenD ?
                                    <Delete id={id} firstName={firstName} cedula={cedula} togglePopupD={togglePopupD} /> : null}
                            </div>
                        </td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    );
}

export default UserList;