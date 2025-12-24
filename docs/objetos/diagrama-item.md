---
outline: deep
---

# Diagrama Item

Um **Diagrama Item** é um objeto de um [Diagrama](/objetos/diagrama) que representa uma **coluna da tabela** no banco de dados.

Ele define tanto as características dessa coluna quanto a forma como o campo correspondente é exibido e configurado em tabelas e formulários do sistema.

## Campos

### Principais

Campos básicos de identificação e controle do item.

- **Diagrama**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: não*
  - *Observação: identifica a qual diagrama o item pertence e não pode ser modificado*

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
  - *Observação: define se o item está bloqueado*

### Geral

Campos que definem a estrutura da coluna no banco de dados e seus relacionamentos.

- **Nome**
  - *Tipo: texto*
  - *Obrigatório: sim*
  - *Único: sim (apenas dentre os itens do mesmo diagrama)*
  - *Editável: não*
  - *Observação: identifica a coluna da tabela no banco de dados. Evite espaços, números ou caracteres especiais*

- **Chave Primária**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: não*
  - *Único: sim*
  - *Editável: não*
  - *Observação: identifica a chave primária da tabela*

- **Tipo**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim (se a tabela não possuir registros)*

- **Tamanho**
  - *Tipo: número ou MAX*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: aplicável apenas a alguns tipos. Ver [Tipos](#tipos) que terminam em (n)*

- **Tabela Estrangeira**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: não*
  - *Observação: tabela que será referenciada. Quando preenchida junto com "Chave Estrangeira", o tipo e o tamanho do item são ajustados automaticamente e sua edição é desabilitada*

- **Chave Estrangeira**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim (se "Tabela Estrangeira" estiver selecionada)*
  - *Único: não*
  - *Editável: não*
  - *Observação: coluna que será referenciada. Quando preenchida junto com "Tabela Estrangeira", o tipo e o tamanho do item são ajustados automaticamente e sua edição é desabilitada*

- **Chave de Exibição**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim (se "Tabela Estrangeira" e "Chave Estrangeira" estiverem selecionadas)*
  - *Único: não*
  - *Editável: sim*
  - *Observação: coluna exibida nas tabelas e formulários*

- **Nome da Relação**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: não*
  - *Observação: nome personalizado da relação. Útil para auto-relações ou quando mais de um item referencia a mesma tabela estrangeira*

- **Formatos**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: ver [Formatos](#formatos)*

- **Contexto**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: não*
  - *Observação: define se o campo existe ou não na tabela*

- **Propriedade**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: ver [Propriedade](#propriedade)*

### Informações

Campos usados apenas para exibição e descrição do campo na interface.

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

### Opções

Campos opcionais que alteram o comportamento padrão do campo.

- **Variável**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: sim (apenas dentre os itens do mesmo diagrama)*
  - *Editável: sim*
  - *Observação: deve começar com @ e não conter espaços ou caracteres especiais*

- **Gatilho**
  - *Tipo: texto (função)*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: ver [Gatilhos](/libs/gatilhos)*

- **Valor Padrão**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: mutuamente exclusivo com "Campo Especial" e "Consulta"*

- **Campo Especial**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: mutuamente exclusivo com "Valor Padrão", "Consulta" e "Lista Padrão". Define exibição especial no formulário (ex: campo de senha)*

- **Consulta**
  - *Tipo: texto (selecionado no menu suspenso)*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: mutuamente exclusivo com "Valor Padrão", "Campo Especial" e "Lista Padrão". Ver [Consultas](/objetos/consulta)*

- **Lista Padrão**
  - *Tipo: texto*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: mutuamente exclusivo com "Campo Especial" e "Consulta". Valores separados por "|" (ex: Laranja | Morango | Maçã)*

### Uso

Campos que controlam como e quando o campo é exibido ao usuário.

- **Obrigatório**
  - *Tipo: verdadeiro/falso*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*

- **Em Uso**
  - *Tipo: verdadeiro/falso*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: desabilita o campo sem excluí-lo*

- **Browser**
  - *Tipo: verdadeiro/falso*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: define se o campo aparece na tabela*

- **Nível**
  - *Tipo: número*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim*
  - *Observação: define o nível necessário do usuário para acessar o campo*

- **Ordem na Lista**
  - *Tipo: número*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim*
  - *Observação: define a ordem de exibição do campo na tabela*

- **Ordem no Formulário**
  - *Tipo: número*
  - *Obrigatório: sim*
  - *Único: não*
  - *Editável: sim*
  - *Observação: define a ordem de exibição do campo no formulário*

### Validação

Campos relacionados à validação dos valores informados pelo usuário.

- **Validação**
  - *Tipo: texto (funções)*
  - *Obrigatório: não (mas geralmente necessário)*
  - *Único: não*
  - *Editável: sim*
  - *Observação: ver [Validações](/libs/validacoes)*

- **Validação Personalizada**
  - *Tipo: texto (função)*
  - *Obrigatório: não*
  - *Único: não*
  - *Editável: sim*
  - *Observação: ver [Validações Personalizadas](/libs/validacoes-personalizadas)*

## Tipos

Os tipos definem **como o valor do campo é armazenado no banco de dados**.

O menu suspenso exibe apenas um subconjunto dos tipos disponíveis no SQL Server, suficientes para os cenários suportados pelo sistema.  
Abaixo estão os tipos disponíveis e uma breve descrição de cada um:

### Mais usados

- *VARCHAR (n) - Texto de tamanho variável definido pelo campo de tamanho.*
- *INT - Número inteiro padrão.*
- *BIT - Valor booleano: 0 (falso) ou 1 (verdadeiro).*

### Texto

- *CHAR (n) - Texto de tamanho fixo definido pelo campo de tamanho.*
- *NCHAR (n) - Texto de tamanho fixo com suporte a Unicode.*
- *VARCHAR (n) - Texto de tamanho variável.*
- *NVARCHAR (n) - Texto de tamanho variável com suporte a Unicode.*

### Números inteiros

- *TINYINT - Número inteiro pequeno (0 a 255).*
- *SMALLINT - Número inteiro curto.*
- *INT - Número inteiro padrão.*
- *BIGINT - Número inteiro longo.*

### Números decimais e monetários

- *DECIMAL (n) - Número decimal com precisão definida pelo campo de tamanho.*
- *FLOAT (n?) - Número decimal de ponto flutuante (o campo de tamanho define a precisão).*
- *REAL - Número decimal de ponto flutuante com menor precisão.*
- *MONEY - Valor monetário.*
- *SMALLMONEY - Valor monetário com menor alcance.*

### Data e hora

- *DATE - Apenas data (sem horário).*
- *DATETIME - Data e hora combinadas.*


## Formatos

Formatos são opcionais e servem apenas para melhorar a **exibição visual** do valor digitado no campo, sem alterar o conteúdo armazenado.

Por exemplo, em um campo de telefone, ao invés de exibir `9012345678`, um formato pode mostrar o valor como `(90) 1234-5678`.

Os formatos utilizam os seguintes caracteres especiais:

- **0** — representa um número (0 a 9)
- **X** — representa um caractere de texto (letra)

Seguindo o exemplo do telefone, o formato necessário seria `(00) 0000-0000`.

### Múltiplos formatos

O formulário do Diagrama Item possui três campos de formato: **Formato 1**, **Formato 2** e **Formato 3**.

Cada formato é aplicado de acordo com a **quantidade de caracteres digitados pelo usuário**.  
Por isso, cada formato seguinte deve aceitar **mais caracteres** que o anterior.

Exemplo de uso para um campo que aceita CPF e CNPJ:

- **Formato 1**: `000.000.000-00` (CPF)
- **Formato 2**: `00.000.000/0000-0` (CNPJ)
- **Formato 3**: (vazio)

::: warning Atenção!
Formatos são compatíveis apenas com campos do tipo **texto**.  
Utilizá-los em campos de outros tipos pode causar erros.
:::


## Propriedade

A propriedade define **em quais momentos o usuário pode interagir com o campo no formulário**.

Ela controla se o campo pode ser alterado na criação do registro, na edição, ou apenas visualizado.

- **Alterar** — o campo fica habilitado tanto na criação quanto na edição.
- **Criar** — o campo fica habilitado apenas na criação do registro.
- **Visualizar** — o campo fica sempre desabilitado, funcionando apenas para exibição.

## Aplicar Mudanças

As mudanças nos itens do diagrama são aplicadas juntamente com as mudanças do diagrama ao qual pertencem.

Para mais informações, consulte a seção [Aplicar Mudanças](/objetos/diagrama#aplicar-mudancas).
