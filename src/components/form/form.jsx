import React, { useState } from 'react';
import styles from './style.module.scss';

const Form = ({ handleTotalGastosChange, gastosList, setGastosList }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipoValor, setTipoValor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!descricao || !valor || !tipoValor) {
      alert('Preencha todos os campos antes de adicionar a transação.');
      return;
    }

    const valorFloat = parseFloat(valor);

    const newGasto = {
      descricao: descricao,
      valor: valorFloat,
      tipoValor: tipoValor,
    };

    setGastosList((prevList) => [...prevList, newGasto]);

    if (tipoValor === 'despesa' || tipoValor === 'entrada') {
      handleTotalGastosChange(valorFloat, tipoValor);
    }

    setDescricao('');
    setValor('');
    setTipoValor('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor='descricao'>Descrição</label>
        <input
          type='text'
          id='descricao'
          placeholder='Digite aqui sua descrição'
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div>
        <label htmlFor='valor'>Valor (R$):</label>
        <input
          type='number'
          id='valor'
          placeholder='1'
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='tipoValor'>Tipo de Valor:</label>
        <select
          id='tipoValor'
          value={tipoValor}
          onChange={(e) => setTipoValor(e.target.value)}
        >
          <option value=''>Selecione</option>
          <option value='entrada'>Entrada</option>
          <option value='despesa'>Despesa</option>
        </select>
      </div>
      <button type='submit' className={styles.button}>Inserir valor</button>
    </form>
  );
};

export default Form;