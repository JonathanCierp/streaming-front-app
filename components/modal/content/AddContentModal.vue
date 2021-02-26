<template>
  <base-modal v-model="addContentModalOpen" animation="slide-down" class="add-content-modal" width="800px">
    <div class="add-content-modal__body">
      <h1 class="add-content-modal__title">Publication de contenu</h1>
      <custom-form ref="form" class="add-content-modal__form">
        <custom-form-input v-model="form.titre.value" :input="form.titre" :rules="form.titre.requiredRule" />
        <custom-form-input v-model="form.tag.value" :input="form.tag" />
        <div class="add-content-modal__payement-method">
          <button :class="[form.pricing.type === 'Gratuit' ? 'add-content-modal__payement-method--active' : '']"
                  type="button" @click="changePricing('Gratuit')">Gratuit
          </button>
          <button :class="[form.pricing.type === 'Payant' ? 'add-content-modal__payement-method--active' : '']"
                  type="button" @click="changePricing('Payant')">Payant
          </button>
        </div>
        <custom-form-input v-if="form.pricing.type === 'Payant'" v-model="form.pricing.price.value"
                           :input="form.pricing.price" />
        <div class="add-content-modal__row">
          <custom-radio v-model="form.myself" input-value="myself" label="Créer par moi seul" name="myself" />
          &nbsp;&nbsp;&nbsp;
          <custom-radio v-model="form.myself" input-value="creators" label="Ajouter un créateur"
                        name="myself" />
        </div>
        <div v-if="form.myself === 'creators'" class="add-content-modal__creators">
          <div v-for="(creator, i) in form.created" :key="i">
            <custom-form-input v-model="creator.name.value" :input="creator.name" :input-key="`${creator.key}-${i}`" />
            <custom-form-input v-model="creator.role.value" :input="creator.role" :input-key="`${creator.key}-${i}`" />
            <custom-checkbox v-model="creator.reverse" label="Reverser un gain au créateur" />
          </div>
          <button type="button" @click="addCreator">Ajouter un createur supplémentaire</button>
        </div>
      </custom-form>
    </div>
  </base-modal>
</template>

<script>
  export default {
    name: "add-content-modal",
    data() {
      return {
        form: {
          titre: {
            type: "text",
            placeholder: "Titre *",
            required: true,
            requiredRule: [
              v => !!v || "Champs titre obligatoire."
            ],
            value: null
          },
          tag: {
            type: "text",
            placeholder: "#",
            value: null
          },
          pricing: {
            type: "Gratuit",
            price: {
              type: "text",
              placeholder: "Prix",
              value: null
            }
          },
          myself: "creators",
          created: [
            {
              name: {
                type: "text",
                placeholder: "Nom",
                value: null
              },
              role: {
                type: "text",
                placeholder: "Rôle",
                value: null
              },
              reverse: true
            }
          ]
        }
      }
    },
    methods: {
      changePricing(type) {
        this.form.pricing.type = type
      },
      addCreator() {
        this.form.created = [...this.form.created, {
          name: {
            type: "text",
            placeholder: "Nom",
            value: null
          },
          role: {
            type: "text",
            placeholder: "Rôle",
            value: null
          },
          reverse: false
        }]
      }
    },
    computed: {
      addContentModalOpen: {
        get() {
          return this.$store.state.addContentModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleAddContentModal", v)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add-content-modal .add-content-modal__body {
    & .add-content-modal__title {
      @apply py-4 px-6 text-2xl font-medium border-b-2;
    }

    & .add-content-modal__form {
      @apply py-4 px-6;

      & .add-content-modal__payement-method {
        @apply flex;

        & button {
          @apply py-2 px-12;

          &:first-child {
            @apply rounded-l-md rounded-bl-md border-r-0;
          }

          &:last-child {
            @apply rounded-r-md rounded-br-md;
          }
        }
      }

      & .add-content-modal__row {
        @apply flex items-center my-8;
      }

      & .add-content-modal__creators {
        & button {
          @apply py-2 px-12 rounded-md my-6;
        }
      }
    }
  }

  .dark1-mode .add-content-modal .add-content-modal__body {
    & .add-content-modal__form {
      & .add-content-modal__payement-method {
        & button {
          @apply bg-background-secondary-dark1;

          &:hover {
            @apply bg-background-secondary-hover-dark1;
          }

          &.add-content-modal__payement-method--active {
            @apply bg-red-primary;
          }
        }
      }

      & .add-content-modal__creators {
        & button {
          @apply bg-background-secondary-dark1;

          &:hover {
            @apply bg-background-secondary-hover-dark1;
          }
        }
      }
    }
  }
</style>
