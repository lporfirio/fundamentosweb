alter table empresas modify cnpj varchar(14);

insert into empresas (nome, cnpj)
values
    ('Bradesco', 345617435),
    ('Vale', 342423561),
    ('Cielo', 9034860324);


select * from empresas


desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values 
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);