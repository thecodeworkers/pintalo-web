const reconcile = (state, payload) => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
      case 'page':
        let currentPages = state[key]
        const allPages = {}

        for (let currentPage in currentPages) {
          const page = currentPages[currentPage]
          const exist = Object.keys(page).length

          if (exist) {
            allPages[currentPage] = page

            trueState = {
              ...trueState,
              page: {
                ...currentPages,
                ...payload[key],
                ...allPages
              }
            }
          }
        }

        break

      case 'user':
        const currentUser = state[key]
        trueState = { ...trueState, user: currentUser }
        break

      default:
        break
    }
  });

  return trueState
}

export default reconcile
