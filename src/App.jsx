import React, { useState } from 'react';
import Header from './components/header/header';
import Form from './components/form/form';
import TotalMoney from './components/totalMoney/totalMoney';
import List from './components/list/list';

const App = () => {
  const [totalGastos, setTotalGastos] = useState(0);
  const [gastosList, setGastosList] = useState([]);

  const handleTotalGastosChange = (amount, tipoValor) => {
    if (tipoValor === 'despesa') {
      setTotalGastos((prevTotal) => prevTotal - amount);
    } else if (tipoValor === 'entrada') {
      setTotalGastos((prevTotal) => prevTotal + amount);
    }
  };

  const handleDelete = (index) => {
    const deletedGasto = gastosList[index];

    if (deletedGasto.tipoValor === 'entrada') {
      handleTotalGastosChange(deletedGasto.valor * -1, 'entrada');
    } else if (deletedGasto.tipoValor === 'despesa') {
      handleTotalGastosChange(deletedGasto.valor * -1, 'despesa');
    }

    setGastosList((prevList) => prevList.filter((item, i) => i !== index));
  };

  return (
    <>
      <Header />
      <Form
        handleTotalGastosChange={handleTotalGastosChange}
        gastosList={gastosList}
        setGastosList={setGastosList}
      />
      <TotalMoney totalGastos={totalGastos} gastosList={gastosList} />
      <List gastosList={gastosList} handleDelete={handleDelete}  />
    </>
  );
}

export default App;