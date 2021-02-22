
let peca = 'TORRE';


peca = peca.toLowerCase();
switch(peca){
    case 'rei': console.log('rei -> move em todas as direções, somente uma casa de cada vez');
        break;
    case 'dama'||'rainha': console.log('dama ou rainha -> move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
        break;
    case 'bispo': console.log('bispo -> diagonal');
        break;
    case 'cavalo': console.log('cavalo -> em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
        break;
    case 'torre': console.log('torre -> vertical ou horizontal, mas não pode pular outras peças.');
        break;
    case 'peao': console.log('peao -> uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
        break;
    default: console.log('erro');
}