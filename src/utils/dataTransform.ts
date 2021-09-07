const _getDeep = (data, deep) => {
  if (typeof deep === 'string') {
    data = data[deep];
  }

  if (Array.isArray(deep)) {
    for (let layer of deep) {
      data = data[layer]
    }
  }
  return data
}

const _compareArray = (data, comparison, key) =>{
  for(let item of data){
    if(item[key] === comparison) return true
  }
}

const getData = (data, type) => {
  switch (type) {
    case 'attributes':
      return data['attributes']['nodes']
    case 'categories':
      return data['productCategories']['nodes']
    default:
      let newData = _getDeep(data, type)
      if ('nodes' in newData) return newData.nodes
      return newData
  }
}

export const orderBy = (array, key, type = 'desc', deep = null) => {
  return array.sort((a, b) => {
    a = _getDeep(a, deep);
    b = _getDeep(b, deep);

    if (a[key] > b[key] && type === 'asc') return 1
    if (a[key] < b[key] && type === 'asc') return -1
    if (a[key] < b[key] && type === 'desc') return 1
    if (a[key] > b[key] && type === 'desc') return -1
    return 0
  })
}

export const filter = (nodes: Array<any>, comparison, key, deep = null) => {

  const nodeFilter = (node) => {
    let validation = true
    let validFilter = false
    let deeps = _getDeep(node, deep)
    let select = deeps[key]
    validFilter = select === comparison
    if (typeof select === 'string') validFilter = select.toLowerCase().includes(comparison.toLowerCase())
    if (Array.isArray(deeps)) validFilter = _compareArray(deeps, comparison, key)
    return validation && validFilter
  }

  return (comparison) ? nodes.filter(nodeFilter) : nodes
}

export const simplifyArray = (array) => {
  let indexes = []
  return array.filter((item) => {
    const id = item?.translation?.id
    if (!indexes.includes(id)) {
      indexes.push(id)
      return true
    }
  })
}

export const productFilter = (nodes: Array<any>, comparison, key) => {
  const nodeFilter = (node) => {
    let validation = true
    let validFilter = false
    for (let type of Object.keys(comparison)) {
      let select = getData(node, type)
      for (let value of select) {
        if (type !== 'attributes') {
          for (let compare of comparison[type]) {
            if (value[key] === compare) {
              validFilter = true
              break;
            }
          }
        }
        if (type === 'attributes') {
          for (let compare of comparison[type]) {
            for (let option of value.options) {
              if (option.toLowerCase() === compare.toLowerCase()) {
                validFilter = true;
                break;
              }
            }
          }
        }
      }
    }
    return validation && validFilter
  }
  return (nodes.length > 1) ? nodes.filter(nodeFilter) : nodes
}

export const reduceVariation = (nodes, variation) => {

  const reduceFunc = (prev, next, index) => {
    let valid = true
    if (index === 1) {
      for (let attr of prev.attributes.nodes)
        for (let variant in variation) {
          if (attr.name.includes(variant)) {
            valid = valid && attr.value.toLowerCase() === variation[variant].toLowerCase()
          }
        }
      if (valid) return prev
    }
    for (let attr of next.attributes.nodes) {
      for (let variant in variation) {
        if (attr.name.includes(variant)) {
          const validResult = attr.value.toLowerCase() === variation[variant].toLowerCase()
          valid = (index === 1) ? validResult : valid && validResult
        }
      }
    }
    return (valid) ? next : prev
  }

  return (nodes?.length > 1) ? nodes?.reduce(reduceFunc) : nodes[0]
}
