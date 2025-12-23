---
outline: deep
---

# Libs

**Libs** são funções pré-definidas do sistema que podem ser utilizadas para **automatizar comportamentos em formulários, validações, gatilhos e consultas**.

Essas funções são escritas previamente em código e disponibilizadas para uso por meio de seus **identificadores**. Nem toda necessidade pode ser atendida por uma Lib existente; quando isso acontecer, é necessário solicitar a criação de uma nova função a um desenvolvedor.

Algumas Libs são executadas no **frontend** (durante a interação do usuário com o formulário), enquanto outras são executadas no **backend** (durante validações ou processamento de dados).
Essa diferença é indicada na documentação de cada função, quando relevante para o uso.

## Gatilhos

**Gatilhos** são funções que são executadas automaticamente quando o usuário interage com um campo do formulário, normalmente ao **sair do campo** (por exemplo, depois de digitar um valor).

Eles servem para:
- preencher outros campos automaticamente;
- buscar informações externas;
- gerar códigos, ordens ou links;
- validar dados de forma prática enquanto o usuário preenche o formulário.

---

### gatilhoCnpj()

Busca informações de uma empresa a partir do **CNPJ** informado e preenche automaticamente outros campos do formulário.

**Quando usar**  
Em formulários que possuam campo de CNPJ e que precisem preencher dados da empresa automaticamente.

**O que faz**
- Remove caracteres não numéricos do CNPJ.
- Verifica se o CNPJ possui 14 dígitos.
- Consulta os dados da empresa.
- Preenche automaticamente:
  - Razão Social
  - Nome Fantasia
  - Telefone Comercial
  - E-mail de contato
  - Endereço (CEP, rua, número, bairro, estado e município, quando encontrados)
- Em caso de erro:
  - limpa os campos relacionados;
  - exibe a mensagem de erro ao usuário.

---

### gatilhoCep()

Busca informações de endereço a partir do **CEP** informado.

**Quando usar**  
Em formulários que possuam campos de endereço baseados em CEP.

**O que faz**
- Remove caracteres não numéricos do CEP.
- Verifica se o CEP possui 8 dígitos.
- Consulta o endereço correspondente.
- Preenche automaticamente:
  - Endereço
  - Bairro
  - Estado
  - Município
- Em caso de CEP inválido ou erro na busca:
  - limpa os campos de endereço;
  - exibe uma mensagem de erro.

---

### gatilhoMenuModulo()

Gera automaticamente o **código do menu** com base no módulo selecionado.

**Quando usar**  
Em formulários de cadastro ou edição de menus.

**O que faz**
- Aguarda a seleção de um módulo válido.
- Busca o código correspondente ao módulo.
- Preenche automaticamente o campo `codigo`.
- Em caso de erro, exibe a mensagem retornada pelo sistema.

---

### gatilhoMenuPai()

Define automaticamente a **ordem** e o **link** de um menu com base no menu pai selecionado.

**Quando usar**  
Em menus que possuem hierarquia (menus filhos).

**O que faz**
- Busca a próxima ordem disponível para o menu pai selecionado.
- Gera automaticamente o link do menu com base no nome e no menu pai.
- Armazena temporariamente o nome do menu pai para uso interno.
- Em caso de erro, exibe a mensagem correspondente.

---

### gatilhoMenuNome()

Atualiza automaticamente o **link do menu** conforme o nome digitado.

**Quando usar**  
Em conjunto com menus que possuem link automático.

**O que faz**
- Gera o link a partir do nome informado.
- Caso exista um menu pai selecionado, o link é montado respeitando a hierarquia.
- O link é formatado automaticamente.

---

### gatilhoPainelModulo()

Gera automaticamente o **código** e a **ordem** de um painel com base no módulo selecionado.

**Quando usar**  
Em formulários de cadastro ou edição de painéis.

**O que faz**
- Aguarda a seleção de um módulo válido.
- Busca o código correspondente ao módulo.
- Define a próxima ordem disponível.
- Preenche os campos `codigo` e `ordem`.
- Em caso de erro, exibe a mensagem correspondente.

---

### gatilhoMunicipioEstado()

Limpa os campos de município ao alterar o estado.

**Quando usar**  
Em formulários onde município depende diretamente do estado selecionado.

**O que faz**
- Limpa automaticamente os campos de código e nome do município quando o estado muda.

---

### gatilhoMunicipioIBGE()

Busca automaticamente os dados de um município a partir do **código IBGE** ou do **nome**.

**Quando usar**  
Em cadastros de municípios vinculados a um estado.

**Como funciona**
- O gatilho pode ser usado tanto no campo de código quanto no campo de nome.
- O estado deve estar selecionado antes da busca.

**O que faz**
- Verifica se o estado foi selecionado.
- Busca o município correspondente com base no valor digitado.
- Preenche automaticamente:
  - Código do município
  - Nome do município
- Em caso de erro:
  - limpa os campos;
  - exibe a mensagem correspondente.
