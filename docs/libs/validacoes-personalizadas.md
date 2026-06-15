---
outline: deep
---

# Validações Personalizadas

As **Validações Personalizadas** são validações que vão além de regras simples
(como tamanho, formato ou obrigatoriedade).

Elas permitem:
- consultar serviços externos;
- comparar múltiplos campos entre si;
- aplicar regras específicas de negócio.

Essas validações são executadas **no backend**, no momento do envio do formulário.

## Como usar

Uma validação personalizada é associada ao item do diagrama no formulário,
em um campo separado das demais validações.

A validação personalizada é executada após as validações simples, e,
se identificar algum problema, ela interrompe o salvamento
e retorna uma mensagem de erro ao usuário.

## validarCnpj(*validarCpf?*)

Valida se o **CNPJ informado realmente existe** e se a **razão social**
corresponde ao registro oficial.

Opcionalmente, também pode validar **CPFs** quando o parâmetro
`validarCpf` (`true`) for informado.

### O que essa validação faz

Ao salvar o formulário, a validação:

1. Verifica se o valor informado é um CPF ou CNPJ;
2. Quando for CPF, valida sua estrutura;
3. Quando for CNPJ:
   - consulta um serviço externo;
   - verifica se o CNPJ existe;
   - confere se a razão social informada coincide com a registrada.

### Regras aplicadas

#### Quando o valor informado for um CPF

- ❌ CPF inválido  
  → *"O CPF informado é inválido"*

#### Quando o valor informado for um CNPJ

- ❌ CNPJ inexistente ou inválido  
  → *"O CNPJ informado é inválido"*

- ⏳ Limite de requisições excedido  
  → mensagem retornada pelo serviço externo

- ❌ Razão social diferente da registrada  
  → *"A razão social informada não coincide com o registro no CNPJ"*

### Campos utilizados

Essa validação utiliza os seguintes campos do formulário:

- `cnpj`
- `razaoSocial`

> O campo `razaoSocial` é utilizado apenas quando o valor informado for um CNPJ.

### Quando usar

Use essa validação quando for necessário garantir que:

- o CPF informado é válido;
- o CNPJ é real;
- os dados informados correspondem a uma empresa oficialmente registrada.
## validarMenuPrincipal()

Valida se o menu selecionado como **Menu Principal**
é diferente do menu que está sendo editado.

### O que essa validação faz

Ao salvar o formulário, a validação:

1. Compara o menu atual com o menu principal informado;
2. Impede que um menu seja definido como seu próprio menu principal.

### Regras aplicadas

- ❌ Menu principal igual ao menu atual  
  → *"O Menu Principal escolhido deve ser diferente do menu que está sendo editado"*

### Campos utilizados

Essa validação utiliza os seguintes campos do formulário:

- `id`
- `paiId`

### Quando usar

Use essa validação em formulários de menus que possuam
uma estrutura hierárquica de menus e submenus.

## validarFuncaoRotina()

Valida se o campo **Rotina** contém uma **função válida** e se o **diagrama informado como parâmetro existe** no sistema.

Essa validação garante que a rotina configurada esteja corretamente escrita
e referencie um diagrama real.

### O que essa validação faz

Ao salvar o formulário, a validação:

1. Verifica se o campo **Rotina** foi preenchido;
2. Confere se o valor informado está no formato de função esperado;
3. Identifica qual rotina está sendo utilizada;
4. Valida os parâmetros exigidos por essa rotina;
5. Confere se os diagramas e campos informados existem no sistema.

### Regras aplicadas

- ❌ Valor não está no formato de função  
  → *"Rotina deve ser uma função válida"*

- ❌ Parâmetro não informado  
  → *"Rotina: é necessário fornecer um diagrama como parâmetro para a rotina"*

- ❌ Parâmetro inválido  
  → *"Rotina: o parâmetro diagrama deve ser um diagrama válido em formato de string entre aspas"*

- ❌ Diagrama inexistente  
  → *"Rotina: o diagrama informado não existe"*

- ❌ Rotina inexistente  
  → *"Rotina: a rotina informada não existe"*

- ❌ Diagrama inexistente  
  → *mensagem indicando qual diagrama não foi encontrado*

- ❌ Campo inexistente  
  → *mensagem indicando qual campo não foi encontrado*

- ❌ Relacionamento inválido  
  → *mensagem indicando que o campo informado deve ser uma chave estrangeira do diagrama principal*

### Campos utilizados

Essa validação utiliza o seguinte campo do formulário:

- `rotina`

### Rotinas suportadas

Atualmente são aceitas as seguintes rotinas:

- `cadastros("Diagrama")`
- `cadastrosCustomForm("Diagrama")`
- `cadastrosItens("DiagramaPrincipal", ["DiagramaItens", "campoRelacionamento"], ...)`

#### cadastros()

Exige um único parâmetro contendo o nome de um diagrama válido.

#### cadastrosCustomForm()

Exige um único parâmetro contendo o nome de um diagrama válido.

#### cadastrosItens()

Exige:

- um diagrama principal;
- uma ou mais tabelas de itens.

Cada tabela de itens deve ser informada no formato:

`["Diagrama", "campoRelacionamento"]`

O campo informado deve existir e ser uma chave estrangeira
relacionada ao diagrama principal.

### Quando usar

Use essa validação quando o campo **Rotina**:
- deve conter uma função configurável pelo usuário;
- depende de um **diagrama específico** para funcionar corretamente;
- não pode aceitar valores livres ou referências inválidas.
