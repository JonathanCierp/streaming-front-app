<template>
  <div class="custom-table">
    <div class="custom-table__header">
      <div ref="headers" v-for="(header, i) in headers" :style="[maxWidthItems[i]]" :key="header">{{ header }}</div>
    </div>
    <div class="custom-table__body">
      <div ref="items" class="custom-table__row" v-for="(itemRow, i) in seeyableItems" :key="i">
        <div v-for="(item, j) in itemRow" :key="item" :style="[maxWidthItems[j]]">{{ item }}</div>
      </div>
    </div>
    <div class="custom-table__footer">
      <p class="custom-table__footer__info">
        Affichage de {{ defaultStartEntryNumber + 1 }} à {{ defaultEntryNumber }} sur {{ items.length }} éléments.
      </p>
      <div class="custom-table__footer__pagination">
        <button @click="changePage(currentPage - 1, 'previous')">Précédent</button>
        <p>Page {{ currentPage }} / {{ maxPage }}</p>
        <button @click="changePage(currentPage + 1, 'next')">Suivant</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "custom-table",
    props: {
      headers: {
        type: Array,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        maxWidthItems: [],
        seeyableItems: [],
        step: 5,
        currentPage: 1,
        maxPage: 0,
        defaultStartEntryNumber: 0,
        defaultEntryNumber: 0
      }
    },
    created() {
      this.defaultStartEntryNumber = this.step * this.currentPage - this.step
      this.defaultEntryNumber = this.step * this.currentPage
      this.seeyableItems = this.extractResult(this.defaultStartEntryNumber, this.defaultEntryNumber)
      this.maxPage = Math.ceil(this.items.length / this.step)
    },
    async beforeMount() {
      await this.$nextTick()
      this.recalcHeaderWidth()
      this.recalcItemWidth()
    },
    methods: {
      recalcHeaderWidth() {
        let i = 0
        this.$refs.headers.forEach(header => {
          if(this.maxWidthItems[i]) {
            let existMaxWidth = this.maxWidthItems[i].width.substr(0, this.maxWidthItems[i].width.length - 2)
            if(existMaxWidth >= header.offsetWidth) {
              this.maxWidthItems[i] = {
                width: existMaxWidth + "px"
              }
            }
          }else {
            this.maxWidthItems[i] = {
              width: header.offsetWidth + "px"
            }
          }

          i++
        })
      },
      recalcItemWidth() {
        this.$refs.items.forEach(itemRow => {
          let i = 0
          itemRow.children.forEach(item => {
            if(this.maxWidthItems[i]) {
              let existMaxWidth = this.maxWidthItems[i].width.substr(0, this.maxWidthItems[i].width.length - 2)
              if(existMaxWidth >= item.offsetWidth) {
                this.maxWidthItems[i] = {
                  width: existMaxWidth + "px"
                }
              }
            }else {
              this.maxWidthItems = [...this.maxWidthItems, {
                width: (parseInt(item.offsetWidth) + 5) + "px"
              }]
            }

            i++
          })
        })
      },
      extractResult(min, max) {
        let i = 0
        let results = []
        this.items.forEach(item => {
          if(i >= min && i < max) {
            results = [...results, [...item]]
          }

          i++
        })

        return results
      },
      changePage(page) {
        if(typeof page === "number" && page > 0 && page <= this.maxPage) {
          this.currentPage = page
          let limit = this.currentPage * this.step

          this.seeyableItems = this.extractResult(limit - this.step, limit)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-table {
    & .custom-table__header {
      @apply flex px-6;

      & > div {
        @apply py-5 flex-1;
      }
    }

    & .custom-table__body {
      & .custom-table__row {
        @apply flex px-6;

        & > div {
          @apply py-4 flex-1;
        }

      }
    }

    & .custom-table__footer {
      @apply flex py-5 px-6 items-center justify-between text-sm;

      & .custom-table__footer__pagination {
        @apply flex items-center;

        p {
          @apply mx-3;
        }

        button {
          @apply px-3 py-1;
        }
      }
    }
  }

  .dark1-mode .custom-table {
    @apply bg-background-primary-dark1;

    & .custom-table__body .custom-table__row:nth-child(odd) {
      @apply bg-background-secondary-dark1;
    }

    & .custom-table__footer button {
      @apply bg-background-secondary-dark1;

      &.custom-table__pagination--active:not(.custom-table__pagination--ellipsis), &:hover:not(.custom-table__pagination--ellipsis) {
        @apply bg-background-secondary-hover-dark1;
      }
    }
  }
</style>
