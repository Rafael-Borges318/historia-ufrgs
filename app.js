const EVENTOS = [
  {
    id: 'idade-media', ano: '476 - 1453', bloco: 'Antiguidade e Idade Média', titulo: 'Idade Média',
    resumo: 'Período de cerca de mil anos entre a queda do Império Romano do Ocidente (476) e a tomada de Constantinopla pelos turcos otomanos (1453).',
    pontos: ['Queda de Roma do Ocidente em 476 marca o início.', 'Cisma entre Igreja Oriental e Ocidental em 1054.', 'Cruzadas, ruína da sociedade feudal e Peste Negra.', 'Transição para a Idade Moderna: 1453, 1492 e 1517.'],
    imagem: null, video: null,
    links: [{ texto: 'Resumo - História do Mundo', url: 'https://www.historiadomundo.com.br/idade-media' }]
  },
  {
    id: 'reforma', ano: '1517', bloco: 'Idade Moderna', titulo: 'Reforma Protestante',
    resumo: 'Em 31 de outubro de 1517, o monge Martinho Lutero fixou as 95 teses em Wittenberg, criticando a venda de indulgências. Rompeu a unidade da Igreja Católica na Europa.',
    pontos: ['Lutero: a salvação vem da fé, com acesso direto à Bíblia.', 'Conflito aberto contra o vendedor de indulgências Johann Tetzel; papa Leão X.', 'Desdobramentos: calvinismo e anglicanismo.'],
    imagem: { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Pauwels_-_Luther_hammers_his_95_theses_to_the_door.jpg?width=700', legenda: 'Lutero fixa as 95 teses, pintura de Ferdinand Pauwels. Fonte: Wikimedia Commons.' },
    video: { id: 'pThrXiEgUl8', titulo: 'Reforma Protestante em 5 minutos - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/reforma-protestante/' }]
  },
  {
    id: 'contrarreforma', ano: '1545 - 1563', bloco: 'Idade Moderna', titulo: 'Contrarreforma e Concílio de Trento',
    resumo: 'Reação da Igreja Católica à Reforma. O Concílio de Trento, convocado pelo Papa Paulo III, reafirmou dogmas e criou instrumentos de controle.',
    pontos: ['Retomada do Tribunal do Santo Ofício (Inquisição).', 'Criação do Index Librorum Prohibitorum, lista de livros proibidos.', 'Companhia de Jesus, de Inácio de Loyola, levou a fé ao Novo Mundo.'],
    imagem: null,
    video: { id: '4eHP0WBvU_4', titulo: 'Reforma Protestante e Contrarreforma - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/contrarreforma/' }]
  },
  {
    id: 'colonizacao', ano: '1530 - 1580', bloco: 'Brasil Colônia', titulo: 'Capitanias Hereditárias e Governo-Geral',
    resumo: 'A colonização efetiva começou com as capitanias hereditárias, a partir de 1534, e a Coroa centralizou a administração com o Governo-Geral em 1548.',
    pontos: ['Donatários deviam povoar e defender as terras à própria custa.', 'A maioria fracassou. Prosperaram Pernambuco e São Vicente.', 'Pacto colonial: só se comerciava com Portugal.', 'Economia açucareira em engenhos, com mão de obra escravizada.'],
    imagem: null,
    video: { id: 'I8sRO8QlN4c', titulo: 'Capitanias Hereditárias e Brasil Colônia - Débora Aladim' },
    links: [{ texto: 'Resumo - Descomplica', url: 'https://descomplica.com.br/blog/capitanias-hereditarias-resumo/' }]
  },
  {
    id: 'uniao-iberica', ano: '1580 - 1640', bloco: 'Brasil Colônia', titulo: 'União Ibérica e invasões holandesas',
    resumo: 'Portugal e Espanha foram unificados sob a mesma Coroa. A consequência foi a invasão holandesa no Nordeste, especialmente em Pernambuco.',
    pontos: ['Depois da expulsão dos holandeses, eles passaram a concorrer no açúcar.', 'Isso causou a crise do açúcar.'],
    imagem: null,
    video: { id: 'tHFfCDiV6Zg', titulo: 'Ciclo do Açúcar e Economia Colonial - Débora Aladim' },
    links: []
  },
  {
    id: 'absolutismo', ano: 'Séculos 16 - 18', bloco: 'Idade Moderna', titulo: 'Absolutismo',
    resumo: 'Regime que concentra o poder executivo, legislativo e judiciário nas mãos do monarca. O símbolo é Luís XIV, o Rei Sol, da França.',
    pontos: ['Frase atribuída a Luís XIV: "O Estado sou eu".', 'Andava junto com o mercantilismo: metalismo, protecionismo e pacto colonial.', 'Colbert integrava o Conselho Real.'],
    imagem: null, video: null,
    links: [{ texto: 'Resumo - História do Mundo', url: 'https://www.historiadomundo.com.br/idade-moderna/o-absolutismo-e-o-rei.htm' }]
  },
  {
    id: 'ouro', ano: 'Século 18', bloco: 'Brasil Colônia', titulo: 'Ciclo do ouro e Inconfidência Mineira',
    resumo: 'O eixo econômico foi para o Sudeste, com a mineração em Minas Gerais. A Coroa criou controle fiscal rígido, com o quinto e a derrama.',
    pontos: ['Guerra dos Emboabas (1707-1709).', 'Inconfidência Mineira (1789) e Conjuração Baiana (1798).', 'Sociedade mais urbana, mas ainda baseada na escravidão.'],
    imagem: null, video: null,
    links: [{ texto: 'Resumo - Brasil Colônia', url: 'https://www.historiadomundo.com.br/idade-moderna/governo-geral-no-brasil-colonia.htm' }]
  },
  {
    id: 'iluminismo', ano: 'Século 18', bloco: 'Idade Moderna', titulo: 'Iluminismo',
    resumo: 'Movimento filosófico do Século das Luzes que defendia a razão, o progresso, o direito natural, o contrato social e a separação dos poderes.',
    pontos: ['John Locke: direitos naturais (vida, liberdade e propriedade).', 'Montesquieu: separação em Executivo, Legislativo e Judiciário.', 'Voltaire: crítico do clero e da prepotência dos poderosos.', 'Despotismo esclarecido: Frederico II, Catarina II e Marquês de Pombal.'],
    imagem: null,
    video: { id: 'w9njoN1Jt0o', titulo: 'Iluminismo: resumo em 5 minutos - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/iluminismo/' }]
  },
  {
    id: 'rev-industrial', ano: 'c. 1760', bloco: 'Idade Contemporânea', titulo: 'Revolução Industrial',
    resumo: 'Começou na Inglaterra, na segunda metade do século 18. A produção manual foi substituída pela produção mecanizada em fábricas.',
    pontos: ['Símbolo: máquina a vapor de James Watt.', 'Passagem da manufatura para a maquinofatura.', 'A indústria têxtil foi a pioneira.'],
    imagem: null,
    video: { id: 't6nJNv-pNr8', titulo: 'Resumo de História: Revolução Industrial - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/revolucao-industrial-inglesa/' }]
  },
  {
    id: 'indep-eua', ano: '1776', bloco: 'Idade Contemporânea', titulo: 'Independência dos Estados Unidos',
    resumo: 'Em 4 de julho de 1776, o Congresso Continental declarou a independência das Treze Colônias. A Inglaterra reconheceu pelo Tratado de Paris, em 1783.',
    pontos: ['Causas: leis e impostos, como a Lei do Selo (1765) e os atos Townshend.', 'Declaração inspirada em John Locke.', 'Apoio militar da França, Espanha e Holanda.'],
    imagem: null,
    video: { id: 'iu-Ge6qdcAY', titulo: 'As 13 Colônias inglesas e a colonização dos EUA - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/independencia-dos-estados-unidos/' }]
  },
  {
    id: 'rev-francesa', ano: '1789 - 1799', bloco: 'Idade Contemporânea', titulo: 'Revolução Francesa',
    resumo: 'Começou em 1789 com a convocação dos Estados Gerais. Em 14 de julho veio a Tomada da Bastilha e em 26 de agosto a Declaração dos Direitos do Homem e do Cidadão.',
    pontos: ['Lema: liberdade, igualdade e fraternidade.', '1791: monarquia constitucional. Depois, a República.', '1799: golpe do 18 Brumário leva Napoleão ao poder.'],
    imagem: { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Prise_de_la_Bastille.jpg?width=900', legenda: 'A tomada da Bastilha, 14 de julho de 1789, pintura de Jean-Pierre Houël. Fonte: Wikimedia Commons.' },
    video: { id: 'ceCcZooYDBo', titulo: 'Revolução Francesa: tudo que você precisa saber - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/revolucao-francesa/' }]
  },
  {
    id: 'chegada-corte', ano: '1808 - 1815', bloco: 'Brasil Império', titulo: 'Chegada da família real e fim da colônia',
    resumo: 'Com a invasão napoleônica de Portugal, a família real se transferiu para o Brasil em 1808. Em 1815, o Brasil foi elevado a Reino Unido e deixou de ser colônia.',
    pontos: ['O Rio de Janeiro virou capital do Império português.'],
    imagem: null,
    video: { id: 'RhMJRrj2JsM', titulo: 'A vinda da Corte em 1808 - Débora Aladim' },
    links: []
  },
  {
    id: 'independencia', ano: '1822', bloco: 'Brasil Império', titulo: 'Independência do Brasil e Primeiro Reinado',
    resumo: 'Dom Pedro I proclamou a independência em 7 de setembro de 1822. O Primeiro Reinado durou até a abdicação, em 1831.',
    pontos: ['Não foi pacífica: houve resistências armadas.', 'Constituição de 1824, outorgada, com Poder Moderador.', 'Confederação do Equador (1824), separatista, no Nordeste.'],
    imagem: { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pedro_Am%C3%A9rico_-_Independ%C3%AAncia_ou_Morte_-_Google_Art_Project.jpg?width=900', legenda: 'Independência ou Morte, Pedro Américo (1888). Fonte: Wikimedia Commons.' },
    video: { id: 'Fr9lurVLNyo', titulo: 'Independência do Brasil em 1822 - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/primeiro-reinado/' }]
  },
  {
    id: 'farroupilha', ano: '1835 - 1845', bloco: 'Brasil Império', titulo: 'Revolução Farroupilha',
    resumo: 'Guerra dos Farrapos no Rio Grande do Sul, a rebelião mais duradoura do Império. Começou em 20 de setembro de 1835, quando os rebeldes tomaram Porto Alegre.',
    pontos: ['Causas: imposto sobre o charque gaúcho e sobre o sal, e desejo de autonomia.', 'Bento Gonçalves foi o primeiro presidente da República Rio-Grandense.', 'Garibaldi comandou a marinha rebelde. Anita Garibaldi lutou nos combates.', 'República Juliana (1839), em Santa Catarina.', 'Fim: Paz de Ponche Verde, em 1º de março de 1845, negociada por Caxias.'],
    imagem: null,
    video: { id: 'S43ks2av5wc', titulo: 'Guerra dos Farrapos - Mariane Martins' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/guerra-dos-farrapos/' }]
  },
  {
    id: 'segundo-reinado', ano: '1840 - 1889', bloco: 'Brasil Império', titulo: 'Segundo Reinado e Lei Áurea',
    resumo: 'Governo de Dom Pedro II. O café virou a principal força econômica e atraiu imigrantes europeus. O período foi marcado pelo caminho gradual da abolição.',
    pontos: ['Lei Eusébio de Queirós (1850): proibiu o tráfico atlântico.', 'Lei do Ventre Livre (1871) e Lei dos Sexagenários (1885).', 'Lei Áurea (1888), assinada pela princesa Isabel em 13 de maio.'],
    imagem: { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lei_%C3%81urea_(Golden_Law).jpg?width=700', legenda: 'Lei Áurea, de 13 de maio de 1888. Fonte: Wikimedia Commons / Arquivo Nacional.' },
    video: { id: 'Nir4-ql0U6s', titulo: 'Resumo de História: Segundo Reinado - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/segundo-reinado/' }]
  },
  {
    id: 'paraguai', ano: '1864 - 1870', bloco: 'Brasil Império', titulo: 'Guerra do Paraguai',
    resumo: 'Maior conflito armado internacional da América Latina. A Tríplice Aliança (Brasil, Argentina e Uruguai) lutou contra o Paraguai de Solano López.',
    pontos: ['Em jogo: o controle da Bacia do Prata.', 'Solano López morreu em Cerro Corá, em março de 1870.', 'O Paraguai ficou devastado. O Brasil venceu, com alto custo.', 'Foi uma das causas da Proclamação da República.'],
    imagem: null,
    video: { id: 'oISI5OwOXXI', titulo: 'Guerra do Paraguai: tudo que você precisa saber - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/guerra-do-paraguai/' }]
  },
  {
    id: 'proclamacao', ano: '1889', bloco: 'Brasil República', titulo: 'Proclamação da República',
    resumo: 'Golpe político-militar de 15 de novembro de 1889. O marechal Deodoro da Fonseca depôs o gabinete imperial e proclamou a República.',
    pontos: ['Causas: Questão Religiosa, Questão Militar e Questão Escravista.', 'Fazendeiros viraram os "republicanos de última hora" depois da abolição sem indenização.', 'Fim da monarquia, separação entre Estado e Igreja, províncias viram estados.'],
    imagem: { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_by_Benedito_Calixto_1893.jpg?width=900', legenda: 'Proclamação da República, óleo sobre tela de Benedito Calixto (1893). Fonte: Wikimedia Commons.' },
    video: { id: 'qqSRyVsbjXE', titulo: 'Escravidão no Brasil e Proclamação da República - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/proclamacao-da-republica/' }]
  },
  {
    id: 'federalista', ano: '1893 - 1895', bloco: 'Brasil República', titulo: 'Revolução Federalista (maragatos e chimangos)',
    resumo: 'Guerra civil no Rio Grande do Sul entre federalistas (maragatos), de Silveira Martins, e republicanos (chimangos ou pica-paus), de Júlio de Castilhos.',
    pontos: ['Maragatos: estancieiros do interior, parlamentarismo, autonomia.', 'Chimangos: positivismo, presidencialismo, centralização no estado.', 'Estopim: eleição de Castilhos, em fevereiro de 1893, contestada.', 'Floriano Peixoto enviou tropas federais para apoiar Castilhos.'],
    imagem: null, video: null,
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/revolucao-federalista/' }]
  },  {
    id: 'primeira-guerra', ano: '1914 - 1918', bloco: 'Mundo no século 20', titulo: 'Primeira Guerra Mundial',
    resumo: 'Estopim: assassinato do arquiduque Francisco Ferdinando, em Sarajevo. Tríplice Entente contra as Potências Centrais. Terminou em 11 de novembro de 1918.',
    pontos: ['Guerra de movimento (1914) e guerra de trincheiras (1915-1918).', '1917: Rússia sai da guerra e EUA entram. O Brasil também entrou.', 'Tratado de Versalhes (1919) impôs duras punições à Alemanha.'],
    imagem: null,
    video: { id: 'Xi8Vj7aDcvg', titulo: 'Primeira Guerra Mundial: aula completa - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/primeira-guerra-mundial/' }]
  },
  {
    id: 'rev-russa', ano: '1917', bloco: 'Mundo no século 20', titulo: 'Revolução Russa',
    resumo: 'Em fevereiro de 1917 caiu o czar Nicolau II. Em outubro, os bolcheviques de Lênin tomaram o poder. O Tratado de Brest-Litovsk tirou a Rússia da guerra em 1918.',
    pontos: ['Seguiu-se uma guerra civil: o Exército Vermelho de Trotsky venceu o Exército Branco.'],
    imagem: null,
    video: { id: '9UWhEjeQs40', titulo: 'Tudo que você precisa saber sobre a Revolução Russa - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/revolucao-russa/' }]
  },
  {
    id: 'rev-1930', ano: '1930', bloco: 'Brasil República', titulo: 'Revolução de 1930 e fim do café com leite',
    resumo: 'A política do café com leite alternava presidentes paulistas e mineiros. Em 1930, o conflito entre as oligarquias e o assassinato de João Pessoa levaram Vargas ao poder.',
    pontos: ['Aliança Liberal: Vargas e João Pessoa contra Júlio Prestes.', 'Insurreição em 3 de outubro. Washington Luís foi deposto em 24 de outubro.', 'Início da Era Vargas (1930-1945).'],
    imagem: { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Get%C3%BAlio_Vargas_-_retrato_oficial_de_1930.JPG?width=600', legenda: 'Getúlio Vargas, retrato oficial de 1930. Fonte: Wikimedia Commons.' },
    video: { id: '6MTye0l8sNQ', titulo: 'Era Vargas: Governo Provisório - Brasil Escola' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/revolucao-de-1930/' }]
  },
  {
    id: 'rev-1932', ano: '1932', bloco: 'Brasil República', titulo: 'Revolução Constitucionalista',
    resumo: 'Levante de São Paulo contra o Governo Provisório, exigindo nova Constituição. Começou em 9 de julho e terminou com a rendição paulista em 2 de outubro.',
    pontos: ['Estopim: morte dos estudantes M.M.D.C. em 23 de maio de 1932.', 'São Paulo ficou isolado e foi derrotado militarmente.', 'Vitória política: Constituição de 1934.'],
    imagem: null, video: null,
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/revolucao-de-1932/' }]
  },
  {
    id: 'estado-novo', ano: '1937 - 1945', bloco: 'Brasil República', titulo: 'Estado Novo',
    resumo: 'Fase ditatorial de Vargas, iniciada com o golpe de 10 de novembro de 1937. Fechou o Congresso e outorgou a Constituição polaca. Terminou em 29 de outubro de 1945.',
    pontos: ['Era Vargas: Provisório (1930-34), Constitucional (1934-37), Estado Novo (1937-45).', 'A Constituição democrática veio em 1946, não em 1945.'],
    imagem: null,
    video: { id: 'TiJBt5RrA-E', titulo: 'Era Vargas: resumo - Descomplica' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/era-vargas/' }]
  },
  {
    id: 'segunda-guerra', ano: '1939 - 1945', bloco: 'Mundo no século 20', titulo: 'Segunda Guerra Mundial',
    resumo: 'Começou com a invasão da Polônia pela Alemanha, em setembro de 1939. Marcada pelo Holocausto e pelas bombas atômicas em Hiroshima e Nagasaki.',
    pontos: ['Pearl Harbor (dezembro de 1941) levou os EUA à guerra.', 'Cerca de seis milhões de judeus foram mortos no Holocausto.', 'Terminou oficialmente em 2 de setembro de 1945. Criou-se a ONU.'],
    imagem: null,
    video: { id: '75eeykQFbdU', titulo: 'Resumo de História: 2ª Guerra Mundial - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/segunda-guerra-mundial/' }]
  },
  {
    id: 'populismo', ano: '1945 - 1964', bloco: 'Brasil República', titulo: 'República Populista',
    resumo: 'Período democrático entre o fim do Estado Novo e o golpe de 1964. Jânio Quadros renunciou em 1961 e a posse de Jango gerou grave crise.',
    pontos: ['Parlamentarismo em setembro de 1961, com Tancredo Neves como primeiro-ministro.', 'Em 1963, Jango recuperou os plenos poderes e propôs as Reformas de Base.'],
    imagem: null, video: null,
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/republica-populista/' }]
  },
  {
    id: 'guerra-fria', ano: '1947 - 1991', bloco: 'Mundo no século 20', titulo: 'Guerra Fria',
    resumo: 'Tensão entre EUA e URSS, sem combate direto em larga escala. Foi de 1947, com a Doutrina Truman, até a dissolução da URSS, em 1991.',
    pontos: ['Plano Marshall (1948), OTAN (1949) e Pacto de Varsóvia (1955).', 'Muro de Berlim: construído em 1961 e derrubado em 9 de novembro de 1989.', 'Descolonização afro-asiática e Conferência de Bandung (1955).'],
    imagem: { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg?width=700', legenda: 'Alemães do Leste e do Oeste no Portão de Brandemburgo, 1989. Fonte: Wikimedia Commons.' },
    video: { id: 'eQ08AS5ZHQQ', titulo: 'Resumo de História: Guerra Fria - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/guerra-fria/' }]
  },
  {
    id: 'ditadura', ano: '1964 - 1985', bloco: 'Brasil República', titulo: 'Ditadura civil-militar e AI-5',
    resumo: 'O golpe de 31 de março de 1964 iniciou a ditadura. O AI-5, de 13 de dezembro de 1968, no governo de Costa e Silva, foi o mais duro dos 17 atos institucionais.',
    pontos: ['AI-5 permitiu cassar políticos, suspender o habeas corpus e institucionalizou a censura prévia.', 'Início dos anos de chumbo.'],
    imagem: null,
    video: { id: 'B8hLHJSA6V0', titulo: 'Resumo de História: Ditadura Militar - Débora Aladim' },
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/ato-institucional-n-5-ai-5/' }]
  },
  {
    id: 'diretas', ano: '1984 - 1985', bloco: 'Brasil República', titulo: 'Diretas Já e Nova República',
    resumo: 'A emenda Dante de Oliveira, que previa eleições diretas, foi rejeitada em abril de 1984. Tancredo Neves foi eleito pelo Colégio Eleitoral em 15 de janeiro de 1985.',
    pontos: ['Tancredo derrotou Paulo Maluf e morreu em 21 de abril de 1985.', 'José Sarney assumiu, o primeiro presidente civil após a ditadura.'],
    imagem: null, video: null,
    links: [{ texto: 'Resumo - Toda Matéria', url: 'https://www.todamateria.com.br/diretas-ja/' }]
  }
];
const CHAVE = 'linha-tempo-ufrgs-v1';

function carregarEstado() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) || { estudados: {}, favoritos: {}, notas: {} };
  } catch (e) {
    return { estudados: {}, favoritos: {}, notas: {} };
  }
}
function salvarEstado() {
  localStorage.setItem(CHAVE, JSON.stringify(estado));
}

