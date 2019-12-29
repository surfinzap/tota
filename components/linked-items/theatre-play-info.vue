<template lang="pug">
	// TODO Yet another extra wrapper div
	div
		h2 Informácie o predstavení
		dl.cp--dl
			dt Názov
			dd {{item.title.value}}
			dt Premiéra
			dd {{formatDate(item.premiere_date.value)}}, {{item.premiere_place.value}}
			dt Scenár
			dd {{item.playwright.value}}
			dt Režisér
			dd {{item.director.value}}
			dt Hudba
			dd {{item.music.value}}
			template(v-if='item.author_of_songs.value')
				dt Autor skladieb
				dd {{item.author_of_songs.value}}
			template(v-if='item.choreography.value')
				dt Choreografia
				dd {{item.choreography.value}}
			template(v-if='item.dancing_group.value')
				dt Tanečníci
				dd {{item.dancing_group.value}}
			dt Scénografia
			dd {{item.scenography.value}}
			dt Grafický dizajn
			dd {{item.graphic_design.value}}
			dt Fotografia
			dd {{item.photography.value}}
			dt Finančná podpora
			dd {{item.financial_aid.value}}
</template>

<script>
	const moment = require('moment');
	export default {
		props: ['item'],
		methods: {
			formatDate(value) {
				const dateLocale = 'sk';
				const dateFormat = 'LL'; // 10. december 2019
				return moment(value).locale(dateLocale).format(dateFormat)
			}
		}
	}
</script>
