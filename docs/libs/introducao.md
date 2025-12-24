---
outline: deep
---

# Libs

**Libs** são funções pré-definidas do sistema que podem ser utilizadas para **automatizar comportamentos em formulários, validações, gatilhos e consultas**.

Essas funções são escritas previamente em código e disponibilizadas para uso por meio de seus **identificadores**. Nem toda necessidade pode ser atendida por uma Lib existente; quando isso acontecer, é necessário solicitar a criação de uma nova função a um desenvolvedor.

## Como usar uma Lib

Para utilizar uma **Lib**, basta chamar a função diretamente no campo de texto do formulário, **sempre usando parênteses** após o nome da função.

- Valores de **texto** devem ser informados entre **aspas** (`"texto"`).
- Valores **numéricos** podem ser informados diretamente, sem aspas.
- Quando uma função aceita múltiplos parâmetros, eles devem ser separados por **vírgula**.
- Algumas Libs podem receber **outras Libs como parâmetro**, permitindo composições mais complexas.

Exemplo simples: `proximoCodigo("Cliente")`

Exemplo com múltiplos parâmetros: `ordenarMenu("codigo", "modulo", "caminhoMenu", "ordem")`

Exemplo com composição de funções: `ou(igual("Sim"), igual("Não"))`

Cada Lib possui regras específicas sobre quais parâmetros aceita e como se comporta. Essas regras estão descritas individualmente nas seções a seguir.

## Seções

- [Gatilhos](/libs/gatilhos)
- [Valores Padrão](/libs/valores-padrao)
- [Índices](/libs/indices)
- [Validações](/libs/validacoes)
- [Validações Personalizadas](/libs/validacoes-personalizadas)
- [Lista](/libs/lista)
