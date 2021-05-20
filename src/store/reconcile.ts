const reconcile = state => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
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
