<template>
  <div class="research-header">
    <div class="research-header__bar">
      <div class="research-header__bar__input">
        <custom-form-input :input="input" border-color="currentColor" no-errors no-focus no-gutters with-border />
      </div>
      <button class="research-header__bar__categories" type="button" @click="researchCategoriesModalOpen = true">
        Toutes Catégories
      </button>
      <button class="research-header__bar__delete" type="button" @click="deleteInputValue">
        <icon-close-arrow />
      </button>
    </div>
    <div class="research-header__close" @click="researchModalOpen = false">
      <icon-close />
      <span>Fermer</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "research-header",
    props: {
      input: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      deleteInputValue() {
        this.input.value = ""
      }
    },
    computed: {
      researchModalOpen: {
        get() {
          return this.$store.state.researchModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleResearchModal", v)
        }
      },
      researchCategoriesModalOpen: {
        get() {
          return this.$store.state.researchCategoriesModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleResearchCategoriesModal", v)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-header {
    @apply flex items-center relative;

    & .research-header__bar {
      @apply mx-auto flex items-center;
      width: 800px;

      & .research-header__bar__input {
        @apply flex-grow mr-4;
        height: 65px;
      }

      & .research-header__bar__categories {
        @apply p-3 ml-auto mr-4;
      }

      & .research-header__bar__delete {
        @apply p-3 mr-4;
      }
    }

    & .research-header__close {
      @apply flex items-center absolute font-medium text-2xl cursor-pointer right-0;

      & svg {
        @apply mr-4;
      }
    }
  }

  .dark1-mode .research-header {
    & .research-header__bar {
      @apply bg-background-secondary-dark1;

      & .research-header__bar__categories, & .research-header__bar__delete {
        @apply bg-background-primary-dark1;
      }
    }
  }

  .dark2-mode .research-header {
    & .research-header__bar {
      @apply bg-background-secondary-dark2;

      & .research-header__bar__categories, & .research-header__bar__delete {
        @apply bg-background-primary-dark2;
      }
    }
  }

  .dark3-mode .research-header {
    & .research-header__bar {
      @apply bg-background-secondary-dark3;

      & .research-header__bar__categories, & .research-header__bar__delete {
        @apply bg-background-primary-dark3;
      }
    }
  }
</style>
