import { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <div>Хоббі</div>
        <ul id="sixth">
          <li>Спорт</li>
          <li>Відео ігри</li>
          <li>Біг</li>
        </ul>

        <div>Улюблені фільми</div>
        <ol>
          <li>Той, хто біжить по лезу 2049, 2017</li>
          <li>Круті чуваки, 2016</li>
          <li>Сіра людина, 2020</li>
        </ol>

        <p>
          Гамбург - це захоплююче місто, яке поєднує в собі багатство історії з
          сучасністю. Розташований на берегу ріки Ельби, він славиться своєю
          живописною набережною, яка приваблює як туристів, так і місцевих
          жителів. Місто також вражає розмаїттям культурних подій, ресторанів і
          музеїв, що робить його ідеальним місцем для дослідження і відпочинку.
          Найбільший порт Німеччини надає місту особливий характер, а культурна
          сцена завжди жива та рухлива. Гамбург - це місто, яке завжди готове
          здивувати та захопити своїми чудовими можливостями і атмосферою.
        </p>
        <a href="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Hamburg_old_town.jpg">
          Посилання на фото
        </a>
        <a href="https://www.hamburg.de/">Посилання на офіційний сайт міста</a>
        <br />
        <img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Hamburg_old_town.jpg" />
        <br />
        <div>
          <button id="addButton">Додати</button>
          <button id="increaseButton">Збільшити</button>
          <button id="decreaseButton">Зменшити</button>
          <button id="deleteButton">Видалити</button>
        </div>
      </div>
    );
  }
}

export default Content;
