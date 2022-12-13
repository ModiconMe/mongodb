## Installation

Используем
[docker compose](https://github.com/ModiconMe/mongodb/blob/main/docker-compose.yml)

Настройка на Debian
https://habr.com/ru/post/335772/

### Connect

* GUI Client (MongoExpress, DataGrip, MongoDB Compass)
* Mongo Shell

URL: **mongodb://localhost:27017 -u username -p password**
Shell command: **mongosh mongodb://localhost:27017 -u username -p password**

### Mongo Shell

Это JavaScript интерфейс, через который мы можем посылать команды в нашу БД.

* `db.help();` - все доступные команды
* `use database_name;` - создает или переключает на БД(если она уже существует)
* `db.dropDatabase();` - удаляет текущую БД
