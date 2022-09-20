<template lang="pug">
	.translit-app
		.container
			.translit-app__action-panel
				.translit-app__title
					h1 translit
				.translit-app__actions
					.translit-app__actions-label transliteruj
					button.btn.btn--cta.translit-app__action.translit-app__action--cyr(v-on:click='actionLatCyr') do azbuky
					button.btn.btn--cta.translit-app__action.translit-app__action--lat(v-on:click='actionCyrLat') do latinky
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
			this.translit_text = translitLatCyr(this.translit_text);

			// Push event to Google Tag Manager
			this.$gtm.push({
				event: 'translit',
				eventAction: 'toCyrillic',
				eventLabel: this.translit_text.length,
			})

			console.log('test');
		},
		actionCyrLat: function () {
			this.translit_text = translitCyrLat(this.translit_text);

			// Push event to Google Tag Manager
			this.$gtm.push({
				event: 'translit',
				eventAction: 'toLatin',
				eventLabel: this.translit_text.length,
			})
		}
	}
}
</script>


<style lang='scss'>
	.translit-app {
		background-color: $gray--10;
		padding: ($grid-unit * 3) ($grid-unit * 4);
		
		@media (min-width: $screen-xs-min) {
			padding: ($grid-unit * 3) ($grid-unit * 8);
		}
		
		@media (min-width: $screen-sm-min) {
			padding: ($grid-unit * 3) 0;
		}
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
		&:before {
			opacity: 0.7;
			margin-right: ($grid-unit * 3);
		}

		&--cyr:before {
			content: "Д";
		}

		&--lat:before {
			content: "D";
		}
		
		& + & {
			margin-left: $grid-unit * 2;
		}
	}
	
	.translit-app__textarea {
		color: $gray--80;
		width: 100%;
		min-width: 100%;
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
