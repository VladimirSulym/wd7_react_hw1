import React from 'react';
import logo from './logo.svg';
import './App.css';


// Создать 2 компонента:
// - 1й функциональный, который выводит информацию о пользователе (ФИО, мыло, телефон, адрес), данные о пользователе
// компонент принимает через свои пропсы (props). Вывод информации оформить как угодно.
// - 2й компонент на основе класса, у которого есть state. Внутри стейта хранится информация о пользователе в
// соответствующих полях (ФИО, мыло, телефон, адрес). Классовый компонент должен внутри своего метода рендер
// отрисовывать функциональный компонент и передавать ему данные из стейта через пропсы функционального компонента.

export class UserInfo extends React.Component {// классовый React-компонент

  state = {
    fio: 'Михаил Иванов',
    email: 'kasjdh@mail.ru',
    tel: '+7 (495) 123-32-32',
    adds: 'Москва, Тверская - 10',
  };

  // state2 = {};
  //
  // HandleButtonClick = () => {
  //     for (let i in this.state) {
  //         this.state2[i] = this.state[i];
  //     }
  //     console.log(this.state2);
  //     UserInfo2(this.state2)
  // }


  render() {
    return (
        <div className="container">
          <h3 className="title">
            Информация о пользователе через class
          </h3>
          <div className="info">
            <div className="info__row">
              <div className="info__index">Имя</div>
              <div className="info__title">{this.state.fio}</div>
            </div>
            <div className="info__row">
              <div className="info__index">Email</div>
              <div className="info__title">{this.state.email}</div>
            </div>
            <div className="info__row">
              <div className="info__index">Телефон</div>
              <div className="info__title">{this.state.tel}</div>
            </div>
            <div className="info__row">
              <div className="info__index">Адрес</div>
              <div className="info__title">{this.state.adds}</div>
            </div>
          </div>
          {/*<input type="button" onClick={this.HandleButtonClick} value="показать информацию" />*/}
            <h3 className="title">
                Информация о пользователе через props
            </h3>
          <UserInfo2 state={this.state}/>
        </div>
    );
  }
}

function UserInfo2 (props) {
        return (
            <div className="info">
                <div className="info__row">
                    <div className="info__index">Имя</div>
                    <div className="info__title">{props.state.fio}</div>
                </div>
                <div className="info__row">
                    <div className="info__index">Email</div>
                    <div className="info__title">{props.state.email}</div>
                </div>
                <div className="info__row">
                    <div className="info__index">Телефон</div>
                    <div className="info__title">{props.state.tel}</div>
                </div>
                <div className="info__row">
                    <div className="info__index">Адрес</div>
                    <div className="info__title">{props.state.adds}</div>
                </div>
            </div>
        )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <userInfo />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
