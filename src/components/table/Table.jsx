import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((acc, i) => {
    return acc + i.income;
  }, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <>
      <table border="1">
        <tr>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
        <tr>
          <td>{netIncomes[0].brand}</td>
          <td>{netIncomes[0].income}</td>
        </tr>
        <tr>
          <td>{netIncomes[1].brand}</td>
          <td>{netIncomes[1].income}</td>
        </tr>
        <tr>
          <td>{netIncomes[2].brand}</td>
          <td>{netIncomes[2].income}</td>
        </tr>
      </table>

      <p>Promedio de ingreso neto: {averageIncome.toFixed(2)}</p>
    </>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.array,
};

export default Table;
