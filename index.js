const catalogo = [
{
  codico: 1,
  titulo: 'Invocacao do mal',
  duracao: 147,
  atores: 'Vera Farmiga e Patrick Wilson',
  anoDoLancamento: 2013,
  emCartaz: false,
},
{
  codico: 2,
  titulo: 'Thor:Ragnarock',
  duracao: 149,
  atores: 'Chris Hemsworth, Tessa Thompson, Cate Blanchett',
  anoDoLancamento: 2017,
  emCartaz: true,   
}
];
console.log(catalogo);

////////
function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz){
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };
  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}
/////novoFilme(3, "abc", 122, "bababbabab", 2333, false)

///////////
function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1];
  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }
  console.log(filmeProcurado);
}
/////buscarFilme(2);

///////////
function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1];
  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }
  catalogo[codigo - 1].emCartaz = novoStatus;
  console.log("Filme alterado!");
}
//////alterarStatusEmCartaz(1)

//////////
const listMovies = (catalago) => {
  for(i = 0; i <catalago.length; i++){
   const filme = catalogo[i];
   console.log("--".repeat(12));
   console.log("Nome do filme: "+ filme.titulo);
   console.log("Ano do filme: " + filme.ano);
   console.log("Esta em cartaz: " + filme.emCartaz);
  };
};

///////listMovies(1,2);
