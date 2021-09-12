import { GraphQlClient } from '@utils'
import { v4 as uuidv4 } from 'uuid';

const checkoutMutation = (user, billing, shipping, paymentMethod) => {

  return (`
  mutation Checkout {
    checkout(input: {
      billing: {
        address1: "${billing?.address_1}",
        city: "${billing?.city}",
        country: ${billing?.country},
        email: "${user?.email}",
        firstName: "${billing?.name}",
        lastName: "${billing?.lastname}"
        overwrite: true,
        phone: "${billing?.phone}",
        postcode: "${billing?.zipcode}",
        state: "${billing?.state}",
      },
      clientMutationId: "${uuidv4()}",
      isPaid: false
      paymentMethod: "${paymentMethod}",
      shipping: {
        address1: "${shipping?.address_1}",
        address2: "${shipping?.address_2}",
        city: "${shipping?.city}",
        country: ${shipping?.country},
        email: "${user?.email}",
        firstName: "${shipping?.name}",
        lastName: "${shipping?.lastname}"
        overwrite: true,
        phone: "${shipping?.phone}",
        postcode: "${shipping?.zipcode}",
        state: ""
      },
    }
      customerNote: "${user?.name} ${user?.lastname}, Teléfono: ${user?.phone}, CI ${user?.identification}, Correo: ${user?.email}",
      shipToDifferentAddress: true,
      shippingMethod: "delivery"
    }) {
      result
      order{
        orderNumber
      }
    }
  }
  `)
}

export default checkoutMutation
