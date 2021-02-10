const getters = {
  cardsCategories: (state) => {
    return state.categories.map(category => {
      return {
        ...category,
        type: "category"
      }
    })
  }
}

export default getters
