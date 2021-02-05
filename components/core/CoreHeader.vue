<template>
  <header class="header">
    <nuxt-link to="/">
      <img :src="guessLogo" alt="Logo principale de la société du header">
    </nuxt-link>
    <nav class="header__nav">
      <ul class="header__nav__items">
        <core-header-item v-for="menu in menus" :key="menu.key" :item="menu" />
      </ul>
    </nav>
    <select v-model="$colorMode.preference" class="z-50 mr-3">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark1">Dark1</option>
      <option value="dark2">Dark2</option>
      <option value="dark3">Dark3</option>
    </select>
    <div class="header__actions">
      <div v-if="auth.isLogged">
        <v-popover class="header__actions__popover" offset="8">
          <div class="header__actions__popover__user">
            <img src="https://picsum.photos/200" :alt="`${auth.user.username} main picture`">
            <span>{{ auth.user.username }}</span>
          </div>

          <template slot="popover">
            <ul class="header__actions__popover__actions">
              <nuxt-link tag="li" to="/">Ma chaîne</nuxt-link>
              <li @click="onLogout">Déconnexion</li>
            </ul>
          </template>
        </v-popover>
      </div>
      <button v-else class="header__actions__account" type="button" @click="authModalOpen = true">
        Mon Compte
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    name: "core-header",
    data() {
      return {
        menus: [
          {
            key: "categories",
            label: "Catégories",
            to: "/categories",
            slider: true
          },
          {
            key: "lives-evenements",
            label: "Lives / Evènements",
            to: "/lives-evenements",
            slider: true
          },
          {
            key: "challenges",
            label: "Challenges",
            to: "/challenges",
            slider: true
          },
          {
            key: "rechercher",
            label: "Rechercher",
            to: "/research",
            slider: false
          }
        ]
      }
    },
    methods: {
      async onLogout() {
        await this.$store.dispatch("auth/signout")
        this.$router.go(0)
      }
    },
    computed: {
      authModalOpen: {
        get() {
          return this.$store.state.authModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleAuthModal", v)
        }
      },
      guessLogo() {
        return this.$colorMode.preference === "light" ? require("@/assets/img/logo-dark.png") : require("@/assets/img/logo-light.png")
      },
      auth() {
        return this.$store.state.auth
      }
    }
  }
</script>

<style lang="scss">
  .popover .popover-inner .header__actions__popover__actions li {
    @apply py-4 px-8 cursor-pointer;
  }

  .dark1-mode .popover {
    & .popover-inner {
      @apply bg-background-secondary-dark1 text-default-dark1;

      & .header__actions__popover__actions li:hover {
        @apply bg-background-secondary-hover-dark1;
      }
    }

    & .popover-arrow {
      @apply border-background-secondary-dark1;
    }
  }

  .dark2-mode .popover {
    & .popover-inner {
      @apply bg-background-secondary-dark2 text-default-dark2;

      & .header__actions__popover__actions li:hover {
        @apply bg-background-secondary-hover-dark2;
      }
    }

    & .popover-arrow {
      @apply border-background-secondary-dark2;
    }
  }

  .dark3-mode .popover {
    & .popover-inner {
      @apply bg-background-secondary-dark3 text-default-dark3;

      & .header__actions__popover__actions li:hover {
        @apply bg-background-secondary-hover-dark3;
      }
    }

    & .popover-arrow {
      @apply border-background-secondary-dark3;
    }
  }
</style>

<style lang="scss" scoped>
  .header {
    /* @TODO : Ajouter background light */
    @apply flex h-20 items-center px-8;

    & > a > img {
      width: 200px;
    }

    & .header__nav {
      @apply ml-8 h-full flex-grow;

      & .header__nav__items {
        @apply flex items-center h-full;
      }
    }

    & .header__actions {
      & .header__actions__account {
        /* @TODO : Ajouter background light */
        @apply text-lg px-8 py-4 transition-colors duration-200;

        /* @TODO : Ajouter background light */
        &:hover {
          //@apply bg-background-secondary-hover-dark1;
        }
      }

      & .header__actions__popover .header__actions__popover__user {
        @apply flex items-center justify-center cursor-pointer;

        & img {
          @apply w-12 h-12 rounded-full;
        }

        & span {
          @apply ml-3;
        }
      }
    }
  }

  .dark1-mode .header {
    @apply bg-background-primary-dark1;

    & .header__actions {
      & .header__actions__account {
        @apply bg-background-secondary-dark1;

        &:hover {
          @apply bg-background-secondary-hover-dark1;
        }
      }
    }
  }

  .dark2-mode .header {
    @apply bg-background-primary-dark2;

    & .header__actions {
      & .header__actions__account {
        @apply bg-background-secondary-dark2;

        &:hover {
          @apply bg-background-secondary-hover-dark2;
        }
      }
    }
  }

  .dark3-mode .header {
    @apply bg-background-primary-dark3;

    & .header__actions {
      & .header__actions__account {
        @apply bg-background-secondary-dark3;

        &:hover {
          @apply bg-background-secondary-hover-dark3;
        }
      }
    }
  }
</style>
