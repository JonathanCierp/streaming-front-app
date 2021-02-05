<template>
  <div :class="[errorClass, noGuttersClass, noFocusClass, borderClass]" class="custom-form-input">
    <input :id="input.key" v-model="input.value" :data-required="input.required" :placeholder="input.placeholder"
           :style="[borderColorStyle]"
           :type="input.type" autocomplete="off" class="custom-form-input__el input--error" @input="onInput">
    <p v-if="!noErrors" class="custom-form-input__error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
  export default {
    name: "custom-form-input",
    props: {
      input: {
        type: Object,
        required: true
      },
      rules: {
        type: Array,
        default: () => []
      },
      noErrors: {
        type: Boolean,
        default: false
      },
      noGutters: {
        type: Boolean,
        default: false
      },
      noFocus: {
        type: Boolean,
        default: false
      },
      withBorder: {
        type: Boolean,
        default: false
      },
      borderColor: {
        type: String,
        default: "#FFF"
      }
    },
    data() {
      return {
        errorMessage: null,
        inputError: false
      }
    },
    methods: {
      onInput(e) {
        const v = e.target.value
        this.validate(v)
        this.$emit("input", v)
      },
      validate(v = null) {
        let value = v ? v : this.input.value
        if(this.input.required) {
          for(let rule of this.rules) {
            if(typeof rule(value) === "string") {
              this.errorMessage = rule(value)
              this.inputError = true
              break
            } else {
              this.inputError = false
            }
          }

          return !this.inputError
        }
      }
    },
    computed: {
      errorClass() {
        return this.inputError ? "custom-form-input--error" : ""
      },
      noGuttersClass() {
        return this.noGutters ? "custom-form-input--no-gutters" : ""
      },
      noFocusClass() {
        return this.noFocus ? "custom-form-input--no-focus" : ""
      },
      borderClass() {
        return this.withBorder ? "custom-form-input--with-border" : ""
      },
      borderColorStyle() {
        return {
          borderColor: this.borderColor
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-form-input {
    @apply flex items-center relative justify-center h-full my-8;

    &.custom-form-input--no-gutters {
      @apply my-0;
    }

    &:not(.custom-form-input--no-focus) .custom-form-input__el:focus {
      @apply shadow-outline;
    }

    &.custom-form-input--with-border .custom-form-input__el:focus {
      @apply border-2;
    }

    &.custom-form-input--error {
      & .custom-form-input__el {
        @apply border-2 border-red-primary;
      }

      & .custom-form-input__error-message {
        transform: translateY(110%);
      }
    }

    & .custom-form-input__el {
      @apply transition-colors duration-300 bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight h-full;
      z-index: 5;
    }

    & .custom-form-input__error-message {
      @apply absolute bottom-0 left-0 text-red-primary transition-transform duration-300 text-sm;
      transform: translateY(0);
      z-index: 4;
    }
  }

  .dark1-mode .custom-form-input {
    & .custom-form-input__el {
      @apply bg-background-secondary-dark1 text-default-dark1;
    }
  }

  .dark2-mode .custom-form-input {
    & .custom-form-input__el {
      @apply bg-background-secondary-dark2 text-default-dark2;
    }
  }

  .dark3-mode .custom-form-input {
    & .custom-form-input__el {
      @apply bg-background-secondary-dark3 text-default-dark3;
    }
  }
</style>
