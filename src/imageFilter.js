import React from 'react';
import alimentacion from './assets/images/alimentacion.svg';
import transporte from './assets/images/transporte.svg';
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import utilidades from './assets/images/utilidades.svg';
import { IconoTema } from './Components/UI'

export default (type) => {
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante"></IconoTema>,
        Salud: <IconoTema src={salud} alt="Salud"></IconoTema>,
        //Otros: <IconoTema src={otros} alt="Otros"></IconoTema>,
        Transporte: <IconoTema src={transporte} alt="Transporte"></IconoTema>,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades"></IconoTema>,
        Default: <IconoTema src={otros} alt="Otros"></IconoTema>
    };

    return Images[type] || Images['Default'];
}