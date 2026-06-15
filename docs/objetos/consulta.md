---
outline: deep
---

# Consultas

Uma **Consulta** é utilizada para buscar registros de outra tabela, aplicar filtros e ordenações, e permitir que o usuário selecione um item para **preencher automaticamente um ou mais campos** de um formulário.

Uma mesma consulta pode ser reutilizada em **vários campos e formulários diferentes**, desde que os campos de destino possuam as variáveis configuradas corretamente.

Consultas são comumente utilizadas em campos de **chave estrangeira**, listas de seleção e buscas assistidas.

## Campos Básicos

- **Código**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: sim*
  - *Editável: não*
  - *Observação: número sequencial gerado automaticamente*

- **Bloqueado**
  - *Tipo: verdadeiro/falso*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim*
  - *Observação: define se a consulta está bloqueada*

- **Nome**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: sim*
  - *Editável: sim*
  - *Observação: identificador da consulta. É gerado automaticamente com base na "Tabela da Consulta", mas pode ser editado*

## Configuração da Consulta

- **Tabela da Consulta**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Editável: não*
  - *Observação: define de qual tabela os dados serão buscados*

- **Tabela Genérica**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim (quando exibido)*
  - *Editável: não*
  - *Observação: utilizado quando a "Tabela da Consulta" representa uma [tabela genérica](/glossario#tabela-generica). Define em qual sub-tabela a consulta será realizada*

- **Índice**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Editável: sim*
  - *Observação: define o índice utilizado para ordenar o resultado da consulta*

- **Campo de Retorno**

  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Editável: sim*
  - *Observação: define qual campo da tabela consultada será retornado ao formulário quando um registro for selecionado*

- **Campo de Exibição**

  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: não*
  - *Editável: sim*
  - *Observação: define qual campo será exibido ao usuário após a seleção. Quando não informado, o sistema utiliza o próprio "Campo de Retorno"*

::: info Dica
Em consultas utilizadas para chaves estrangeiras, é recomendável retornar o campo `Id` e utilizar o **Campo de Exibição** para mostrar um campo mais descritivo ao usuário.
:::

## Colunas da Consulta

Define **quais campos serão exibidos na tabela de resultados** apresentada ao usuário.

- *Configuração:* para adicionar uma coluna, clique no botão `+` e selecione um dos campos da tabela.
- *Obrigatório:* ao menos uma coluna deve ser configurada.

## Filtros

Filtros permitem **restringir os registros retornados pela consulta** com base em condições definidas.

- *Configuração:* para adicionar um filtro, clique no botão `+` e selecione:
  - um **Campo** da tabela consultada,
  - um **Operador**,
  - e um **Valor**.

### Uso de variáveis nos filtros

O valor do filtro pode ser uma **variável**, desde que exista algum campo no formulário atual configurado com essa variável.

Quando a consulta é executada, o valor utilizado no filtro será o **valor atual do campo correspondente** no formulário.

### Exemplo

Em uma consulta de Municípios, pode ser definido um filtro:

- `EstadoId = @estadoId`

Nesse caso:
- se o campo de estado já estiver preenchido, a consulta retornará apenas municípios daquele estado;
- se o campo de estado estiver vazio, o filtro utilizará o valor atual (ou nulo) configurado no formulário.

- *Obrigatório:* não.

