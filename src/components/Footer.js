import React from 'react';

const Footer = () => {
    return (
        //Se aplica un estilo interno para fojar el footer en la parte de abajo
            <footer className='text-center p-3' style={{ position: "absolute", bottom: 0, width: "100%", height: "3.5rem", backgroundColor: 'rgba(1,46,106,255)'}}>
                <a className='text-footer' href='https://github.com/edwin06111998?tab=repositories' style={{color: 'white'}}>
                    Todos los derechos reservados, Edwin Veloz, Ecuador
                </a>
            </footer>
    );
}

export default Footer;