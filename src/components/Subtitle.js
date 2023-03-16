import React from 'react';
import '../styles/subtitle.css'
import Button from 'react-bootstrap/Button';
import Create from '../pages/Create';

const Subtitle = ({ isOpenC, setIsOpenC, principal, secondary }) => {

    //Función que permite activar o desactivar la ventana popup
    const togglePopupC = () => {
        setIsOpenC(!isOpenC);
    }

    //No tuve tiempo de desarrollar la barra de búsqueda
    const handleChange = (e) => {
        console.log(e.target.value);
      };

    return (
        <div className='subtitle'>
            <div className='subtitle_p_s'>
                <h1
                    className='subtitle_principal'>{principal}
                </h1>
                <h6
                    className='subtitle_secondary'>{secondary}
                </h6>
            </div>
            <div className='search_side'>
                <input className="form-control inputBuscar" placeholder="Búsqueda por empleado" onChange={handleChange} />
                <Button onClick={function (event) { togglePopupC(); }} className="button-agregar">Agregar</Button>
                {isOpenC ?
                    <Create togglePopupC={togglePopupC}/> : null}
            </div>
        </div>
    );
}

export default Subtitle;