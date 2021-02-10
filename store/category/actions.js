export default {
  async getCategories({ commit }) {
    try {
      const { data } = await this.$axios.$get("/api/categories")

      commit("setCategories", data)
    } catch(e) {
      throw new Error(e.response?.data.message || e.message)
    }
  }
}
