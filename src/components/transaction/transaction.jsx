import PropTypes from "prop-types"
import css from "../transaction/transaction.module.css"

export const TransactionHistory = (transactions) =>{
    return(
        <table className={css.transactionHistory}>
  <thead>
    <tr className={css.test}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
{
    transactions.items.map(({id,amount,type,currency}) =>
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>

)
}
</tbody>
</table>
    )
}

PropTypes.PropTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.exact({
    id: PropTypes.string.isRequired,
    type:  PropTypes.string.isRequired,
    amount:  PropTypes.number.isRequired,
    currency:  PropTypes.string.isRequired,
})
    )
}