---
outline: deep
---

# Gatilhos

Um **Gatilho** define uma ou mais ações que são executadas automaticamente
quando um **campo do formulário perde o foco** (evento *blur*).

Ele permite reagir à interação do usuário, automatizando comportamentos como:
- preenchimento de outros campos;
- ajustes de valores;
- execuções condicionais;
- encadeamento de ações mais complexas.

Os gatilhos são configurados como **objetos independentes**, associados
diretamente a um **item do diagrama**, e não mais definidos dentro do próprio item.

Um mesmo campo pode possuir **vários gatilhos**, que são executados
em uma **ordem controlada** pelo campo *Sequência*.


## Campos

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
  - *Observação: define se o gatilho está bloqueado*

- **Diagrama**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: não*
  - *Observação: identifica a qual diagrama o campo do gatilho pertence e não pode ser modificado*

- **Diagrama Item**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: não*
  - *Observação: identifica a qual **campo** o gatilho pertence e não pode ser modificado*

- **Sequência**
  - *Tipo: número*
  - *Obrigatório: sim*
  - *Único: sim (apenas dentre os gatilhos do mesmo campo)*
  - *Editável: sim*
  - *Observação: define a ordem do gatilho na execução*

- **Ação**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim*
  - *Observação: define o que será executado quando o gatilho disparar. A ação é escrita como uma chamada de função, podendo receber valores diretos ou outras funções como argumento. É possível encadear funções para criar comportamentos mais complexos. O campo possui um editor assistido, com fechamento automático de parênteses, aspas e colchetes, facilitando a escrita de expressões maiores. Ver [Ações](/libs/acoes)*


## Onde a ação é executada

As ações dos gatilhos são executadas no **frontend** da aplicação.

Isso permite que os gatilhos:
- reajam imediatamente à interação do usuário;
- atualizem o formulário em tempo real;
- e, quando necessário, realizem chamadas ao backend ou a serviços externos.


## Ordem de execução

Quando um campo possui mais de um gatilho configurado, eles são executados
de acordo com o valor do campo **Sequência**, do menor para o maior.

Isso permite dividir comportamentos complexos em ações menores,
executadas passo a passo.

## Comportamento em caso de erro

Por padrão, **erros em gatilhos não geram mensagens visíveis ao usuário**.

Quando um gatilho falha durante a execução:
- o formulário permanece inalterado;
- nenhum erro é exibido automaticamente;
- a interação do usuário não é interrompida.

A sintaxe da ação é validada no momento do salvamento do gatilho, portanto
**erros de escrita ou de formato não são executados**.

Em alguns casos específicos, quando a ação executada realiza chamadas externas
(como consultas a serviços externos), o próprio gatilho pode exibir
o **modal de erro do formulário**, caso a ação tenha sido executada corretamente,
mas o serviço externo retorne um erro.

Nesses casos, o gatilho é considerado executado com sucesso do ponto de vista
do sistema, mesmo que a ação resulte em uma mensagem de erro ao usuário.
