import { connect } from "react-redux"

const mapStateToProps = ({ cart: { items } }, { id }) =>
  ({ count: items[id]?.count })

const mapDispatchToProps = (dispatch, { id, price, name }) => ({
  onCountChange: count =>
    dispatch({
      type: "cart/countChanged",
      payload: { id, count, price, name }
    })
})

export const productCardConnector = connect(mapStateToProps, mapDispatchToProps)
