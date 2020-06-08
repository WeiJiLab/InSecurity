create table if not exists user
(
    uid             bigint      not null primary key auto_increment,
    username        varchar(64) not null,
    email           varchar(64) not null,
    password        varchar(64) not null,
    token           varchar(64),
    create_time     datetime    not null,
    update_time     datetime    not null,
    last_login_time datetime,
    del tinyint default 0
);

