import React, { Fragment, useState } from 'react'
import NavBar from '../components/NavBar'
import { useLocation } from "react-router-dom";
import '../styles/user.css'
import profileImage from "../imagenes/profile1.jpeg"
import dataVacunas from "../data/tipo_vacunas.json"
import dataDosis from "../data/dosis.json"
import dataEstadoVacunacion from "../data/estado_vacunacion.json"
import Select from "react-dropdown-select";
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function User() {

    const [estado, setEstado] = useState("");
    const [tipo_vacuna, setTipoVacuna] = useState("");
    const [dosis, setDosis] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [startDateVacuna, setStartDateVacuna] = useState(new Date());
    const { state } = useLocation();
    const { username, firstName } = state;
    const [isOpen, setIsOpen] = useState(false);
    const datosUsuarios = JSON.parse(localStorage.getItem("datosUsuarios"));
    var index = datosUsuarios.findIndex(std => std.username === username);
    var json_user = datosUsuarios[index]

    const [formValue, setFormValue] = useState({
        contactNumber: "",
        direccion: "",
        birthday: "",
        estado: "",
        tipo_vacuna: "",
        fecha_vacuna: "",
        dosis: ""
    });

    const { contactNumber, direccion } = formValue;
    
    const handleChange = (event) => {
        console.log(event.target.value)
        const { name, value } = event.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
    const handleSubmit = (id) => {
        console.log("CN:" + contactNumber + "DIR: " + direccion)
        if (contactNumber === '' || direccion === '') {
            alert('Por favor, llene todos los campos.')
            return
        }else {
            let items = JSON.parse(localStorage.getItem("datosUsuarios"));
            var index = items.findIndex(std => std.username === username);
            let employee = items[index];
            items = items.filter((item) => item.id !== id);
            localStorage.setItem("datosUsuarios", JSON.stringify(items));
            if (items.length === 0) {
                localStorage.removeItem("item");
            }
            //Creo un objeto con la misma información del usuario, cambio las variables que se modificaron, luego lo agrego al LocalStorage
            employee["contactNumber"] = contactNumber;
            employee["direccion"] = direccion;
            employee["birthday"] = startDate;
            employee["estado"] = estado;
            employee["tipo_vacuna"] = tipo_vacuna;
            employee["fecha_vacuna"] = startDateVacuna;
            employee["dosis"] = dosis;
            items.push(employee)
            localStorage.setItem("datosUsuarios", JSON.stringify(items))
        };
    }

    return (
        <Fragment>
            <NavBar firstName={firstName} opcion="Cerrar Sesión"/>
            <div className='container_general'>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src={profileImage} alt="" />
                                </div>
                            </div>
                            <div style={{ height: "max-content" }} className="col-md-6">
                                <div className="profile-head">
                                    <h5>
                                        {json_user.firstName} {json_user.lastName}
                                    </h5>
                                    <h6>
                                        {json_user.cargo}
                                    </h6>
                                    <p className="proile-rating">Rendimiento : <span>8/10</span></p>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <h6 className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Acerca de</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>INFORMACIÓN GENERAL</p>
                                    <h6>Gerente de ventas</h6>
                                    <h6 >Asistente comercial</h6>
                                    <h6 >Miembro de Kruger</h6>
                                    <p>HABILIDADES</p>
                                    <h6 >Microsoft Power BI</h6>
                                    <h6 >SAP Bussiness</h6>
                                    <h6 >Microsoft Excel</h6>
                                    <h6 >PHP, .Net</h6>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row row_elements">
                                            <div className="col-md-6">
                                                <label>ID de usuario</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input value={json_user.id} name='id' type='text' id='id' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row row_elements">
                                            <div className="col-md-6">
                                                <label>Fecha de nacimiento</label>
                                            </div>
                                            <div className="col-md-6">
                                                <DatePicker className='datepicker' selected={startDate} onChange={(date) => {setStartDate(date)}} />
                                            </div>
                                        </div>
                                        <div className="row row_elements">
                                            <div className="col-md-6">
                                                <label>Correo electrónico</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input value={json_user.email} name='email' type='text' id='email' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row row_elements">
                                            <div className="col-md-6">
                                                <label>Teléfono</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input value={json_user.contactNumber} name='contactNumber' onChange={handleChange} type='text' id='contactNumber' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row row_elements">
                                            <div className="col-md-6">
                                                <label>Dirección domicilio</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input value={json_user.direccion} name='direccion' type='text' onChange={handleChange} id='direccion' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row row_elements">
                                            <div className="col-md-6">
                                                <label>Estado de vacunación</label>
                                            </div>
                                            <div className="col-md-6">
                                                <Select value={"userRole"} required={true} style={{ borderRadius: '5px / 5px' }} placeholder="Estado..." className="selector_estado" options={dataEstadoVacunacion} onChange={
                                                    (value) => {
                                                        console.log(value[0].label);
                                                        setEstado(value[0].label);
                                                        console.log(estado)
                                                    }
                                                } />
                                            </div>
                                        </div>
                                        {
                                            estado === "Vacunado" &&
                                            <div>
                                                <div className="row row_elements">
                                                    <div className="col-md-6">
                                                        <label>Vacunas</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Select style={{ borderRadius: '5px / 5px' }} placeholder="Tipo de vacuna..." className="selector_vacuna" options={dataVacunas} onChange={
                                                            (values) => {
                                                                setTipoVacuna(values[0].label)
                                                                console.log(values)
                                                            }
                                                        } />
                                                    </div>
                                                </div>
                                                <div className="row row_elements">
                                                    <div className="col-md-6">
                                                        <label>Fecha de vacunación</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <DatePicker className='datepicker' selected={startDateVacuna} onChange={(date) => setStartDateVacuna(date)} />
                                                    </div>
                                                </div>
                                                <div className="row row_elements">
                                                    <div className="col-md-6">
                                                        <label>Número de dosis</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Select style={{ borderRadius: '5px / 5px' }} placeholder="Número de dosis..." className="selector_dosis" options={dataDosis} onChange={
                                                            (values) => {
                                                                setDosis(values[0].label)
                                                                console.log(values)
                                                            }
                                                        } />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {
                                            estado === "No vacunado" &&
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='div_guardar_boton'>
                        <Button onClick={() => {
                            setIsOpen(true);
                            handleSubmit(json_user.id);
                        }} className="button-guardar">Guardar</Button>
                    </div>
                    {isOpen && (
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                            <div>Los cambios han sido guardados.</div>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default User;
