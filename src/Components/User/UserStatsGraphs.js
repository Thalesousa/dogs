import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './UserStatsGraphs.module.css';

export function UserStatsGraphs({ data }) {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const totalAcessos = data.map(({ acessos }) =>
      Number(acessos).reduce((a, b) => a + b)
    );
    setTotal(totalAcessos);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
}
