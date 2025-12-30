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

## validarCnpj()

Valida se o **CNPJ informado realmente existe** e se a **razão social**
corresponde ao registro oficial.

### O que essa validação faz

Ao salvar o formulário, a validação:

1. Consulta um serviço externo de CNPJ;
2. Verifica se o CNPJ é válido;
3. Confere se a razão social informada coincide com a registrada;
4. Trata limites de requisição do serviço externo.

### Regras aplicadas

- ❌ CNPJ inexistente ou inválido  
  → *"O CNPJ informado é inválido"*

- ⏳ Limite de requisições excedido  
  → *"O limite de requisições foi excedido. Por favor, aguarde X segundos e tente novamente"*

- ❌ Razão social diferente da registrada  
  → *"A razão social informada não coincide com o registro no CNPJ"*

### Campos utilizados

Essa validação utiliza os seguintes campos do formulário:

- `cnpj`
- `razaoSocial`

> Ambos devem estar preenchidos corretamente para que a validação funcione.

### Quando usar

Use essa validação quando for necessário garantir que:
- o CNPJ é real;
- os dados informados correspondem a uma empresa oficialmente registrada.
