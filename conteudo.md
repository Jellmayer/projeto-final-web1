# Tema central: “o curso de Análise e Desenvolvimento de Sistemas do Instituto Federal”.

# Requisitos do Projeto

## 1. Estrutura do site

- 4 páginas HTML conectadas entre si por meio de um menu de navegação.
- Todas as páginas no padrão visual Bootstrap.
- Pelo menos uma funcionalidade interativa (ex.: botão que exibe informações, validação de formulário, animação simples, etc.)

## 2. Tema

Disciplina favorita do aluno no curso: Estrutura de Dados

- O que é a disciplina

A disciplina Estrutura de Dados I é o alicerce do desenvolvimento de software profissional. Ela ensina a organizar, gerenciar, armazenar e manipular dados na memória do computador de forma lógica e eficiente. Para isso, combina a programação modular (divisão de sistemas complexos em blocos de código menores, isolados e reutilizáveis) com a implementação de estruturas de dados. O foco central é capacitar o desenvolvedor a escolher e implementar a melhor estratégia de armazenamento e algoritmo para resolver um determinado problema computacional.

- Por que ela é importante

Desempenho e Eficiência: Compreender estruturas de dados ajuda a evitar gargalos de processamento, algo essencial no mercado de trabalho quando lidamos com grandes volumes de dados e exigências de sistemas rápidos e leves.

Custos de Infraestrutura: Algoritmos eficientes reduzem a necessidade de servidores robustos, o que se traduz em economia financeira na aplicação.

Qualidade de Código: O uso de modularização e Tipos Abstratos de Dados (TAD) permite esconder detalhes de funcionamento e criar códigos limpos, fáceis de testar e de dar manutenção.

- Conteúdos estudados
  Programação Modular: Técnica de desenvolvimento que consiste em dividir um programa em partes menores independentes.

Recursividade: Conceito em que uma função chama a si mesma para resolver problemas de natureza sequencial e repetitiva.

Estruturas Heterogêneas (Registros/Structs): Agrupamento de variáveis de tipos de dados distintos sob um único identificador, servindo como base para modelar objetos do mundo real.

Tipos Abstratos de Dados (TAD): Modelo de dados definido pelas operações que podem ser realizadas sobre ele, ocultando os detalhes de sua implementação interna.

Listas: Estruturas sequenciais para armazenamento de elementos, podendo ser estáticas ou dinâmicas. Subdividem-se em:

Filas (Queues): Acesso FIFO (First-In, First-Out), onde o primeiro elemento a entrar é o primeiro a sair.

Pilhas (Stacks): Acesso LIFO (Last-In, First-Out), onde o último elemento inserido é o primeiro a ser removido.

- Aplicações práticas

Mecanismo de "Desfazer" (Ctrl+Z) em Editores:
Utiliza a estrutura de Pilha (Stack). Toda modificação realizada no editor é inserida no topo da pilha. Ao desfazer uma ação, o estado mais recente é retirado, restaurando o estado anterior imediatamente.

Fila de Impressão:
Utiliza a estrutura de Fila (Queue). Quando múltiplos computadores enviam documentos para uma impressora compartilhada, as tarefas são processadas e impressas na ordem de chegada.

Playlists de Música:
Utiliza Listas Encadeadas Circulares. Cada música contém uma referência para a próxima na sequência. No modo de repetição, o ponteiro da última música da lista é configurado para apontar de volta ao endereço da primeira faixa, gerando uma reprodução ininterrupta sem a necessidade de recriar a lista.

## 4. Conteúdo mínimo das páginas

Página 1 – Inicial: apresentação do tema e breve introdução sobre a disciplina escolhida.

Página 2 – Sobre a Disciplina: explicação detalhada sobre a disciplina e sua importância.

Página 3 – Conteúdos Estudados: lista de tópicos aprendidos, com pelo menos um recurso interativo em JavaScript.

Página 4 – Contato: formulário simples (nome e mensagem) com validação em JavaScript.