const estado = carregarEstado();
let filtroBloco = 'Todos';
let filtroEstado = 'todos';
let termoBusca = '';

const elLinha = document.getElementById('linha');
const elBusca = document.getElementById('busca');
const elFiltrosBloco = document.getElementById('filtros-bloco');
const elDetalhe = document.getElementById('detalhe');
const elFolha = document.getElementById('detalhe-folha');

function escapar(texto) {
  const d = document.createElement('div');
  d.textContent = texto;
  return d.innerHTML;
}

function passaNoFiltro(e) {
  if (filtroBloco !== 'Todos' && e.bloco !== filtroBloco) return false;
  if (filtroEstado === 'estudados' && !estado.estudados[e.id]) return false;
  if (filtroEstado === 'pendentes' && estado.estudados[e.id]) return false;
  if (filtroEstado === 'favoritos' && !estado.favoritos[e.id]) return false;
  if (filtroEstado === 'anotados' && !(estado.notas[e.id] || '').trim()) return false;
  if (termoBusca) {
    const alvo = [e.titulo, e.ano, e.resumo, e.bloco, ...e.pontos].join(' ').toLowerCase();
    if (!alvo.includes(termoBusca)) return false;
  }
  return true;
}

function desenharFiltrosBloco() {
  const blocos = ['Todos', ...new Set(EVENTOS.map(e => e.bloco))];
  elFiltrosBloco.innerHTML = blocos
    .map(b => `<button class="chip ${b === filtroBloco ? 'ativo' : ''}" data-bloco="${escapar(b)}">${escapar(b)}</button>`)
    .join('');
}

