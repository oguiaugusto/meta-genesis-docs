---
outline: deep
---

# Lista

A lib **Lista** centraliza toda a lógica de ações, botões, ícones e comportamentos das telas de listagem do sistema.

Na maioria dos casos, **nenhuma configuração manual é necessária**:
as listas são criadas automaticamente a partir da definição do diagrama, com ações e botões já preenchidos por padrão.

Esta lib existe para:

- padronizar o comportamento das listas
- permitir customizações pontuais quando necessário
- evitar duplicação de lógica entre telas

## Estrutura mental da Lista

Cada método da lib `Lista` **retorna uma função**. Elas se dividem em quatro grupos principais:

1. **Ícones da barra superior**
2. **Ações da barra superior**
3. **Ícones por linha (células)**
4. **Ações por linha (células)**

Esses pares quase sempre seguem o padrão:

- `listaIconX` → renderiza o ícone / botão
- `listaX` → executa a ação

## Ícones da barra superior

São os botões exibidos acima da tabela.

### Criar novo registro

- **Ícone:** `listaIconNovo`
- **Ação:** `listaNovo`

Abre a tela de criação do registro correspondente ao diagrama.

### Copiar lista

- **Ícone:** `listaIconCopiar`
- **Ação:** `listaCopiar`

Copia todos os dados visíveis da lista para a área de transferência.

### Exportar lista

- **Ícone:** `listaIconExportar`
- **Ação:** `listaExportar`

Permite exportar os dados nos formatos:

- TXT
- CSV
- XLSX

### Imprimir lista

- **Ícone:** `listaIconImprimir`
- **Ação:** `listaImprimir`

Gera um relatório em PDF com os dados da lista.

Em alguns contextos, pode existir a versão:

- **Ícone:** `listaIconImprimirCompleto`
  que permite escolher entre impressão simples ou completa.

### Limite de registros por página

- **Ícone:** `listaIconLimite`
- **Ação:** `listaLimite`

Permite definir quantos registros serão exibidos por página (10, 25, 50, 100 ou todos).

### Legendas

- **Ícone:** `listaIconLegendas`
- **Ação:** `listaLegendas(nomeCustomizado)`

Exibe um modal com a explicação dos ícones e status da lista.

O parâmetro define qual conjunto de legendas personalizadas será utilizado.

> As legendas padrão sempre são exibidas.
> As legendas customizadas são adicionadas conforme o tipo de lista.

### Aplicar tudo (Diagramas)

- **Ícone:** `listaIconDiagramaAplicarTudo`
- **Ação:** `listaDiagramaAplicarTudo`

Disponível em listas de diagramas.
Aplica todas as mudanças pendentes de uma vez.

## Ações por linha (células)

Essas ações aparecem em cada registro da tabela.

### Imprimir registro

- **Ícone:** `listaCellIconImprimir`
- **Ação:** `listaCellImprimir`

### Editar registro

- **Ícone:** `listaCellIconEditar`
- **Ação:** `listaCellEditar`

### Visualizar registro

- **Ícone:** `listaCellIconVisualizar`
- **Ação:** `listaCellVisualizar`

### Remover registro

- **Ícone:** `listaCellIconRemover`
- **Ação:** `listaCellRemover`

## Ações especiais por tipo de lista

Algumas listas possuem comportamentos específicos.

### Diagramas

- Aplicar mudanças individualmente:

  * **Ícone:** `listaCellIconDiagramaAplicar`
  * **Ação:** `listaCellDiagramaAplicar`

O ícone muda de cor conforme o status do registro.

### Clientes

- Atualizar estrutura do banco:

  * **Ícone:** `listaCellIconClienteAtualizarBanco`
  * **Ação:** `listaCellClienteAtualizarBanco`

### Contratos

- Ativar contrato:

  * **Ícone:** `listaCellIconContratoAtivar`
  * **Ação:** `listaCellContratoAtivar`

### Módulos

- Liberar versão:

  * **Ícone:** `listaCellIconModuloLiberarVersao`
  * **Ação:** `listaCellModuloLiberarVersao`

## Exportações especiais

Algumas listas possuem exportação customizada, fora do padrão genérico.

### Perfis

- Copiar: `listaPerfilCopiar`
- Exportar: `listaPerfilExportar`
- Imprimir: `listaPerfilImprimir`

### Tabelas

- Copiar: `listaTabelaCopiar`
- Exportar: `listaTabelaExportar`
- Imprimir: `listaTabelaImprimir`

## Legendas

A sub-lib de **Legendas da Lista** define conjuntos de legendas específicas para determinados tipos de listas.

Essas legendas são usadas pelo método `listaLegendas(nome)` da lib Lista.

### Diagrama

`listaLegendasDiagrama`

Inclui:

- Ícone de aplicar mudanças no diagrama
- Status de pendência:

  * Aplicado
  * Diagrama e itens pendentes
  * Diagrama aplicado e itens pendentes

### Cliente

`listaLegendasCliente`

Inclui:

- Atualizar estrutura
- Status do registro (*"Ativo", "Inativo", "Suspenso" ou "Cancelado"*)

### Contrato

`listaLegendasContrato`

Inclui:

- Ativação do contrato
- Status da aplicação web

### Módulo

`listaLegendasModulo`

Inclui:

- Liberação de versão atual para o cliente

## Observações finais

- Na maioria dos casos, **nenhuma configuração manual é necessária**
- As listas já vêm completas ao definir o diagrama
- Esta lib existe para **customizações pontuais e comportamentos específicos**
- Alterações aqui afetam **todas as telas de listagem**
