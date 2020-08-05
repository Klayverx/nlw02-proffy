import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css'

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const  TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <article className="teacher-item">
    <header>
      <img src={teacher.avatar} alt={teacher.name}/>
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
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
        <strong>R$ {teacher.cost}</strong>
      </p>
      <a onClick={createNewConnection} target="_blank" href={`https://wa.me/${teacher.whatsapp}`}>
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </a>
    </footer>
  </article>
  );
}

export default TeacherItem;