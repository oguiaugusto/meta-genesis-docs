---
outline: deep
---

# Pasta

Uma **Pasta** define a **organização dos campos de um diagrama no formulário**, controlando **quais campos aparecem juntos** e **em qual aba** eles são exibidos.

Cada pasta representa uma **aba do formulário**.
Campos que não pertencem a nenhuma pasta **não são exibidos no formulário**.

A pasta de **ordem 0** é utilizada para campos que devem ficar **fora das abas**, exibidos diretamente no formulário.

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
  - *Observação: quando bloqueada, a pasta não é considerada nas buscas padrão e não é utilizada na montagem do formulário*

- **Diagrama**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: não*
  - *Observação: identifica a qual diagrama a pasta pertence e não pode ser modificado. Apenas diagramas que possuam campos ainda não associados a nenhuma pasta aparecem no menu suspenso*

- **Ordem**
  - *Tipo: número*
  - *Obrigatório: sim*
  - *Único: sim (apenas dentre as pastas do mesmo diagrama)*
  - *Editável: sim*
  - *Observação: define a posição da pasta no formulário. A pasta com menor ordem é exibida primeiro. A ordem 0 indica campos fora das abas*

- **Nome**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim (exceto quando a ordem for 0)*
  - *Observação: nome exibido na aba do formulário*

- **Descrição**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim (exceto quando a ordem for 0)*

## Tabela de Itens

A tabela define **quais campos do diagrama pertencem à pasta**.

- Cada item pode pertencer a **apenas uma pasta** por diagrama.
- Um item não selecionado em nenhuma pasta **não será exibido no formulário**.
- A associação de itens às pastas é utilizada **apenas para montagem do formulário** e **não exige aplicar mudanças**.

### Regras de exibição

- Itens pertencentes à pasta atual **sempre aparecem** na tabela.
- Também aparecem itens que **ainda não pertencem a nenhuma outra pasta**.
- Itens já associados a outra pasta **não podem ser selecionados**.

### Observações importantes

- A pasta de ordem 0 **não é criada automaticamente**, mas é recomendada para campos que devem ficar fora das abas.
- Campos não são associados automaticamente à pasta 0: **todos os itens precisam ser selecionados manualmente**.
- Alterações na composição das pastas afetam apenas a **exibição do formulário** e entram em vigor imediatamente.
