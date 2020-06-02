alter table insecurity.user add column del tinyint default 0;
alter table insecurity.article add column hot tinyint default 0;

update insecurity.user set del = 1 where uid = 3;
