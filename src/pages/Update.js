import React, { useState } from "react";
import '../styles/table_nodes.css'
import Button from 'react-bootstrap/Button';

const Popup = ({ id, username, togglePopupU }) => {

  const [formValue, setFormValue] = useState({
    firstName: "",
    rol: "",
    email: "",
    cedula: ""
  });

  const { firstName, rol, email, cedula } = formValue;

  //Se crearon dos funciones basadas en RegEx para validar los inputs del usuario
  function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return false;
    } else {
      return true;
    }
  }
  function ValidateString(input) {
    var validRegex = /^[a-zA-Z]*$/;
    if (input.match(validRegex)) {
      return false;
    } else {
      return true;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (id) => {
    if (firstName === '' || rol === '' || cedula === '' || email === '') {
      alert('Por favor, llene todos los campos.')
      return
    } else if (cedula.length !== 10) {
      alert('La cedula debe contener 10 dígitos')
      return
    } else if (ValidateEmail(email)) {
      alert('El formato del correo electrónico no es válido.')
      return
    } else if (ValidateString(firstName)) {
      alert('El nombre no puede contener símbolos especiales.')
      return
    } else {
      let items = JSON.parse(localStorage.getItem("datosUsuarios"));
      var index = items.findIndex(std => std.username === username);
      let employee = items[index];
      items = items.filter((item) => item.id !== id);
      localStorage.setItem("datosUsuarios", JSON.stringify(items));
      if (items.length === 0) {
        localStorage.removeItem("item");
      }
      employee["firstName"] = firstName;
      employee["rol"] = rol;
      employee["cedula"] = cedula;
      employee["email"] = email;
      items.push(employee)
      localStorage.setItem("datosUsuarios", JSON.stringify(items))
      togglePopupU();
    };
  }

return (
  <div className="popup-box-update">
    <div className="box-update">
      <div className='div-popup-update'>
        <h2 className='title-popup'>Editar Usuario</h2>
        <form className="form-update" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>Nombre</label>
            <input name='firstName' onChange={handleChange} type='text' id='firstName' className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor='rol' className='form-label'>Rol</label>
            <input name='rol' onChange={handleChange} type='text' id='rol' className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Correo electrónico</label>
            <input name='email' onChange={handleChange} type='email' id='email' className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor='cedula' className='form-label'>Cédula</label>
            <input name='cedula' onChange={handleChange} type='text' id='cedula' className='form-control' />
          </div>
          <div className='div-buttons-update'>
            <Button onClick={togglePopupU} className="button-cancelar-popup-update">Cancelar</Button>
            <Button onClick={() => handleSubmit(id)} className='button-enviar-popup-update'>Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};


export default Popup;