create table if not exists user
(
    uid             bigint      not null primary key auto_increment,
    username        varchar(64) not null,
    email           varchar(64) not null,
    password        varchar(64) not null,
    token           varchar(64),
    create_time     varchar(64)    not null,
    update_time     varchar(64)    not null,
    last_login_time varchar(64)
);

