import {
    fondoClaro,
    contenidoClaro, 
    TextoFondoClaro,
    fondoOscuro,
    contenidoOscuro,
    TextoFondoOscuro
} from './variables'

export const temaClaro = {
    body: fondoClaro,
    inside: contenidoClaro, 
    text: TextoFondoClaro,
    filter: ""
}

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro, 
    text: TextoFondoOscuro,
    filter: "invert(100%)"
}