create table if not exists article
(
    aid         bigint       not null primary key auto_increment,
    uid         bigint       not null,
    title       text  not null,
    tags        varchar(128) not null,
    img_url     varchar(128),
    content     text,
    create_time datetime     not null,
    update_time datetime     not null,
    hot tinyint default 0
);
