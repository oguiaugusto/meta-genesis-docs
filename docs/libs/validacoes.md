---
outline: deep
---

# Validações

**Validações** são funções usadas para **verificar, ajustar ou restringir os valores dos campos** antes que eles sejam salvos.

Elas são escritas como uma sequência de funções, aplicadas **da esquerda para a direita**, separadas por ponto (`.`).

Exemplo: `min(3).max(50).naoVazio()`

Cada validação pode:
- rejeitar o valor (exibindo uma mensagem de erro), ou
- ajustar o valor automaticamente antes do salvamento.

## Regras gerais

- As validações são executadas **na ordem em que são escritas**.
- Se uma validação gerar erro, as próximas **não são executadas**.
- Algumas validações apenas verificam o valor; outras **podem modificá-lo**.
- O tipo básico do campo e a obrigatoriedade já são definidos automaticamente.

## Validações Comuns

### obrigatorio()

Garante que o campo tenha um valor.

**Erro quando**
- o valor é `null` ou `undefined`.

## Strings e Números

### igual(*valor, ignorarMaiusculas?*)

O valor deve ser exatamente igual ao informado.

- `ignorarMaiusculas` (opcional): ignora diferença entre maiúsculas e minúsculas.

### naoIgual(*valor, ignorarMaiusculas?*)

O valor **não pode** ser igual ao informado.

### min(*valor*)

Define um valor mínimo:
- para textos: número mínimo de caracteres;
- para números: valor mínimo permitido.

### max(*valor*)

Define um valor máximo:
- para textos: número máximo de caracteres;
- para números: valor máximo permitido.

### entre(*min, max*)

Define um intervalo permitido:
- para textos: tamanho mínimo e máximo;
- para números: valor mínimo e máximo.

### pertence(*valor1, valor2, ...*)

O valor deve ser **um dos valores informados**.

Exemplo: `pertence("A", "B", "C")`

## Apenas Strings

### naoVazio()

O texto não pode estar vazio ou conter apenas espaços.

### tamanho(*valor*)

O texto deve ter **exatamente** a quantidade de caracteres informada.

### numerico()

Garante que o valor contenha apenas números.

> Essa validação também prepara o campo para validações numéricas como `min`, `max` e `entre`.

### comecaCom(*texto, ignorarMaiusculas?*)

O texto deve começar com o valor informado.

### terminaCom(*texto, ignorarMaiusculas?*)

O texto deve terminar com o valor informado.

### regex(*padrao*)

O texto deve corresponder ao padrão informado.

Exemplo: `regex(/^[0-9]{8}$/)`

### formato(*tipo*)

Valida formatos conhecidos.

Tipos disponíveis:
- `email`
- `cpf`
- `cnpj`

Exemplo: `formato("email")`

### caixaAlta()

Converte automaticamente o texto para **letras maiúsculas** antes de salvar.

### caixaBaixa()

Converte automaticamente o texto para **letras minúsculas** antes de salvar.

## Banco de Dados

### unico()

Garante que o valor **não exista em outro registro**.

- Em edição, o valor atual é ignorado.
- Útil para códigos, identificadores e chaves únicas.

### existe()

Garante que o valor exista em outro cadastro relacionado.

Usado normalmente para validar **chaves estrangeiras**.

## Operador lógico

### ou(*validação1, validação2, ...*)

Permite definir alternativas válidas.

O campo será aceito se **pelo menos uma** das validações for satisfeita.

Exemplo: `ou(min(5), pertence("A", "B"))`

Nesse caso, o valor é válido se:
- tiver pelo menos 5 caracteres, **ou**
- for "A" ou "B".

::: info Dica
É possível usar `ou` dentro de outro `ou`, criando combinações mais complexas de regras.

Exemplo: `ou(numerico().entre(2, 10), igual("15"), ou(igual("A"), igual("B")))`

Nesse exemplo, o valor será aceito se:
- for numérico e estiver entre 2 e 10, **ou**
- for exatamente "15", **ou**
- for exatamente "A" ou "B".
:::

## Observações finais

- As mensagens de erro são geradas automaticamente.
- Todas as validações são executadas antes do salvamento.
- Caso existam erros, nenhum dado é persistido.
