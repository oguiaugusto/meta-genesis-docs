---
outline: deep
---

# Ações

As **Ações** são um conjunto de funções usadas no campo **Ação** do objeto **[Gatilho](/objetos/gatilho)**.

Essas funções permitem automatizar comportamentos em formulários, como:
- preencher ou limpar campos;
- aplicar regras condicionais;
- montar textos e valores derivados;
- executar cálculos;
- consultar serviços (ex.: CEP/CNPJ) e usar os resultados no formulário.

As ações são executadas no **frontend**, quando o campo do gatilho perde o foco (*blur*).

## Como usar

A ação é escrita como uma **chamada de função**, seguida de parênteses.

- Textos devem estar entre aspas: `"texto"`
- Números são informados normalmente: `10`, `2.5`
- Booleanos: `true` / `false`
- Variáveis de formulário são referenciadas com `@` (ex.: `@nome`, `@cep`)

Exemplo simples: `set(@nome, caixaAlta(@nome))`


### Importante: `set()` é obrigatório para alterar o formulário

A maioria das funções apenas **calcula** ou **verifica** algo.

Para realmente **alterar o valor de um campo**, é necessário usar `set()` em algum ponto da ação (diretamente ou dentro de outra função como `exec()` ou `if()`).

Exemplo: `if(naoVazio(@nome), set(@prefixo, substring(@nome, 0, 3)))`


## Execução em sequência

### exec(...)
Executa várias expressões em sequência, na ordem em que forem informadas.

Use quando quiser aplicar várias alterações no mesmo gatilho.

**Exemplo:** `exec(set(@nome, trim(@nome)), set(@link, slugify(@nome)))`


## Condicionais

### if(condição, então, senão?)
Executa uma expressão se a condição for verdadeira.
O terceiro argumento (*senão*) é opcional.

**Exemplo:** `if(naoVazio(@nome), set(@nome, caixaAlta(@nome)))`


## Escrita em campos (alterar formulário)

### set(@campo, valor)
Grava um valor em um campo do formulário.

- O primeiro argumento **deve** ser um campo no formato `@campo`.
- Se o valor calculado for `undefined`, o campo **não é alterado**.

**Exemplos:**

`set(@nome, "João")`

`set(@idade, somar(@idade, 1))`

`set(@titulo, concat("Olá, ", @nome))`


## Verificações comuns

### naoVazio(valor)
Retorna `true` se o valor existir e não estiver vazio (após `trim`).

**Exemplo:** `if(naoVazio(@email), set(@email, trim(@email)))`

### vazio(valor)
Retorna `true` se o valor estiver vazio (ou nulo/indefinido).

### igual(a, b)
Compara dois valores. Valores nulos/indefinidos são tratados como vazio (`""`).


## Operações matemáticas

As operações matemáticas abaixo só funcionam quando os argumentos são números
(ou textos numéricos). Caso contrário, retornam `undefined`.

### somar(a, b)
### subtrair(a, b)
### multiplicar(a, b)
### dividir(a, b)
- Retorna `undefined` se houver divisão por zero.

### resto(a, b)
- Retorna `undefined` se o divisor for zero.


## Comparações numéricas

Estas funções retornam `true`/`false` quando os valores são numéricos.
Caso contrário, retornam `undefined`.

### maiorQue(a, b)
### maiorOuIgual(a, b)
### menorQue(a, b)
### menorOuIgual(a, b)


## Operadores lógicos

### e(...)
Retorna `true` se **todas** as condições forem verdadeiras.

### ou(...)
Retorna `true` se **alguma** condição for verdadeira.

### nao(valor)
Inverte o resultado booleano (`!valor`).


## Texto e utilidades

### concat(...)
Concatena valores em texto, ignorando `null` e `undefined`.

**Exemplo:** `set(@descricao, concat(@codigo, " - ", @nome))`

### trim(valor)
Remove espaços no início e fim.

### caixaAlta(valor)
Transforma em maiúsculo.

### caixaBaixa(valor)
Transforma em minúsculo.

### slugify(valor)
Gera uma versão “de link” (sem acentos, espaços, etc.), útil para URLs.

### substring(valor, início, fim?)
Recorta parte de um texto.
- `início` e `fim` precisam ser numéricos.
- `fim` é opcional.

### substituir(texto, padrão, substituição)
Substitui partes do texto.

