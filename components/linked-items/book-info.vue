<template lang="pug">
	div
		h2 Informácie o publikácii
		dl.cl--dl
			dt Názov
			dd {{item.title.value}}
			dt Autor
			dd {{item.author.value}}
			dt Ilustrácie
			dd {{item.illustrator.value}}
			dt Jazyková úprava
			dd {{item.language_editor.value}}
			dt Jazyk
			dd {{item.language.value}}
			dt ISBN
			dd {{item.isbn.value}}
			dt Rok vydania
			dd {{item.date_published.value.getFullYear()}}
			dt Vydavateľ
			dd {{item.publisher.value}}
			dt Vydanie
			dd {{item.book_edition.value}}
			dt Väzba
			dd {{item.book_format.value}}
			dt Rozmer
			dd {{item.dimensions.value}}
			dt Hmotnosť
			dd {{item.weight.value}}
			dt Počet strán
			dd {{item.number_of_pages.value}}
			dt Písmo
			dd {{item.typeface.value}}
			dt Papier
			dd {{item.paper.value}}
			dt Tlač
			dd {{item.printer.value}}
			dt Finančná podpora
			dd {{item.financial_aid.value}}
</template>

<script>
	export default {
		props: ['item']
	}
</script>
