export const state = () => ({
  authModalIsOpen: false,
  researchModalIsOpen: false,
  researchCategoriesModalIsOpen: false,
  researchIsFiltered: false,
  researchCategoriesSelected: [],
  researchTagsSelected: []
})

export const mutations = {
  toggleAuthModal(state, v) {
    state.authModalIsOpen = v
  },
  toggleResearchModal(state, v) {
    state.researchModalIsOpen = v
  },
  toggleResearchCategoriesModal(state, v) {
    state.researchCategoriesModalIsOpen = v
  },
  toggleResearchIsFiltered(state, v) {
    state.researchIsFiltered = v
  },
  selectCategories(state, item) {
    state.researchCategoriesSelected = [...state.researchCategoriesSelected, item.id]
  },
  unSelectCategories(state, item) {
    state.researchCategoriesSelected = state.researchCategoriesSelected.filter(category => category.id !== item.id)
  },
  unSelectAllCategories(state) {
    state.researchCategoriesSelected = []
  },
  selectTags(state, item) {
    state.researchTagsSelected = [...state.researchTagsSelected, item.key]
  },
  unSelectTags(state, item) {
    state.researchTagsSelected = state.researchTagsSelected.filter(tag => tag.key !== item.key)
  },
  unSelectAllTags(state) {
    state.researchTagsSelected = []
  }
}

export const actions = {

}

export const getters = {
  /*authInfosFilteredByKey: state => key => {
    return state.authInfos.find(info => info.key === key)
  }*/
}
