class BuyVariants extends HTMLElement {
  constructor() {
    super()

    this.btnAddToCart = this.querySelector('button')
    this.variantInputs = this.querySelectorAll('input')

    this.btnAddToCart.addEventListener('click', e => {
      const cartItems = {
        items: [],
      }

      if (this.variantInputs.length) {
        this.variantInputs.forEach(variantInput => {
          const variantId = variantInput.dataset.id
          const variantQuantity = parseInt(variantInput.value)
          const lineItem = {
            id: variantId,
            quantity: variantQuantity,
          }
          if (variantQuantity > 0) {
            cartItems.items.push(lineItem)
          }
        })

        if (cartItems.length) {
          this.addToCart(this, cartItems)
        } else {
          this.querySelector('.error').innerHTML = `You need at least 1 item to add to the cart.`
        }
      }
    })
  }

  addToCart(domElement, cartItems) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    })
    .then(response => {
      return response.json()
    })
    .then(result => {
      if (result.status) {
        domElement.querySelector('.error').innerHTML = result.description
      } else {
        window.location.href = '/cart'
      }
    })
    .catch(error => {
      console.error('Cart add error:', error)
    })
  }
}

if (!customElements.get('buy-variants')) {
  customElements.define('buy-variants', BuyVariants)
}
