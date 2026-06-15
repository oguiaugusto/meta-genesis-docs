---
outline: deep
---

# Gatilhos

Um **Gatilho** define uma ou mais ações que são executadas automaticamente
quando um **campo do formulário perde o foco** (evento _blur_).

Ele permite reagir à interação do usuário, automatizando comportamentos como:

- preenchimento de outros campos;
- ajustes de valores;
- execuções condicionais;
- encadeamento de ações mais complexas.

Os gatilhos são configurados como **objetos independentes**, associados
diretamente a um **item do diagrama**, e não mais definidos dentro do próprio item.

Um mesmo campo pode possuir **vários gatilhos**, que são executados
em uma **ordem controlada** pelo campo _Sequência_.

## Campos

- **Código**

  - _Tipo: texto_
  - _Obrigatório: sim_
  - _Único: sim_
  - _Editável: não_
  - _Observação: número sequencial gerado automaticamente_

- **Bloqueado**

  - _Tipo: verdadeiro/falso_
  - _Obrigatório: sim_
  - _Único: não_
  - _Editável: sim_
  - _Observação: define se o gatilho está bloqueado_

- **Diagrama**

  - _Tipo: texto (selecionado no menu suspenso)_
  - _Obrigatório: sim_
  - _Único: não_
  - _Editável: não_
  - _Observação: identifica a qual diagrama o campo do gatilho pertence e não pode ser modificado_

- **Diagrama Item**

  - _Tipo: texto (selecionado no menu suspenso)_
  - _Obrigatório: sim_
  - _Único: não_
  - _Editável: não_
  - _Observação: identifica a qual **campo** o gatilho pertence e não pode ser modificado_

- **Sequência**

  - _Tipo: número_
  - _Obrigatório: sim_
  - _Único: sim (apenas dentre os gatilhos do mesmo campo)_
  - _Editável: sim_
  - _Observação: define a ordem do gatilho na execução_

- **Ação**
  - _Tipo: texto_
  - _Obrigatório: sim_
  - _Único: não_
  - _Editável: sim_
  - _Observação: define o que será executado quando o gatilho disparar. A ação é escrita como uma chamada de função, podendo receber valores diretos ou outras funções como argumento. É possível encadear funções para criar comportamentos mais complexos. O campo possui um editor assistido, com fechamento automático de parênteses, aspas e colchetes, facilitando a escrita de expressões maiores. Ver [Ações](/libs/acoes)_

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

## Compartilhamento de variáveis

Durante a execução dos gatilhos, é possível criar e utilizar variáveis auxiliares.

Algumas ações de busca, como `buscarCep()`, `buscarCpf()` e `buscar()`, disponibilizam variáveis temporárias contendo os resultados encontrados.

Essas variáveis permanecem disponíveis durante a execução das sequências do mesmo campo, permitindo dividir um comportamento em vários gatilhos executados em etapas.

### Exemplo

Sequência 1:

`buscarCpf(@cpf, exec())`

Sequência 2:

`set(@nome, @cpfNome)`

Nesse caso, a variável `@cpfNome` criada pela busca continua disponível para a sequência seguinte.

### Variáveis persistentes

Quando for necessário compartilhar informações entre gatilhos de campos diferentes, utilize a ação `gravarVariavel()`.

As variáveis gravadas ficam armazenadas no estado do formulário e podem ser utilizadas posteriormente por outros gatilhos, mesmo que sejam executados por campos diferentes.

Essas variáveis permanecem disponíveis até que sejam sobrescritas ou até o fechamento do formulário.

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