function desenharLinha() {
  const lista = EVENTOS.filter(passaNoFiltro);
  if (!lista.length) {
    elLinha.innerHTML = '<p class="vazio">Nenhum evento encontrado com esses filtros.</p>';
    atualizarProgresso();
    return;
  }
  let html = '';
  let blocoAtual = '';
  lista.forEach((e, i) => {
    if (e.bloco !== blocoAtual) {
      blocoAtual = e.bloco;
      html += `<div class="marco-bloco"><span>${escapar(blocoAtual)}</span></div>`;
    }
    const lado = i % 2 === 0 ? 'esq' : 'dir';
    const estudado = estado.estudados[e.id] ? 'estudado' : '';
    const marcas = [
      estado.estudados[e.id] ? '✔ estudado' : '',
      estado.favoritos[e.id] ? '★ favorito' : '',
      (estado.notas[e.id] || '').trim() ? '✎ anotação' : ''
    ].filter(Boolean).join(' · ');
    html += `
      <div class="evento ${lado} ${estudado}">
        <button class="cartao" data-id="${e.id}">
          <div class="ano">${escapar(e.ano)}</div>
          <h3>${escapar(e.titulo)}</h3>
          <p>${escapar(e.resumo.slice(0, 110))}${e.resumo.length > 110 ? '...' : ''}</p>
          ${marcas ? `<div class="etiquetas">${marcas}</div>` : ''}
        </button>
      </div>`;
  });
  elLinha.innerHTML = html;
  atualizarProgresso();
}

