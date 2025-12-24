---
outline: deep
---

# Diagramas

Um **Diagrama** define a estrutura de uma tabela no banco de dados e a estrutura visual da tela correspondente no sistema.

Ele funciona como a base para todos os outros objetos, que dependem dele para existir:

- [Diagrama Item](/objetos/diagrama-item)
- [Pasta](/objetos/pasta)
- [Índice](/objetos/indice)
- [Consulta](/objetos/consulta)

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
  - *Observação: define se o diagrama está bloqueado*

- **Nome**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: sim*
  - *Editável: não*
  - *Observação: identifica a tabela criada no banco de dados. Evite espaços, números ou caracteres especiais*

- **Legenda**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim*
  - *Observação: nome exibido na tela*

- **Descrição**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*

- **Empresa**
  - *Tipo: verdadeiro/falso*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: não*
  - *Observação: define a exclusividade dos registros por empresa*

- **Filial**
  - *Tipo: verdadeiro/falso*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: não*
  - *Observação: define a exclusividade dos registros por filial*

- **Subtítulo**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: subtítulo exibido na tela de lista*

- **Botões da Lista**
  - *Descrição: botões exibidos no topo da tela de lista*
  - *Configuração: os botões padrão podem ser selecionados no menu suspenso. Botões extras podem ser adicionados clicando no ícone `+` e preenchendo os campos "Ícone" e "Ação"*
  - *Observação: mais informações em [Lista](/libs/lista#icones-da-barra-superior)*

- **Botões das Células**
  - *Descrição: botões exibidos no início de cada linha da tabela*
  - *Configuração: os botões padrão podem ser selecionados no menu suspenso. Botões extras podem ser adicionados clicando no ícone `+` e preenchendo os campos "Ícone" e "Ação"*
  - *Observação: mais informações em [Lista](/libs/lista#acoes-por-linha-celulas)*

## Aplicar Mudanças

Sempre que um diagrama for criado, editado ou excluído, é necessário **aplicar as mudanças** para que elas sejam refletidas **imediatamente no banco de dados**.

As mudanças podem ser aplicadas de duas formas:

1. **Aplicar todas as mudanças**  
   Aplica todas as alterações pendentes de todos os diagramas do sistema, **inclusive os que não estão visíveis na lista**.  
   Essa ação pode ser realizada clicando em **Aplicar Tudo**, no topo da lista de diagramas.

2. **Aplicar mudanças de um diagrama específico**  
   Aplica apenas as alterações do diagrama selecionado.  
   Essa ação pode ser realizada clicando no **botão de upload** (seta para cima) na célula do diagrama.

Apenas diagramas que estejam, ou que possuam itens, com status **pendente** podem ter suas mudanças aplicadas.  
O status é exibido na terceira coluna da tabela de diagramas.
