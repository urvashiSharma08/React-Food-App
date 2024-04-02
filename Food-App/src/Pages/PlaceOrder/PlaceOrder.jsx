import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Address' />
        <div className="multi-fields">
          <input type="text" placeholder='Street' />
          <input type="text" placeholder='City' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='State' />
          <input type="text" placeholder='Phone' />
        </div>
        <input type="text" placeholder='Pincode' />
      </div>
      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₨ {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₨ {getTotalCartAmount()=== 0 ? 0 : 50}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>₨ {getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount() + 50}</p>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
