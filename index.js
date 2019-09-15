export const getAvocados = () => {
    const avocadosQuantity = Math.floor(Math.random() * 10);
    return [...new Array(avocadosQuantity)].map(e => '🥑').join('');
}