import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      const cartPrice = cartList.map(
        eachCart => eachCart.price * eachCart.quantity,
      )
      const totalValue = cartPrice.reduce((acc, current) => acc + current)

      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-head">
            Order Total:<span className="total">{totalValue}/-</span>
            <p className="items-cart">{cartLength} Items in cart</p>
          </h1>

          <button type="button" className="check-out">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
