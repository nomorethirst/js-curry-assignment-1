'use strict'

// returns {name: "aname", price: 0.0}
const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => carts
              .map( cart => {
                      return {
                        customer: cart.customer,
                        total: cart.items.reduce( (sum, cur) => sum + listedPrice(listings[listings.findIndex(l => l.name == cur)])(cur), 0)
                    }
              })


module.exports = {
  listing,
  cart,
  calculateTotals
}
