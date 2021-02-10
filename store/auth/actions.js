export default {
  async signup({commit}, payload) {
    try {
      const { message } = await this.$axios.$post("/api/auth/signup", payload)

      this.$toast.success(message, { duration: 3000 })
    } catch(e) {
      throw new Error(e.response?.data.message || e.message)
    }
  },
  async signin({commit}, payload) {
    try {
      const {data: {user, token}} = await this.$axios.$post("/api/auth/signin", payload)

      this.$cookies.set("token", token, {
        secure: process.env.NODE_ENV === "production",
        domain: process.env.NUXT_ENV_COOKIE_DOMAIN
      })

      this.$router.go(0)
    } catch(e) {
      throw new Error(e.response?.data.message || e.message)
    }
  },
  async me({commit}) {
    try {
      const cookieToken = this.$cookies.get("token")

      if(cookieToken) {
        const { data } = await this.$axios.$get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${cookieToken}`
          }
        })
        commit("setAuth", data)
      }
    } catch(e) {
      console.log(e.response?.data.message || e.message)
    }
  },
  async signout({commit}) {
    this.$cookies.remove("token")
  }
}
