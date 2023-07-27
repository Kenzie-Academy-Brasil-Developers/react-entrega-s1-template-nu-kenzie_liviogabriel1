import React from 'react';
import styles from './style.module.scss';
import rectangle from '../../assets/rectangle.svg';

const List = ({ gastosList, handleDelete }) => {
    return (
      <div className={styles.container}>
        <h3>Resumo financeiro</h3>
        <ul>
          {gastosList.map((gasto, index) => (
            <li key={index} className={gasto.tipoValor === 'entrada' ? styles.entradaItem : null}>
              {gasto.tipoValor === 'entrada' && <img src={rectangle} alt='Rectangle' />}
              <p>{gasto.descricao}</p>
              <p className={styles.value}>R${gasto.valor.toFixed(2)}</p>
              <span className={styles.typeValue}>{gasto.tipoValor === 'entrada' ? 'Entrada' : 'Despesa'}</span>
              <span className={styles.delete} onClick={() => handleDelete(index)}>Excluir</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default List;