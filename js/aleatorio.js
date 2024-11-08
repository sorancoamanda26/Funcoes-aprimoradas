const nomes = ["Amanda", "Lozangela", "Diogo", "Camila", "Carla", "Henrique", "Victória", "Larissa", "Nadir"];



export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);