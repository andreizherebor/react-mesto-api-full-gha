function PopupWithForm(props) {
    return (
      <div className={`popup popup_form_${props.name} ${props.isOpen ? `popup_opened`: ""}`} onMouseDown={props.onCloseClick}>
        <div className="popup__content">
          <form className="popup__form" name={props.form} onSubmit={props.onSubmit}>  
            <h2 className="popup__header">{props.title}</h2>
            {props.children}
            <button className="popup__save-button" type="submit" title="Сохранить">{props.buttonText}</button>
          </form>
          <button className="popup__close-button" type="button" title="Закрыть" onClick={props.onClose}/>
        </div>
      </div>
    )
  }
  
  export default PopupWithForm;

 