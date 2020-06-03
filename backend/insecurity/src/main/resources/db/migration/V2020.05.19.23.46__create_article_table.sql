create table if not exists article
(
    aid         bigint       not null primary key auto_increment,
    uid         bigint       not null,
    title       varchar(64)  not null,
    tags        varchar(128) not null,
    img_url     varchar(128),
    content     text,
    create_time varchar(64)     not null,
    update_time varchar(64)     not null
);
