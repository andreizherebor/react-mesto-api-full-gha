function ImagePopup(props) {
    return (
      <div className={`popup popup_viewer ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.onCloseClick}>
        <div className="popup__container">
          <img className="popup__image" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''}/>
          <h2 className="popup__figcaption">{props.card ? props.card.name : ''}</h2>
          <button className="popup__close-button" type="button" title="Закрыть" onClick={props.onClose}/>
        </div>
      </div>
    )
  }
  
  export default ImagePopup;