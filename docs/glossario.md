# Glossário


## A

### Auto-relações (banco de dados)
Relacionamentos em que uma tabela se relaciona com ela mesma.  
São usados quando um registro pode depender ou apontar para outro registro da **mesma tabela**, como hierarquias (ex.: item pai e item filho).


## B

### Backend
Parte do sistema responsável pelo processamento das regras, validações, integrações e acesso ao banco de dados.  
Funciona “por trás” da interface, sem interação direta do usuário.

### Bloqueado
Estado que indica se um registro ou estrutura pode ou não ser alterado.  
Quando marcado como bloqueado, impede edições, exclusões ou outras ações, conforme a regra aplicada.

### Booleano
Tipo de dado que aceita apenas dois valores possíveis: **verdadeiro** ou **falso**.


## C

### Chave estrangeira (banco de dados)
Campo que faz referência à **chave primária** de outra tabela.  
É usada para criar relacionamentos entre tabelas e garantir a integridade dos dados.

### Chave primária (banco de dados)
Campo que identifica **unicamente** cada registro de uma tabela.  
Não pode se repetir e não pode ser nulo.

### Chave de exibição (diagrama item)
Campo definido para representar visualmente um registro em seleções, listas ou relações.  
É o valor que o usuário vê ao escolher ou identificar um item relacionado.

### Coluna (banco de dados)
Estrutura que define um campo dentro de uma tabela.  
Cada coluna possui um tipo de dado e armazena uma informação específica de cada registro.


## E

### Exclusividade dos registros

Regra que controla **quem pode acessar determinados registros**, com base na empresa e/ou filial associadas ao usuário.

Cada registro pode:

- ser **compartilhado** (acessível por qualquer empresa ou filial);
- ser exclusivo de uma **empresa específica**;
- ou ser exclusivo de uma **filial específica**.

O acesso é determinado automaticamente conforme as permissões configuradas para o perfil do usuário, garantindo que cada pessoa veja apenas os dados que lhe dizem respeito.


## F

### Função
Bloco de lógica reutilizável que executa uma ação específica.  
No sistema, funções são usadas em **Libs**, validações, gatilhos e comportamentos automáticos.

### Frontend
Parte do sistema com a qual o usuário interage diretamente.  
Inclui telas, formulários, listas, botões e outros elementos visuais.


## M

### Menu suspenso
Componente de interface que apresenta uma lista de opções ao ser clicado.  
Também conhecido como *dropdown*.


## N

### Nome da relação (banco de dados)
Identificador dado a um relacionamento entre tabelas.  
É usado internamente para diferenciar e gerenciar as ligações entre estruturas relacionadas.


## P

### Parâmetro (função)
Valor passado para uma função no momento em que ela é chamada.  
Parâmetros permitem que uma mesma função tenha comportamentos diferentes dependendo do uso.


## R

### Regex
Abreviação de *regular expression* (expressão regular).  
Usada para validar ou identificar padrões em textos, como formatos de e-mail, números ou códigos.


## S

### SQL Server
Sistema de gerenciamento de banco de dados relacional utilizado pelo sistema.  
É responsável por armazenar, organizar e consultar os dados.


## T

### Tabela (banco de dados)
Estrutura que armazena dados de forma organizada em linhas e colunas.  
Cada tabela representa um conjunto de registros do mesmo tipo.

### Tabela estrangeira (banco de dados)
Tabela que é referenciada por outra por meio de uma **chave estrangeira**.  
Ela fornece os dados relacionados utilizados na relação.

### Tabela genérica

Tipo especial de tabela usada para **cadastrar listas de valores configuráveis**, definidas diretamente pelo usuário.

Ela permite:

- criar um **item principal** (com chave e descrição);
- adicionar, editar ou remover **vários valores associados** a esse item, tudo no mesmo formulário.

Essas tabelas são usadas quando o sistema precisa de **listas personalizáveis**, sem exigir conhecimento técnico ou estrutura fixa do banco de dados.


## U

### Unicode
Padrão de codificação de caracteres que permite representar textos de diversos idiomas e símbolos.  
Garante compatibilidade com acentos, caracteres especiais e alfabetos diferentes.


## V

### Variável
Elemento que armazena um valor que pode ser utilizado e alterado ao longo de uma execução.  
É usada para guardar dados temporários ou resultados intermediários.
