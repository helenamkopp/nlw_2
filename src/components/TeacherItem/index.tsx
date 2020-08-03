import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Professora 1" />
        <div>
          <strong>Maria Silva</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Professor ou docente é uma pessoa que ensina ciência, arte, técnica ou outros conhecimentos. <br></br> Para o exercício dessa profissão,
          requer-se qualificações académicas e pedagógicas, para que consiga transmitir/ensinar da melhor forma possível ao aluno.
          </p>

      <footer>
        <p>Preço/hora
            <strong>R$ 80,00</strong> </p>
        <button type="button">
          <img src={whatsIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )

}

export default TeacherItem;