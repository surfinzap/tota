<template lang="pug">
	div(itemscope='', itemtype='https://schema.org/Book')
		h2 Informácie o publikácii
		dl.cl--dl
			dt Názov
			dd(itemprop='name') {{item.title.value}}
			dt Autor
			dd(itemprop='author', itemtype='https://schema.org/Person', itemscope='')
				span(itemprop='name') {{item.author.value}}
			dt Ilustrácie
			dd(itemprop='illustrator', itemtype='https://schema.org/Person', itemscope='')
				span(itemprop='name') {{item.illustrator.value}}
			dt Jazyková úprava
			dd(itemprop='editor', itemtype='https://schema.org/Person', itemscope='')
				span(itemprop='name') {{item.language_editor.value}}
			dt Jazyk
			dd
				meta(itemprop='inLanguage', content='rue')
				| {{item.language.value}}
			dt ISBN
			dd(itemprop='isbn') {{item.isbn.value}}
			dt Rok vydania
			dd
				meta(itemprop='copyrightYear', :content='item.date_published.value.getFullYear()')
				meta(itemprop='datePublished', :content='formatDate(item.date_published.value)')
				| {{item.date_published.value.getFullYear()}}
			dt Vydavateľ
			dd(itemprop='publisher', itemtype='https://schema.org/Organization', itemscope='')
				span(itemprop='name') {{item.publisher.value}}
			dt Vydanie
			dd(itemprop='bookEdition') {{item.book_edition.value}}
			dt Väzba
			dd
				link(itemprop='bookFormat', href='https://schema.org/Hardcover')
				| {{item.book_format.value}}
			dt Rozmer
			dd {{item.dimensions.value}}
			dt Hmotnosť
			dd {{item.weight.value}}
			dt Počet strán
			dd(itemprop='numberOfPages') {{item.number_of_pages.value}}
			dt Písmo
			dd {{item.typeface.value}}
			dt Papier
			dd(itemprop='material') {{item.paper.value}}
			dt Tlač
			dd {{item.printer.value}}
			dt Finančná podpora
			dd(itemprop='sponsor', itemtype='https://schema.org/Organization', itemscope='')
				span(itemprop='name') {{item.financial_aid.value}}
</template>

<script>
	const moment = require('moment');
	export default {
		props: ['item'],
		methods: {
			formatDate(value) {
				const dateLocale = 'sk';
				const dateFormat = 'YYYY-MM-DD'; // 2019-01-20
				return moment(value).locale(dateLocale).format(dateFormat)
			}
		}
	}
</script>
