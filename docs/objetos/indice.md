---
outline: deep
---

# Índices

Um **Índice** é um objeto de um [Diagrama](/docs/diagrama) que define a **ordenação padrão** dos registros exibidos nas telas de lista.

O índice com o **menor valor no campo Ordem** é sempre utilizado como o índice padrão da tabela.  
Índices também são utilizados para definir a ordenação das [Consultas](/docs/consulta).

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
  - *Observação: define se o índice está bloqueado*

- **Diagrama**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: não*
  - *Observação: identifica a qual diagrama o índice pertence e não pode ser modificado*

- **Ordem**
  - *Tipo: número*
  - *Obrigatório: sim*
  - *Único: sim (apenas dentre os índices do mesmo diagrama)*
  - *Editável: sim*
  - *Observação: define a prioridade do índice na ordenação*

- **Descrição**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim*
  - *Observação: descrição do uso do índice*

- **Função**
  - *Tipo: texto (função)*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: define a ordenação por meio de uma função. É mutuamente exclusivo com "Campos" e fica desabilitado por padrão. Ver [Funções de Índice](/docs/libs#funcoes-indice)*

- **Campos**
  - *Descrição: define a ordem dos campos utilizados na ordenação*
  - *Configuração: os menus suspensos ficam disponíveis após a seleção do diagrama*
  - *Obrigatório: não*
  - *Observação: mutuamente exclusivo com "Função"*

