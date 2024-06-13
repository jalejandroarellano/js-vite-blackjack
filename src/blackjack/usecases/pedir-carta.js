
/**
 * Solicita obtener una nueva carta de la baraja
 * @param { Array<String> } deck Es un arreglo de String
 * @returns { String } Devuelve la carta obtenida de la baraja
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}