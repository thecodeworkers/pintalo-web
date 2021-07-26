const attributes = `
allPaUses(first: 1000000) {
  nodes {
    id
    name
    slug
    count
  }
}
allPaTypes(first: 1000000) {
  nodes {
    id
    name
    slug
    count
  }
}
allPaPresentations(first: 1000000) {
  nodes {
    id
    name
    slug
    count
  }
}
allPaBases(first: 1000000) {
  nodes {
    id
    name
    slug
    count
  }
}
paColors {
  nodes {
    id
    slug
    name
    count
  }
}
paClasses {
  nodes {
    name
    slug
    id
    count
  }
}
allPaMarcas {
  nodes {
    id
    name
    slug
    count
  }
}
`

export default attributes
