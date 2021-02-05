<template>
  <base-modal v-model="authModalOpen" animation="slide-down" class="auth-modal">
    <div class="auth-modal__card">
      <h1 class="auth-modal__card__title" v-html="currentItem.titleLabel" />
      <div v-if="errorMessage" class="auth-modal__card__error auth-modal__card__error--active">
        <div>
          <icon-outline-warning />
        </div>
        <p>{{ errorMessage }}</p>
      </div>
      <div class="auth-modal__card__icon" @click="authModalOpen = false">
        <icon-close />
      </div>
      <custom-form ref="form" class="auth-modal__card__form" @submit.prevent="currentItem.onClickSubmit">
        <custom-form-input v-for="input in currentItem.inputs" :key="input.key" ref="input" v-model="input.value"
                           :input="input" :rules="input.requiredRule" />
        <button class="auth-modal__card__form__action" type="submit" v-html="currentItem.buttonLabel" />
      </custom-form>
      <p class="auth-modal__card__meta">
        {{ currentItem.noAccountText }}
        <span @click="changeAuthModal(currentItem.noAccountSubClick)" v-html="currentItem.noAccountSubText" />
      </p>
    </div>
  </base-modal>
</template>

<script>
  export default {
    name: "auth-modal",
    data() {
      return {
        authInfos: [
          {
            key: "signin",
            titleLabel: "Me connecter",
            buttonLabel: "Connexion",
            noAccountText: "Vous n'avez pas de compte ?",
            noAccountSubText: "S'inscrire",
            noAccountSubClick: "signup",
            onClickSubmit: this.signinAuth,
            inputs: [
              {
                key: "signin_email",
                type: "text",
                placeholder: "Identifiant ou adresse mail *",
                required: true,
                requiredRule: [
                  v => !!v || "Identifiant ou adresse mail obligatoire.",
                  v => /.+@.+\..+/.test(v) || "L'adresse mail n'est pas valide."
                ],
                value: null
              },
              {
                key: "signin_password",
                type: "password",
                placeholder: "Mot de passe *",
                required: true,
                requiredRule: [v => !!v || "Mot de passe obligatoire."],
                value: null
              }
            ]
          },
          {
            key: "signup",
            titleLabel: "M'inscrire",
            buttonLabel: "Inscription",
            noAccountText: "Vous avez déjà un compte ?",
            noAccountSubText: "Me connecter",
            noAccountSubClick: "signin",
            onClickSubmit: this.signupAuth,
            inputs: [
              {
                key: "signup_pseudo",
                type: "text",
                placeholder: "Identifiant *",
                required: true,
                requiredRule: [v => !!v || "Idientifiant obligatoire."],
                value: null
              },
              {
                key: "signup_email",
                type: "text",
                placeholder: "Adresse mail *",
                required: true,
                requiredRule: [v => !!v || "Adresse mail obligatoire."],
                value: null
              },
              {
                key: "signup_password",
                type: "password",
                placeholder: "Mot de passe *",
                required: true,
                requiredRule: [v => !!v || "Mot de passe obligatoire."],
                value: null
              },
              {
                key: "signup_confirm_password",
                type: "password",
                placeholder: "Confirmez le mot de passe *",
                required: true,
                requiredRule: [v => !!v || "Confirmation de mot de passe obligatoire."],
                value: null
              }
            ]
          }
        ],
        currentAuthInfo: {},
        errorMessage: ""
      }
    },
    created() {
      this.currentAuthInfo = this.authInfosFilteredByKey("signin")
    },
    computed: {
      currentItem: {
        get() {
          return this.currentAuthInfo
        },
        set(v) {
          this.currentAuthInfo = v
        }
      },
      authModalOpen: {
        get() {
          return this.$store.state.authModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleAuthModal", v)
        }
      }
    },
    methods: {
      authInfosFilteredByKey(key) {
        return this.authInfos.find(info => info.key === key)
      },
      changeAuthModal(key) {
        this.errorMessage = null
        this.currentItem = this.authInfosFilteredByKey(key)
      },
      async signinAuth() {
        try {
          if(!this.$refs.form.validate()) {
            throw new Error("Formulaire de connexion invalide.")
          }

          await this.$store.dispatch("auth/signin", {
            identifiant: this.currentItem.inputs[0].value,
            password: this.currentItem.inputs[1].value
          })
        } catch(e) {
          this.errorMessage = e.response?.data.message || e.message
        }
      },
      async signupAuth() {
        try {
          if(!this.$refs.form.validate()) {
            throw new Error("Formulaire d'inscription invalide.")
          }

          if(this.currentItem.inputs[2].value !== this.currentItem.inputs[3].value) {
            throw new Error("Les mots de passes ne sont pas similaires.")
          }

          await this.$store.dispatch("auth/signup", {
            username: this.currentItem.inputs[0].value,
            email: this.currentItem.inputs[1].value,
            password: this.currentItem.inputs[2].value,
            confirm_password: this.currentItem.inputs[3].value
          })

          this.currentItem = this.authInfosFilteredByKey("signin")
        } catch(e) {
          this.errorMessage = e.response?.data.message || e.message
        }
      }
    }
  }
</script>

<style lang="scss">
  .auth-modal {
    & .auth-modal__card {
      @apply flex items-center justify-center flex-col rounded-2xl py-10 px-16 mx-auto relative;
      width: 450px;

      & .auth-modal__card__title {
        @apply text-center font-semibold text-3xl;
      }

      & .auth-modal__card__error {
        @apply hidden items-center justify-center w-full font-semibold p-4 bg-red-lighter text-red-primary border-red-primary mt-3;
        border: 3px solid;
        border-radius: 5px;
        font-size: .8rem;

        &.auth-modal__card__error--active {
          @apply flex;
        }

        & div {
          @apply w-5 h-5 mr-4;
        }
      }

      & .auth-modal__card__icon {
        @apply cursor-pointer absolute;
        top: 1rem;
        right: 0;
      }

      & .auth-modal__card__form {
        @apply w-full;

        & .auth-modal__card__form__action {
          @apply font-medium w-full rounded-full py-3 transition-colors duration-300;
        }
      }

      & .auth-modal__card__meta {
        @apply mt-6 select-none;

        & span {
          @apply underline cursor-pointer;
        }
      }
    }
  }

  .dark1-mode .auth-modal {
    & .auth-modal__card {
      & .auth-modal__card__form {
        & .auth-modal__card__form__action {
          @apply bg-background-secondary-dark1;

          &:hover {
            @apply bg-background-secondary-hover-dark1;
          }
        }
      }
    }
  }

  .dark2-mode .auth-modal {
    & .auth-modal__card {
      & .auth-modal__card__form {
        & .auth-modal__card__form__action {
          @apply bg-background-secondary-dark2;

          &:hover {
            @apply bg-background-secondary-hover-dark2;
          }
        }
      }
    }
  }

  .dark3-mode .auth-modal {
    & .auth-modal__card {
      & .auth-modal__card__form {
        & .auth-modal__card__form__action {
          @apply bg-background-secondary-dark3;

          &:hover {
            @apply bg-background-secondary-hover-dark3;
          }
        }
      }
    }
  }
</style>
