show databases;
create database infob_db;
use mybd_db;
use infob_db;

show tables;
create table TB_TAREFA(

ID_TAREFA		INT primary key auto_increment,
DS_TAREFA		VARCHAR(400),
NR_ORDEM		INT,
BT_FINALIZADO	boolean,
DT_CADASTRO		DATE);