- Se o padrão for uma regex escrita como texto no formato `/.../flags`,
  ele será tratado como expressão regular.
- Caso contrário, funciona como substituição simples.

**Exemplos:**

`substituir(@nome, " ", "-")`

`substituir(@texto, "/\s+/g", " ")`

### contem(texto, busca)
Retorna `true` se `texto` contém `busca`.

### tamanho(texto)
Retorna o número de caracteres.


## Tipos e verificações

Verificações simples de tipo / nulidade.

### isString(valor)
### isNumero(valor)
### isBoolean(valor)
### isNulo(valor)


## Execução de código

### eval(código)
Executa um trecho de código informado como texto.

Restrições:
- o código possui limite de tamanho;
- APIs do navegador (ex.: `window`, `document`, `fetch`, etc.) **não são permitidas**.

::: warning Cuidado!
Use com cuidado. Em geral, prefira as funções prontas da Lib Ação.
:::


## Integrações e buscas

Algumas funções consultam serviços externos e expõem resultados em variáveis internas
(que podem ser usadas depois para preencher campos com `set()`).

### buscarCep(@campo, ação)
Busca informações de um CEP.

- O primeiro argumento deve ser `@campo`.
- Caso o CEP seja inválido ou o serviço retorne erro, o modal de erro do formulário pode ser exibido.
- A função disponibiliza variáveis de retorno (prefixo `@cep...`) e então executa a `ação`.

Variáveis preenchidas:
- `@cepLogradouro`
- `@cepBairro`
- `@cepEstadoId`
- `@cepMunicipioId`

**Exemplo:** `buscarCep(@cep, exec(set(@endereco, @cepLogradouro), set(@bairro, @cepBairro), set(@estadoId, @cepEstadoId), set(@municipioId, @cepMunicipioId)))`

### buscarCnpj(@campo, ação)
Busca informações de um CNPJ.

- O primeiro argumento deve ser `@campo`.
- Preenche variáveis de retorno (prefixo `@cnpj...`) e executa a `ação`.

Variáveis preenchidas (principais):
- `@cnpjRazaoSocial`
- `@cnpjNomeFantasia`
- `@cnpjTelefoneComercial`
- `@cnpjEmailContato`
- `@cnpjCep`
- `@cnpjLogradouro`
- `@cnpjBairro`
- `@cnpjEstadoId`
- `@cnpjMunicipioId`
- `@cnpjNumero`
- `@cnpjComplemento`

**Exemplo:** `buscarCnpj(@cnpj, exec(set(@razaoSocial, @cnpjRazaoSocial), set(@nomeFantasia, @cnpjNomeFantasia), set(@telefoneComercial, @cnpjTelefoneComercial), set(@emailContato, @cnpjEmailContato), set(@cep, @cnpjCep), set(@endereco, @cnpjLogradouro), set(@bairro, @cnpjBairro), set(@estadoId, @cnpjEstadoId), set(@municipioId, @cnpjMunicipioId), set(@numero, @cnpjNumero), set(@complemento, @cnpjComplemento)))`

### buscarMunicipioIBGE(@estadoId, @campoValor, chave, ação)
Busca município por IBGE, considerando um estado selecionado.

- `@estadoId`: campo com o id do estado.
- `@campoValor`: campo cujo valor será usado na busca.
- `chave`: define o tipo de busca (ex.: `"codigo"` ou `"nome"`).
- A função preenche variáveis `@ibge...` e executa `ação`.

Variáveis preenchidas:
- `@ibgeCodigo`
- `@ibgeNome`

**Exemplo (buscar por código):** `buscarMunicipioIBGE(@estadoId, @codigo, "codigo", exec(set(@codigo, @ibgeCodigo), set(@nome, @ibgeNome)))`


## Códigos e ordens automáticas

### proximoCodigoPorModulo(@moduloId, diagrama, ação)
Busca o próximo código de um diagrama, filtrando por módulo.

Preenche:
- `@moduloCodigo`

**Exemplo:** `proximoCodigoPorModulo(@moduloId, "Menu", set(@codigo, @moduloCodigo))`

### proximaOrdem(valor, chaveFiltro, diagrama, ação)
Busca a próxima ordem baseada em um filtro.

Preenche:
- `@proximaOrdem`

**Exemplo:** `proximaOrdem(@paiId, "paiId", "Menu", set(@ordem, @proximaOrdem))`