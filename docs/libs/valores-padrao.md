---
outline: deep
---

# Valores Padrão

**Valores Padrão** são funções utilizadas para **preencher automaticamente um campo quando o formulário é aberto**, antes de qualquer interação do usuário.

Eles são úteis quando um campo precisa iniciar com um valor sugerido, calculado ou buscado no sistema, mas que ainda pode ser alterado manualmente, caso necessário.

## proximoCodigo(*diagrama*)

Gera automaticamente o **próximo código disponível** para um determinado diagrama.

**Quando usar**  
Em formulários onde o campo `codigo` deve ser preenchido automaticamente com o próximo valor sequencial.

**Como funciona**
- O valor é buscado no momento em que o formulário é carregado.
- O código retornado já considera os registros existentes daquele diagrama.
- Caso ocorra algum erro na busca, o campo será preenchido com valor vazio.

**Parâmetros**
- `diagrama`: nome do diagrama para o qual o código será gerado.

**O que faz**
- Consulta o próximo código disponível no sistema.
- Retorna esse valor para preenchimento automático do campo.
