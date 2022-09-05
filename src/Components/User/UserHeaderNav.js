import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './../../Context/UserContext';

import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatistica } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';

export function UserHeaderNav() {
  const [mobile, useMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/conta/estatistica">
        <Estatistica />
        {mobile && 'Estatística'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>

      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
}
