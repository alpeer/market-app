import { connect } from "react-redux"

const mapStateToProps = ({ cart }) => cart

const mapDispatchToProps = (dispatch) => ({
  onCountChange: ({ id, price, name }) =>
    (count) => dispatch({
      type: "cart/countChanged",
      payload: { id, count, price, name }
    })
})

export const cartConnector = connect(mapStateToProps, mapDispatchToProps)