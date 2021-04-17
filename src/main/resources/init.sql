create table if not exists `record` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `user` varchar(20) NOT NULL,
    `datetime` varchar(10) NOT NULL,
    `detail` varchar(100) DEFAULT NULL,
    `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `index_user_time` (`user`, `datetime`)
);