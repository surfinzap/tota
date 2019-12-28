<template lang="pug">
	.translit-app
		.container
			.translit-app__action-panel
				.translit-app__title
					h1 translit
				.translit-app__actions
					.translit-app__actions-label transliteruj
					button.btn.btn--cta.translit-app__action(v-on:click='actionLatCyr') do azbuky
					button.btn.btn--cta.translit-app__action(v-on:click='actionCyrLat') do latinky
			textarea.translit-app__textarea(placeholder='Vlož text k transliterácii' autofocus v-model='translit_text') {{ translit_text }}
</template>


<script>
import { translitCyrLat, translitLatCyr } from 'translit-rue';

export default {
	data() {
		return {
			translit_text: '',
		}
	},

	methods: {
		actionLatCyr: function () {
			this.translit_text = translitLatCyr(this.translit_text)
		},
		actionCyrLat: function () {
			this.translit_text = translitCyrLat(this.translit_text)
		}
	}
}
</script>


<style lang='scss'>
	.translit-app {
		background-color: $gray--10;
		padding: ($grid-unit * 3) 0;
	}
	
	.translit-app__action-panel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: ($grid-unit * 2);
	}
	
	.translit-app__actions {
		display: flex;
		align-items: center;
	}
	
	.translit-app__actions-label {
		margin-right: $grid-unit * 2;
		color: $gray--60;
	}
	
	.translit-app__action {
		& + & {
			margin-left: $grid-unit * 2;
		}
	}
	
	.translit-app__textarea {
		color: $gray--80;
		width: 100%;
		max-width: 100%;
		min-height: 45vh;
		padding: $grid-unit * 2;
		border: 2px solid $gray--40;
		border-radius: $btn-border-radius;
		
		&:focus {
			outline-style: none;
			border-color: $red;
		}
	}
</style>
