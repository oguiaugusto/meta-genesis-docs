---
outline: deep
---

# Valores Padrão

**Valores Padrão** são funções utilizadas para **preencher automaticamente um campo quando o formulário é aberto**, antes de qualquer interação do usuário.

Eles são úteis quando um campo precisa iniciar com um valor sugerido, calculado ou buscado no sistema, mas que ainda pode ser alterado manualmente, caso necessário.

## proximoCodigo(*diagrama, tamanho?*)

Gera automaticamente o **próximo código disponível** para um determinado diagrama.

**Quando usar**  
Em formulários onde o campo `codigo` deve ser preenchido automaticamente com o próximo valor sequencial.

**Como funciona**
- O valor é buscado no momento em que o formulário é carregado.
- O código retornado já considera os registros existentes daquele diagrama.
- O tamanho do código pode ser definido por parâmetro, quando necessário.
- Caso ocorra algum erro na busca, o campo será preenchido com valor vazio.

**Parâmetros**
- `diagrama`: nome do diagrama para o qual o código será gerado.
- `tamanho` (opcional): quantidade de caracteres desejada para o código gerado.

**O que faz**
- Consulta o próximo código disponível no sistema.
- Formata o código de acordo com o tamanho informado.
- Retorna esse valor para preenchimento automático do campo.

**Exemplo**
```text
proximoCodigo("Cliente", 6)
````

Pode retornar valores como:

```text
000001
000002
000003
```

Uma observação: pelo código, parece que `tamanho` agora é obrigatório. Se existir algum valor padrão quando ele não for informado (por exemplo, 6 caracteres), vale mencionar isso na documentação. Caso contrário, a seção acima já está alinhada com o comportamento atual.
