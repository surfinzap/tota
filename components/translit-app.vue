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
		actionLatCyr () {
			this.translit_text = translitLatCyr(this.translit_text);

			// Simple Analytics Events
			sa_event('translit_cyrillic')
			sa_event('translit_cyrillic_' + this.getBallparkTextLength() )
		},
		actionCyrLat () {
			this.translit_text = translitCyrLat(this.translit_text);

			// Simple Analytics Events
			sa_event('translit_latin')
			sa_event('translit_latin_' + this.getBallparkTextLength() )
		},
		getBallparkTextLength () {
			let textLength = this.translit_text.length

			switch(true) {
				case textLength <= 50: return '50';
				case textLength <= 100: return '100';
				case textLength <= 500: return '500';
				case textLength <= 1000: return '1000';
				default: return '1000plus';
			}
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
