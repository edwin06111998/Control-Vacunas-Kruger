import React from "react";
import '../styles/table_nodes.css'
import Button from 'react-bootstrap/Button';

const Popup = ({ id, firstName, cedula, togglePopupD }) => {

  const handleSubmit = (id) => {
    let items = JSON.parse(localStorage.getItem("datosUsuarios"));
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("datosUsuarios", JSON.stringify(items));
    if (items.length === 0) {
      localStorage.removeItem("item");
    }
  };

  return (
    <div className="popup-box-delete">
      <div className="box-delete">
        <div className='div-popup-delete'>
          <b className='title-popup'>¿Estás seguro?</b>
          <p className='subtitle-popup'>El usuario {firstName} con cédula {cedula} será eliminado de los registros.</p>
          <div className='div-buttons-delete'>
            <Button onClick={() => togglePopupD()} className="button-cancelar-popup">Cancelar</Button>
            <Button onClick={() => {
              handleSubmit(id);
              togglePopupD();
              }} className="button-eliminar-popup">Eliminar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;