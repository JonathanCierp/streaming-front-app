<template>
  <base-modal v-model="researchCategoriesModalOpen" animation="slide-down" class="research-categories-modal" width="1000px">
    <div class="research-categories-modal__content">
      <section class="research-categories-modal__categories">
        <research-categories-header :input="inputCategories" label="Rechercher par Catégories :" search @search="onSearchCategories" />
        <div class="research-categories-modal__categories__items">
          <research-categories-categories-item v-for="itemsCategory in itemsCategoriesComputed" :key="itemsCategory.id" :item="itemsCategory"
                                               :selected="$store.state.researchCategoriesSelected.includes(itemsCategory.id)"
                                               @select="onSelectCategory" @unselect="onUnSelectCategory" />
        </div>
      </section>
      <section class="research-categories-modal__tags">
        <research-categories-header :input="inputTags" label="Rechercher par Tags :" search @search="onSearchTags" />
        <div class="research-categories-modal__tags__items">
          <research-categories-tags-item v-for="itemsTag in itemsTagsComputed" :key="itemsTag.key" :item="itemsTag"
                                               :selected="$store.state.researchTagsSelected.includes(itemsTag.key)"
                                         @select="onSelectTag" @unselect="onUnSelectTag" />
        </div>
      </section>
      <div class="research-categories-modal__actions">
        <button type="button" @click="onClose">
          Fermer
        </button>
        <button type="button">
          Filtrer
        </button>
      </div>
    </div>
  </base-modal>
</template>

<script>
  export default {
    name: "research-categories-modal",
    data() {
      return {
        inputCategories: {
          key: "research-categories",
          type: "text",
          placeholder: "Rechercher ...",
          value: null
        },
        itemsCategories: this.$store.state.category.categories,
        itemsCategoriesFiltered: [],
        inputTags: {
          key: "research-tags",
          type: "text",
          placeholder: "Rechercher ...",
          value: null
        },
        itemsTags: [
          {
            key: "video",
            icon: "icon-video",
            label: "Vidéo"
          },
          {
            key: "image",
            icon: "icon-image",
            label: "Image"
          },
          {
            key: "audio",
            icon: "icon-audio",
            label: "Audio"
          },
          {
            key: "text",
            icon: "icon-text",
            label: "Texte"
          }
        ],
        itemsTagsFiltered: []
      }
    },
    methods: {
      onClose() {
        this.$store.commit("toggleResearchIsFiltered", false)
        if(!this.$store.state.researchIsFiltered) {
          this.$store.commit("unSelectAllCategories")
          this.$store.commit("unSelectAllTags")
        }
        this.researchCategoriesModalOpen = false
      },
      onSearchCategories(v) {
        this.itemsCategoriesComputed = v
      },
      onSearchTags(v) {
        this.itemsTagsComputed = v
      },
      onSelectCategory(item) {
        this.$store.commit("selectCategories", item)
      },
      onUnSelectCategory(item) {
        this.$store.commit("unSelectCategories", item)
      },
      onSelectTag(item) {
        this.$store.commit("selectTags", item)
      },
      onUnSelectTag(item) {
        this.$store.commit("unSelectTags", item)
      }
    },
    computed: {
      researchCategoriesModalOpen: {
        get() {
          return this.$store.state.researchCategoriesModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleResearchCategoriesModal", v)
        }
      },
      itemsCategoriesComputed: {
        get() {
          return this.itemsCategoriesFiltered.length ? this.itemsCategoriesFiltered : this.itemsCategories
        },
        set(v) {
          this.itemsCategoriesFiltered = this.itemsCategories.filter(category => category.name.toLowerCase().includes(v))
        }
      },
      itemsTagsComputed: {
        get() {
          return this.itemsTagsFiltered.length ? this.itemsTagsFiltered : this.itemsTags
        },
        set(v) {
          this.itemsTagsFiltered = this.itemsTags.filter(tag => tag.label.toLowerCase().includes(v))
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-categories-modal .research-categories-modal__content {
    @apply m-4;

    & .research-categories-modal__categories, & .research-categories-modal__tags {
      & .research-categories-modal__categories__items, & .research-categories-modal__tags__items {
        @apply flex flex-wrap my-8;
      }
    }

    & .research-categories-modal__actions {
      @apply flex justify-end;
      & button {
        @apply font-medium py-3 px-6 transition-colors duration-300 ml-4;
      }
    }
  }

  .dark1-mode .research-categories-modal .research-categories-modal__content {
    & .research-categories-modal__actions {
      & button {
        @apply bg-background-secondary-dark1;

        &:hover {
          @apply bg-background-secondary-hover-dark1;
        }
      }
    }
  }

  .dark2-mode .research-categories-modal .research-categories-modal__content {
    & .research-categories-modal__actions {
      & button {
        @apply bg-background-secondary-dark2;

        &:hover {
          @apply bg-background-secondary-hover-dark2;
        }
      }
    }
  }

  .dark3-mode .research-categories-modal .research-categories-modal__content {
    & .research-categories-modal__actions {
      & button {
        @apply bg-background-secondary-dark3;

        &:hover {
          @apply bg-background-secondary-hover-dark3;
        }
      }
    }
  }
</style>
