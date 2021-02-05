export const state = () => ({
  authModalIsOpen: false,
  researchModalIsOpen: false
})

export const mutations = {
  toggleAuthModal(state, v) {
    state.authModalIsOpen = v
  },
  toggleResearchModal(state, v) {
    state.researchModalIsOpen = v
  }
}

export const actions = {

}

export const getters = {
  /*authInfosFilteredByKey: state => key => {
    return state.authInfos.find(info => info.key === key)
  }*/
}
