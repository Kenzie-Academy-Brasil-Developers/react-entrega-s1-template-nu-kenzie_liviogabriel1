import React from 'react';
import styles from './style.module.scss';
import rectangle from '../../assets/rectangle.svg';
import rectangle2 from '../../assets/rectangle2.svg';

const List = ({ gastosList, handleDelete }) => {
  return (
    <div className={styles.container}>
      <h3 className={gastosList.length === 0 ? styles.h3Empty : ''}>Resumo financeiro</h3>
      {gastosList.length === 0 ? (
        <p className={styles.listEmpty}>Você ainda não possui nenhum lançamento</p>
      ) : (
        <ul>
          {gastosList.map((gasto, index) => (
            <li key={index} className={gasto.tipoValor === 'entrada' ? styles.entradaItem : null}>
              {gasto.tipoValor === 'entrada' && <img src={rectangle} alt='Rectangle' />}
              {gasto.tipoValor === 'despesa' && <img src={rectangle2} alt='Rectangle' />}
              <p>{gasto.descricao}</p>
              <p className={styles.value}>R${gasto.valor.toFixed(2)}</p>
              <span className={styles.typeValue}>{gasto.tipoValor === 'entrada' ? 'Entrada' : 'Despesa'}</span>
              <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;