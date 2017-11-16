import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const AboutPage = () => (
  <div>
    <h1 className="about-page__title">Одностраничное приложение для просмотра issues с выбраного репозитория на Github.</h1>
    <p><u>В данном примере реализован следующий функционал:</u></p>
    <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>Поле ввода для указания имени пользователя и названия репозитория</ListGroupItemHeading>
          <ListGroupItemText>Данные не нужно загружать, пока не будет нажата кнопка «Поиск». Каждое обращение должно отображаться с указанием номера, названия, даты открытия.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem active>
          <ListGroupItemHeading>Пейджинг для обращений</ListGroupItemHeading>
          <ListGroupItemText>Убедитесь, что загружаются только те данные, которые отображаются. Предусмотрите возможность выбора количества объектов отображаемых на странице.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Обработка и индикация ошибок в интерфейсе</ListGroupItemHeading>
          <ListGroupItemText>Реализуйте отображение состояния загрузки обращений с сервера.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem active>
          <ListGroupItemHeading>Автодополнение в поле ввода</ListGroupItemHeading>
          <ListGroupItemText>Измените поле ввода таким образом, чтобы после указания имени пользователя появлялся список автодополнения из существующих репозиториев выбранного пользователя. Загружать обращения нужно сразу после выбора в списке автодополнения.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Роутинг</ListGroupItemHeading>
          <ListGroupItemText>Сделайте страницу детального просмотра обращений отображаемую информацию выберите сами.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem active>
          <ListGroupItemHeading>Вывод автора</ListGroupItemHeading>
          <ListGroupItemText>Для каждого обращения выведите автора не просто в виде имени, а с указанием его аватарки и со ссылкой на его Github-профиль.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem active>
          <ListGroupItemHeading>Дизайн</ListGroupItemHeading>
          <ListGroupItemText>Стилистически законченный вид приложения.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Тесты</ListGroupItemHeading>
          <ListGroupItemText>Напишите тесты на базовую функциональность.</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
  </div>
)

export default AboutPage;