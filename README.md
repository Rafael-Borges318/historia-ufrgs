# Linha do Tempo - História para a UFRGS

Site de estudo com uma linha do tempo cronológica clicável, feito em HTML, CSS e JavaScript puro, em tema papel antigo com vermelho.

## Como abrir

1. Abra a pasta no VS Code.
2. Clique com o botão direito no index.html e escolha Open with Live Server (precisa da extensão Live Server), ou abra o arquivo direto no navegador.
3. Precisa de internet para carregar as fontes, as imagens e os vídeos.

## O que o site tem

- Linha do tempo no meio, em ordem cronológica, com os eventos alternando entre esquerda e direita (no celular, tudo fica de um lado).
- Ao clicar em um evento: resumo, pontos principais, imagem, videoaula do YouTube, links para ler mais e campo de anotações.
- Marcar como estudado: o ponto na linha fica vermelho e a barra de progresso sobe.
- Favoritar eventos e filtrar só os favoritos.
- Anotações livres por evento, salvas enquanto você digita.
- Busca por título, ano, resumo ou pontos.
- Filtros por bloco e por estado (pendentes, estudados, favoritos, com anotação).
- Tecla Esc fecha o painel.

## Onde ficam as marcações

Tudo é salvo no localStorage do navegador, sob a chave linha-tempo-ufrgs-v1. As marcações ficam só no navegador e no computador em que você usou. Se limpar os dados do navegador, elas somem. O botão Apagar minhas marcações, no rodapé, limpa tudo.

## Arquivos

- index.html: estrutura da página.
- style.css: visual de papel antigo. As cores ficam nas variáveis do começo (--papel, --vermelho, --dourado, --tinta).
- app.js: a lista EVENTOS e toda a lógica de desenho, filtros, busca e salvamento.

## Como adicionar um evento

No app.js, copie um objeto da lista EVENTOS e mude os campos: id (nome único), ano, bloco, titulo, resumo, pontos (lista de frases), imagem (null ou { url, legenda }), video (null ou { id, titulo }, onde id é o código depois de v= no link do YouTube) e links. A ordem na tela é a ordem na lista, então coloque o novo evento na posição cronológica certa.

## Limitações conhecidas

- Eventos sem imagem: Idade Média, Contrarreforma, Capitanias, União Ibérica, Absolutismo, Ciclo do ouro, Iluminismo, Revolução Industrial, Independência dos EUA, Chegada da família real, Farroupilha, Guerra do Paraguai, Federalista, as duas guerras mundiais, Revolução Russa, Revolução de 1932, Estado Novo, República Populista, Ditadura e Diretas Já.
- Eventos sem videoaula: Idade Média, Absolutismo, Ciclo do ouro, Federalista, Revolução de 1932, República Populista e Diretas Já.
- Os vídeos foram encontrados em pesquisa pelo título e descrição. Eu não assisti a cada um, então confira se o conteúdo bate com o resumo.
- O vídeo da Independência dos EUA é sobre as 13 Colônias, não especificamente sobre a declaração de 1776.
- As imagens vêm da Wikimedia Commons por um link de arquivo. Se alguma não carregar, a página esconde a imagem e continua funcionando.
- Links de vídeo e imagem podem sair do ar com o tempo.
- O conteúdo ainda não cobre globalização, imperialismo, unificações da Itália e da Alemanha, independências da América Espanhola, ditaduras na América Latina e Idade Antiga.