function atualizarProgresso() {
  const total = EVENTOS.length;
  const feitos = EVENTOS.filter(e => estado.estudados[e.id]).length;
  const pct = total ? Math.round((feitos / total) * 100) : 0;
  document.getElementById('progresso-label').textContent = `${feitos} de ${total} estudados`;
  document.getElementById('progresso-pct').textContent = `${pct}%`;
  document.getElementById('barra-preenchida').style.width = pct + '%';
}

function abrirDetalhe(id) {
  const e = EVENTOS.find(x => x.id === id);
  if (!e) return;
  const estudado = !!estado.estudados[id];
  const favorito = !!estado.favoritos[id];
  const nota = estado.notas[id] || '';

  elFolha.innerHTML = `
    <button class="fechar" id="btn-fechar" aria-label="Fechar">×</button>
    <div class="ano">${escapar(e.ano)} · ${escapar(e.bloco)}</div>
    <h2>${escapar(e.titulo)}</h2>
    <p>${escapar(e.resumo)}</p>

    <div class="acoes">
      <button class="btn ${estudado ? 'ligado' : ''}" id="btn-estudado">${estudado ? '✔ Estudado' : 'Marcar como estudado'}</button>
      <button class="btn ${favorito ? 'ligado' : ''}" id="btn-favorito">${favorito ? '★ Favorito' : '☆ Favoritar'}</button>
    </div>

    ${e.imagem ? `<img src="${e.imagem.url}" alt="${escapar(e.titulo)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='none'"><p class="legenda">${escapar(e.imagem.legenda)}</p>` : ''}

    <h4>Pontos principais</h4>
    <ul>${e.pontos.map(p => `<li>${escapar(p)}</li>`).join('')}</ul>

    ${e.video ? `
      <h4>Videoaula</h4>
      <div class="video-wrap">
        <iframe src="https://www.youtube.com/embed/${e.video.id}" title="${escapar(e.video.titulo)}" allowfullscreen loading="lazy"></iframe>
      </div>
      <p class="legenda">${escapar(e.video.titulo)}. <a href="https://www.youtube.com/watch?v=${e.video.id}" target="_blank" rel="noopener">Abrir no YouTube</a></p>` : ''}

    ${e.links.length ? `
      <h4>Para ler mais</h4>
      <ul class="links">${e.links.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${escapar(l.texto)}</a></li>`).join('')}</ul>` : ''}

    <h4>Minhas anotações</h4>
    <textarea id="nota" placeholder="Escreva aqui o que você entendeu, dúvidas, macetes...">${escapar(nota)}</textarea>
    <p class="salvo" id="salvo"></p>
  `;

  elDetalhe.classList.add('aberto');
  elDetalhe.setAttribute('aria-hidden', 'false');

  document.getElementById('btn-fechar').onclick = fecharDetalhe;
  document.getElementById('btn-estudado').onclick = () => {
    estado.estudados[id] = !estado.estudados[id];
    salvarEstado();
    abrirDetalhe(id);
    desenharLinha();
  };
  document.getElementById('btn-favorito').onclick = () => {
    estado.favoritos[id] = !estado.favoritos[id];
    salvarEstado();
    abrirDetalhe(id);
    desenharLinha();
  };
  const campo = document.getElementById('nota');
  let temporizador;
  campo.addEventListener('input', () => {
    estado.notas[id] = campo.value;
    salvarEstado();
    document.getElementById('salvo').textContent = 'Salvo neste navegador.';
    clearTimeout(temporizador);
    temporizador = setTimeout(desenharLinha, 400);
  });
}

function fecharDetalhe() {
  elDetalhe.classList.remove('aberto');
  elDetalhe.setAttribute('aria-hidden', 'true');
  desenharLinha();
}

elLinha.addEventListener('click', ev => {
  const cartao = ev.target.closest('.cartao');
  if (cartao) abrirDetalhe(cartao.dataset.id);
});
document.getElementById('detalhe-fundo').addEventListener('click', fecharDetalhe);
document.addEventListener('keydown', ev => { if (ev.key === 'Escape') fecharDetalhe(); });

elBusca.addEventListener('input', () => {
  termoBusca = elBusca.value.trim().toLowerCase();
  desenharLinha();
});

elFiltrosBloco.addEventListener('click', ev => {
  const b = ev.target.closest('[data-bloco]');
  if (!b) return;
  filtroBloco = b.dataset.bloco;
  desenharFiltrosBloco();
  desenharLinha();
});

document.querySelectorAll('[data-estado]').forEach(btn => {
  btn.addEventListener('click', () => {
    filtroEstado = btn.dataset.estado;
    document.querySelectorAll('[data-estado]').forEach(b => b.classList.toggle('ativo', b === btn));
    desenharLinha();
  });
});
document.querySelector('[data-estado="todos"]').classList.add('ativo');

document.getElementById('btn-limpar').addEventListener('click', () => {
  if (confirm('Apagar todos os estudados, favoritos e anotações deste navegador?')) {
    localStorage.removeItem(CHAVE);
    estado.estudados = {};
    estado.favoritos = {};
    estado.notas = {};
    desenharLinha();
  }
});

desenharFiltrosBloco();
desenharLinha();