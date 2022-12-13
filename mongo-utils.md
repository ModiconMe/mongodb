### Database administration task
https://www.mongodb.com/docs/manual/reference/configuration-options/

`/etc/mongod.conf.orig` - путь конфига mongodb в Docker контейнере

### Backup database

В директории /data/db применяем команду:
`mongodump -u username -p password`

В директории /data/db/dump сохраняется бекап

Для восстановления БД из директории /data/db применяем команду:
`mongorestore dump/ -u username -p password`

### Authentication and Authorization

Authentication - кто может войти в систему, Authorization - что он может делать

Обычно делают одного User Administration, который создает других пользователей и назначает им права.

Users находятся в БД admin в коллекции system.users.

### Replication

Данные в MongoDB могут храниться на нескольких серверах (копии данных). Процесс управления и синхронизации данных
на разных серверах - Replication.

https://habr.com/ru/company/otus/blog/521302/

### Sharding

Стандартное горизонтальное масштабирование в MongoDB