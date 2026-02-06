---
outline: deep
---

# Rotinas

As **Rotinas** definem **como um diagrama é apresentado e utilizado no frontend** da aplicação.

Elas controlam:
- quais **rotas** são criadas;
- quais **telas** são exibidas;
- e como o **formulário** de cadastro, edição e visualização se comporta.

Apesar de serem configuradas no **cadastro de Menu**, as rotinas estão
principalmente ligadas ao **diagrama informado como parâmetro**.
O menu é utilizado apenas como ponto de acesso (link).

## Onde a rotina é configurada

As rotinas são configuradas no campo **Rotina** do cadastro de **Menu**.

Esse campo aceita:
- **uma única rotina por menu**;
- uma chamada de função, com parênteses;
- um **diagrama obrigatório** como parâmetro, informado como texto entre aspas.

Exemplo: `cadastros("Cliente")`

O campo **Rotina** pode ficar vazio.
Nesse caso, ao clicar no menu:
- nada acontece, ou
- o menu serve apenas como agrupador de submenus.

## Quando a rotina é executada

As rotinas são processadas **no carregamento da aplicação**.

Sempre que o sistema é iniciado ou recarregado:
1. os menus configurados com rotinas são buscados;
2. as rotinas são interpretadas;
3. as **rotas e telas correspondentes são montadas no frontend**.


## Parâmetro `diagrama`

Toda rotina exige um **diagrama válido** como parâmetro.

- O valor deve ser o **nome do diagrama**;
- Se o diagrama não existir, a rotina não será aceita.

Exemplo válido: `cadastros("Contrato")`


## cadastros(diagrama)

Rotina padrão de **cadastros dinâmicos** do sistema.

Ela cria automaticamente:
- a **tela de lista** (rota índice), exibindo os registros do diagrama;
- as **telas de formulário**:
  - criação;
  - edição;
  - visualização;
- a **rota de exclusão** (executada via modal, sem tela dedicada).

### Como as telas são montadas

Nessa rotina, as telas são construídas com base nas configurações do diagrama, incluindo:
- itens do diagrama;
- pastas;
- índices;
- validações;
- gatilhos;
- propriedades de uso (browser, nível, etc.).

Ou seja, o comportamento das telas é **totalmente automático** e responde
às configurações feitas no diagrama e em seus itens.

### Quando usar

Use essa rotina quando:
- o formulário pode ser montado dinamicamente;
- o cadastro segue o padrão comum do sistema;
- não há necessidade de telas personalizadas.

## cadastrosFormPersonalizado(diagrama)

Rotina de cadastro com **formulário personalizado**.

Ela cria as **mesmas rotas** da rotina `cadastros`, incluindo:
- lista;
- criação;
- edição;
- visualização;
- exclusão.

A diferença está no **formulário**.

### Como as telas são montadas

- A **tela de lista** continua sendo automática;
- As **telas de formulário não são geradas a partir dos itens do diagrama**;
- O formulário é composto por **telas personalizadas**, definidas previamente no código.

Os itens do diagrama são **quase totalmente ignorados** nessa rotina.
A única exceção é o campo **Nível**, que continua sendo respeitado
para controle de visibilidade e interação dos campos.

### Requisitos importantes

Para usar essa rotina:
- as telas de formulário precisam **existir previamente no código**;
- a rotina apenas conecta o menu e o diagrama a essas telas já criadas.

### Quando usar

Use essa rotina quando:
- o formulário exige comportamentos muito específicos;
- a estrutura não pode ser representada apenas por itens de diagrama;
- é necessário controle total sobre os componentes da tela.

## Observações importantes

- Uma mesma rotina pode ser usada em **menus diferentes**, inclusive para o mesmo diagrama;
- O menu não define o comportamento da rotina — apenas o ponto de acesso;
- A escolha da rotina define **como o frontend será montado**, não apenas quais dados serão exibidos.
