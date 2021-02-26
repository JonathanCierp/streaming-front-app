<template>
  <div class="custom-radio">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <input :id="inputId" type="radio" :checked="value === inputValue" :value="inputValue" :name="name" @input="onInput">
  </div>
</template>

<script>
  import { kebabify } from "@/utils"

  export default {
    name: "custom-radio",
    props: {
      value: {
        type: String
      },
      inputValue: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      }
    },
    methods: {
      onInput() {
        this.$emit("input", this.inputValue)
      }
    },
    computed: {
      inputId() {
        return this.label ? kebabify(this.label) : null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-radio {
    @apply flex items-center;

    & label {
      @apply cursor-pointer select-none mr-3;
    }

    & input{
      @apply cursor-pointer h-6 w-6 p-0 opacity-100 appearance-none rounded-sm bg-white relative transition-all duration-200 border-2 border-red-primary;

      &:checked {
        @apply border-2 border-red-primary bg-red-primary;

        &:before, &:after {
          @apply h-1 absolute bg-white;
          content: "";
        }

        &:before {
          width: 8px;
          top: 11px;
          left: 2px;
          transform: rotate(44deg);
        }

        &:after {
          width: 14px;
          top: 8px;
          left: 5px;
          transform: rotate(-55deg);
        }
      }

      &:focus {
        outline: none;
      }
    }
  }
</style>
