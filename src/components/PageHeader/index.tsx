import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string; // o ? mostra que é uma propriedade não obrigatória 
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {/* { props.description ? <p>{props.description}</p> : null } - se existe uma props.desc vamos mostrar o seu conteudo, se não mostra nulo - uma das formas de fazer isso*/}
        
        { props.description && <p>{props.description}</p> }
        {props.children}
      </div>

      
    </header>
  );
}

export default PageHeader;