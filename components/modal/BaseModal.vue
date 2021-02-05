<template>
	<article v-if="show && showDialog" :class="[fullscreenClass]" class="base-modal">
		<div v-if="!fullscreen" class="base-modal__overlay"></div>
		<transition :name="animation" @after-leave="onTransitionEnd">
			<div v-if="showBody" class="base-modal__content">
				<slot />
			</div>
		</transition>
	</article>
</template>

<script>
	export default {
		name: "base-modal",
		props: {
			value: {
				type: Boolean,
				default: false
			},
			animation: {
				type: String,
				default: "fade"
			},
			fullscreen: {
				type: Boolean,
				default: false
			}
		},
		model: {
			prop: "value",
			event: "click"
		},
		watch: {
			value: async function (v) {
				if(v) {
					this.showDialog = v
				}
				setTimeout(() => this.showBody = v, 200)
				document.querySelector("body").classList.toggle("ui-dialog--open")
			}
		},
		mounted() {
			this.show = true
		},
		data() {
			return {
				show: false,
				showDialog: this.value,
				showBody: this.value
			}
		},
		methods: {
			onTransitionEnd() {
				this.showDialog = false
			}
		},
		computed: {
			fullscreenClass() {
				return this.fullscreen ? "base-modal--fullscreen" : ""
			}
		}
	}
</script>

<style lang="scss" scoped>
	.base-modal {
		@apply fixed w-full h-full top-0 left-0 flex items-center justify-center z-50;

		& .base-modal__overlay {
			@apply absolute w-full h-full bg-gray-900 bg-background-overlay;
		}

		&.base-modal--fullscreen .base-modal__content {
			@apply h-screen w-screen;
		}

		/* @TODO : Ajouter background light */
		& .base-modal__content {
			@apply mx-auto rounded shadow-lg z-50 overflow-y-auto;
			width: 480px;
		}
	}

	.dark1-mode .base-modal {
		& .base-modal__content {
			@apply bg-background-primary-dark1;
		}
	}

	.dark2-mode .base-modal {
		& .base-modal__content {
			@apply bg-background-primary-dark2;
		}
	}

	.dark3-mode .base-modal {
		& .base-modal__content {
			@apply bg-background-primary-dark3;
		}
	}
</style>
