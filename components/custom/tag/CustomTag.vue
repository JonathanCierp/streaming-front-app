<template>
  <div v-if="show" :class="[sizeClass, colorClass, hoverClass]" class="custom-tag" role="status">
		<span>
			<slot />
		</span>
  </div>
</template>

<script>
  const SIZE_CLASSES_MAP = {
    "xs": "custom-tag--xs",
    "sm": "custom-tag--sm",
    "md": "custom-tag--md",
    "lg": "custom-tag--lg",
    "xl": "custom-tag--xl"
  }

  export default {
    name: "custom-tag",
    props: {
      size: {
        type: String,
        default: "sm"
      },
      color: {
        type: String,
        default: "primary"
      },
      hover: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.show = true
    },

    computed: {
      sizeClass() {
        return SIZE_CLASSES_MAP[this.size] || "custom-tag--sm"
      },
      colorClass() {
        return `custom-tag--${this.color}`
      },
      hoverClass() {
        return this.hover ? "custom-tag--hover" : ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-tag {
    @apply inline-flex items-center cursor-pointer max-w-full outline-none overflow-hidden px-3 relative font-medium whitespace-no-wrap align-middle;
    line-height: 20px;
    text-decoration: none;
    transition-duration: .28s;
    transition-property: box-shadow, opacity;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);

    &.custom-tag--xs {
      border-radius: 8px;
      font-size: 10px;
      height: 16px;
    }

    &.custom-tag--sm {
      border-radius: 12px;
      font-size: 12px;
      height: 24px;
    }

    &.custom-tag--md {
      border-radius: 16px;
      font-size: 14px;
      height: 32px;
    }

    &.custom-tag--lg {
      border-radius: 27px;
      font-size: 16px;
      height: 54px;
    }

    &.custom-tag--xl {
      border-radius: 33px;
      font-size: 18px;
      height: 66px;
    }
  }

  .dark1-mode .custom-tag {
    &.custom-tag--primary {
      @apply bg-background-primary-dark1;
    }

    &.custom-tag--secondary {
      @apply bg-background-secondary-dark1;
    }

    &.custom-tag--hover:hover {
      @apply bg-background-secondary-hover-dark1
    }
  }

  .dark2-mode .custom-tag {
    &.custom-tag--primary {
      @apply bg-background-primary-dark2;
    }

    &.custom-tag--secondary {
      @apply bg-background-secondary-dark2;
    }

    &.custom-tag--hover:hover {
      @apply bg-background-secondary-hover-dark2
    }
  }

  .dark3-mode .custom-tag {
    &.custom-tag--primary {
      @apply bg-background-primary-dark3;
    }

    &.custom-tag--secondary {
      @apply bg-background-secondary-dark3;
    }

    &.custom-tag--hover:hover {
      @apply bg-background-secondary-hover-dark3
    }
  }
</style>
