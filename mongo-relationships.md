### Normalized Data Models
![embedded-data-models](https://github.com/ModiconMe/mongodb/blob/main/images/embedded-data-models.png)

![normalized-data-models](https://github.com/ModiconMe/mongodb/blob/main/images/normalized-data-models.png)

#### Когда какую модель использовать ?

Embedded data models:
* One-to-One Relationships
* One-to-Many Relationships
* Лучшая производительность при чтении

  Normalized data models:
* Many-to-Many Relationships
* Большие, иерархические сложные дата сеты 
* Когда embedded приводит к дублированию данных, но скорость чтения данных не увеличивается