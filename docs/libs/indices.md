---
outline: deep
---

# Índices

**Índices** são funções usadas para **definir como os registros de uma lista são ordenados**.

Eles permitem criar ordenações especiais que vão além da ordenação simples por coluna, como hierarquias, agrupamentos ou regras específicas de exibição.

## ordenarMenu(*campo1, campo2, campo3, ...*)

Define uma **ordenação personalizada para menus**, respeitando a hierarquia entre menu pai e menus filhos.

**Quando usar**  
Em listas de menus onde a ordem correta depende da relação entre menus pai e filhos, e não apenas de um campo simples.

**Como funciona**
- A ordenação agrupa os menus por módulo.
- Menus pai aparecem antes de seus respectivos filhos.
- A hierarquia é preservada na exibição da lista.
- A paginação é aplicada após a ordenação hierárquica.

**Parâmetros**
- `campos`: nomes dos campos que podem ativar essa ordenação.

**O que faz**
- Aplica uma ordenação padrão baseada em módulo e ordem do menu.
- Ignora a paginação inicial para montar a hierarquia completa.
- Retorna os dados já organizados para exibição correta na lista.

**Observações**
- Caso a ordenação solicitada não esteja entre os campos informados, a função não é aplicada.
- A ordenação respeita a direção (crescente ou decrescente) definida na listagem.

