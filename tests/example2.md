# Модальное окно поиска

## Прекондиция:
1. Открыть главную страницу playwright

## Степ 1:
### Действие: кликнуть на кнопку "Search"
### Ожидаемый результат: 
1. Открылось модальное окно

## Степ 2:
### Действие: проверить дефолтное состояние элементов модального окна
### Ожидаемый результат: 
1. Отображается поле для поиска
2. Отображается дескрипшн 'No recent searches'
3. Отображается футер модального окна

## Степ 3:
### Действие: ввести текст и проверить состояние элементов поиска
### Ожидаемый результат: 
1. Отображается крестик для очистки поля поиска
2. Отображается список по результатам поиска
3. Отображается кнопка 'See all...'

## Степ 4:
### Действие: нажать на кнопку крестик и проверить состояние элементов  модального окна
### Ожидаемый результат: 
1. Отображается поле для поиска
2. Отображается дескрипшн 'No recent searches'
3. Отображается футер модального окна

## Степ 5:
### Действие: ввести строку 'test' и кликнуть 'See all...'
### Ожидаемый результат: 
1. Происходи переход на страницу 'Search result'