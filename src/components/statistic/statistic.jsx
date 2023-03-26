import PropTypes from "prop-types"
import css from "../statistic/statistic.module.css"

export const Statistic = ({title,data}) =>{

return(
    <section className={css.statistics} >
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
  { data.map(({id,label,percentage})=>
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
    )
  }
  </ul>
</section>
)
}

PropTypes.PropTypes={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      })
    )
}