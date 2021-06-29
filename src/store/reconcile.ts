const reconcile = (state, payload) => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
      case 'page':
        let currentPages = state[key]
        const rewritePages = {}

        for (let currentPage in currentPages) {
          const prevPage = currentPages[currentPage]
          const existPrevPage = Object.keys(prevPage).length

          if (existPrevPage) {
            rewritePages[currentPage] = prevPage

            trueState = {
              ...trueState,
              page: {
                ...currentPages,
                ...payload[key],
                ...rewritePages
              }
            }
          }
        }

        break

      case 'user':
        const currentUser = state[key]
        trueState = { ...trueState, user: currentUser }
        break

      case 'intermitence':
        const currentIntermitence = state[key]
        trueState = { ...trueState, intermitence: currentIntermitence }
        break

      case 'cart':
        const currentCart = state[key]
        trueState = { ...trueState, cart: currentCart }
        break

      default:
        break
    }
  });

  return trueState
}

export default reconcile
