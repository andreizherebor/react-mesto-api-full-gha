import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit" type="button" title="Обновить аватар" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name}/>
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" title="Редактировать профиль" onClick={props.onEditProfile}/>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" title="Добавить новую фотографию" onClick={props.onAddPlace}/>
      </section>

      <section className="elements">
        <ul className="elements__cards">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;