import React, { useState } from "react";
import '../styles/table_nodes.css'
import Button from 'react-bootstrap/Button';

const Popup = ({ togglePopupC }) => {

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    cedula: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  
  const { firstName, lastName, cedula, email } = formValue;

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
  const handleSubmit = () => {
    if (firstName === '' || lastName === '' || cedula === '' || email === '') {
      alert('Por favor, llene todos los campos.')
      return
    } else if (cedula.length !== 10) {
      alert('La cedula debe contener 10 dígitos')
      return
    } else if (ValidateEmail(email)) {
      alert('El formato del correo electrónico no es válido.')
    } else if (ValidateString(firstName)) {
      alert('El nombre no puede contener símbolos especiales.')
    } else if (ValidateString(lastName)) {
      alert('El apellido no puede contener símbolos especiales.')
    } else {
      //Creo un objeto y lo agrego al json almacenado en LocalStorage
      const localStorageItem = JSON.parse(localStorage.getItem("datosUsuarios"));
      const lastID = localStorageItem.slice(-1)[0].id;
      const new_employee = {
        id: lastID + 1,
        firstName: firstName,
        lastName: lastName,
        cedula: cedula,
        email: email,
        estado: "No vacunado",
        tipo_vacuna: "No aplica",
        rol: "user",
        username: firstName.toLocaleLowerCase() + "_employee",
        password: "testkruger"
      }
      localStorageItem.push(new_employee)
      localStorage.setItem("datosUsuarios", JSON.stringify(localStorageItem))
      togglePopupC();
    }
  };

  return (
    <div className="popup-box-create">
      <div className="box-create">
        <div className='div-popup-create'>
          <h2 className='title-popup'>Crear Usuario</h2>
          <form className="form-create" onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='firstName' className='form-label'>Nombre</label>
              <input name='firstName' onChange={handleChange} type='text' id='firstName' className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label'>Apellido</label>
              <input name='lastName' onChange={handleChange} type='text' id='lastName' className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='cedula' className='form-label'>Cédula</label>
              <input pattern="[0-9]{10}" name='cedula' onChange={handleChange} type='number' id='cedula' className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Correo electrónico</label>
              <input name='email' onChange={handleChange} type='email' id='email' className='form-control' />
            </div>
            <div className='div-buttons-create'>
              <Button onClick={togglePopupC} className="button-cancelar-popup-update">Cancelar</Button>
              <Button onClick={() => {
                handleSubmit();
              }} className='button-enviar-popup-update'>Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;