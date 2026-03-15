4) Banco de dados

Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:

- Um cliente pode ter um número ilimitado de telefones;
- Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
- A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;

Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo:

- Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
- Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
- Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);

Resposta:

Create Table Cliente(
Id long Primary Key,
Nome varchar(100) not null,
R_Social varchar(100) null,
Endereco varchar(100) not null,
Estado_Id int

Contraint FK_EstadoId
    Foreign Key (Estado_Id) References Estado(Id)
    On Delete Cascade
)

Create Table Telefone(
Id long Primary Key,
Numero varchar(11) not null,
Cliente_Id int,
TipoTelefone_Id int

Contraint FK_ClienteId
    Foreign Key (ClienteId_Id) References Cliente(Id)
    On Delete Cascade

Contraint FK_TipoTelefone
    Foreign Key (TipoTelefone_Id) References TipoTelefone(Id)
    On Delete Cascade
)

Create Table TipoTelefone(
Id long Primary Key,
NomeDoTipo varchar(20) not null,
)

Create Table Estado(
Id long Primary Key,
Codigo varchar(2)
)

Select e.Codigo, c.R_Social, t.Numero from Cliente c
inner join Estado e
on c.Estado_Id = e.Id
inner join Telefone t
on t.Cliente_Id = c.Id
where e.Codigo = "SP"