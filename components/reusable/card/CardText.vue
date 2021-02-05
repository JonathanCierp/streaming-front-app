<template>
	<div class="card-text">
		<div class="card-text__card">
			<img class="card-text__image" src="https://picsum.photos/300/150?random=2">
		</div>
		<div class="card-text__title">
			<icon-text />
			<h2>{{ card.title }}</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: "card-text",
		props: {
			card: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-text {
		width: 300px;
		min-width: 300px;

		& .card-text__card {
			@apply flex relative select-none;
			height: 150px;
		}

		& .card-text__title {
			@apply flex mt-3 font-medium;

			& svg {
				@apply flex mr-2;
			}
		}
	}

	.dark1-mode .card-text {
		& .card-text__card {
			@apply bg-background-primary-dark1;
		}

		& .card-text__title {
			@apply text-grey-dark1;
		}
	}

	.dark2-mode .card-text {
		& .card-text__card {
			@apply bg-background-primary-dark2;
		}

		& .card-text__title {
			@apply text-grey-dark2;
		}
	}

	.dark3-mode .card-text {
		& .card-text__card {
			@apply bg-background-primary-dark3;
		}

		& .card-text__title {
			@apply text-grey-dark3;
		}
	}
</style>
