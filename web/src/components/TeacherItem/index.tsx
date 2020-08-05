import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/57299516?s=460&u=6e8d00282d792d29b6320f1445012b7eddeebb73&v=4" alt="Klayver Ximenes"/>
      <div>
        <strong>Klayver Ximenes</strong>
        <span>Ciclista</span>
      </div>
    </header>

    <p>
      Entusiasta da tecnologia e amante das duas rodas.
      <br /><br />  
      Apaixonado por computadores e por mostrar o valor de viver através dos pedais. Alguns litros de café convertidos em códigos e mais uns milhares de quilômetros transformados em horas de vida.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 60,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;