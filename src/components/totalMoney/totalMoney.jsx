import React from 'react';
import styles from './style.module.scss';

const TotalMoney = ({ totalGastos }) => {
  return (
    <div className={styles.container}>
      <p>Valor total: <span>R${totalGastos.toFixed(2)}</span></p>
      <p className={styles.textBalance}>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;