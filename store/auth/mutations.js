export default {
  setAuth(state, user) {
    state.user = user
    state.isLogged = !!user.uuid
  }
  /*setCurrentAuthInfo(state, v) {
    state.currentAuthInfo = v
  },
  changeAuthInputValue(state, { v, inputKey }) {
    state.currentAuthInfo.inputs.find(input => input.key === inputKey).value = v
  }*/
}
