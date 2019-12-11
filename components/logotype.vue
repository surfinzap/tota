<template>
	<svg class="logotype" version="1.1" id="tota-logotype" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 width="70px" height="69.99px" viewBox="0 0 70 69.99" enable-background="new 0 0 70 69.99" xml:space="preserve">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M35,0C15.67,0,0,15.67,0,35c0,19.32,15.67,35,35,35
			c19.33,0,35-15.67,35-35C70,15.67,54.33,0,35,0z M51.4,26.62c-0.55,0.21-5.03,0.33-10.5,0.39c0.17,0.95,0.54,2.26,0.44,2.8
			l-2.7,15.66l4.22-0.41c1.61,0.38,1.74,6.51,1.19,7.14c-0.59,0.68-12.37,4.8-14.37,4.75c-1.54-0.15-6.35-7.66-5.86-10.15
			c1-6.3,2.12-11.46,3.8-16.92c0.34-0.87,1.45-1.89,1.98-2.83c-5.81-0.03-10.54-0.12-10.71-0.28c-1.15-1.02-0.78-7.25,0.72-7.98
			c1.3-0.63,32.63-1.22,33.18-0.88C54.15,18.78,52.93,26.04,51.4,26.62z"/>
	</svg>
</template>

<style lang='scss'>
	.logotype {
		&--header {
			animation: 2s appear;
			fill: $red;
			width: ($grid-unit * 9);

			@media (min-width: $screen-xs-min) {
				width: ($grid-unit * 11);
			}

			@keyframes appear {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
		}

		&--footer {
			fill: $gray--60;
			width: ($grid-unit * 9);
		}
	}
</style>
