## Architecture

### Collection
Mongo хранит documents (записи в БД) в collections (таблицы)

![mongo-collection-documents](https://github.com/ModiconMe/mongodb/blob/main/images/mongo-collection-documents.png)

### Documents

Mongo хранит записи как BSON объекты - бинарный JSON.

![mongo-json](https://github.com/ModiconMe/mongodb/blob/main/images/mongo-json.png)

![bson-datatypes](https://github.com/ModiconMe/mongodb/blob/main/images/bson-datatypes.png)

* `db.collection_name.insertOne(row);` - добавляет запись в таблицу (row json объект или переменная)
* `db.collection_name.insertMany(row);` - добавляет массив записей в таблицу
* `db.collection_name.countDocuments();` - возвращает кол-во documents в collection
* `db.collection_name.find();` - возвращает все записи таблицы

#### ObjectId

Id который состоит из 12 байт
* Первые 4 байта - кол-во секунд с 1 января 1980.
* Следующие 5 байт - случайное число.
* Последние 3 байта - случайное значение счетчика.

Генерируется автоматически базой данных в колонку **_id**. 
Можно вызвать getTimestamp() чтобы получить дату создания.


#### Find

![find-example](https://github.com/ModiconMe/mongodb/blob/main/images/find-example.png)

![find-shell](https://github.com/ModiconMe/mongodb/blob/main/images/find-shell.png)

![query-selectors](https://github.com/ModiconMe/mongodb/blob/main/images/query-selectors.png)

* `db.student.find({firstName: 'Cally'}, {firstName: 1, lastName: 1, gender: 1})` -
первый json это условие поиска, второй колонки которые надо включить (чтобы исключить колонку то 0)

* `db.student.find({$or: [{firstName: 'Cally'}, {totalSpentInBooks: {$gt: 0}}]}, {firstName: 1, lastName: 1, gender: 1})` -
условие или

* `db.student.find({favouriteSubjects: {$in: ['it', 'maths']}}, {favouriteSubjects: 1})` - условие in

##### Cursor modifier

Find метод возвращает объект типа Cursor (аналог курсора итератора).

`var cursor = db.student.find()` - присваиваем курсор

У курсора есть различные методы:
* `next()`
* `hasNext()`
* `count()`
* `limit()`
* `skip()`
* `sort({firstName: 1, country: -1})`  1 asc, -1 desc, можно несколько колонок для сортировки через запятую
* `db.student.find().forEach(function(student) {print("Student id - " + student._id)})` - 

#### Update

* `db.student.updateOne()` - обновление одного объекта
* `db.student.updateMany()` - обновление многих объектов
* `db.student.updateOne({_id: ObjectId("6396ccaab2a95bf0ce7d7484")}, {$set: {firstName: 'Maria'}})` - обновляем firstName на Maria у объекта с _id ObjectId("6396ccaab2a95bf0ce7d7484")
* `db.student.updateOne({_id: ObjectId("6396ccaab2a95bf0ce7d7484")}, {$unset: {lastName: 1}})` - убираем lastName
* `db.student.updateMany({}, {$inc: {totalSpentInBooks: 500}})` - обновляем всех студентов и увеличивает поле totalSpentInBooks на 500
* `db.student.updateOne({_id: ObjectId("6396ccaab2a95bf0ce7d7484")}, {$pull: {favouriteSubjects: 'it'}})` - убираем значение 'it' из массива favouriteSubjects
* `db.student.updateOne({_id: ObjectId("6396ccaab2a95bf0ce7d7484")}, {$push: {favouriteSubjects: 'it'}})` - добавляем значение 'it' в массив favouriteSubjects

#### Delete

* `db.student.deleteOne({_id: ObjectId("6396ccaab2a95bf0ce7d7484")})` - удаляем студента по указанным критериям
* `db.student.deleteMany({gender: 'M'})` - удаляем массив студентов по указанным критериям

#### Indexes

`db.student.createIndex({firstName: 1})` - создаем индекс на колонку firstName 1 asc, -1 desc
`db.student.dropIndex({firstName: 1})` - удаляем индекс на колонку firstName

