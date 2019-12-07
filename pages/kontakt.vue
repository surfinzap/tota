<template lang="pug">
	.container
		.grid
			.kontakt
				h1 Kontakt
				p Sme tota agentura, venujeme sa rozvoju Rusínskej kultúry. V prípade akýchkoľvek otázok alebo záujmu o spoluprácu sa nám ozvite na #[a(href='mailto:kontakt@tota.sk') kontakt@tota.sk].
				p Ak sa nám niečo podarí, zverejníme to na #[a(href='https://www.facebook.com/totaagentura/') facebooku] alebo #[a(href='https://www.youtube.com/user/totaagentura') youtube] — sledujte nás.

				h2 Členovia
				dl.row
					dt.col-xs-3 Riaditeľ
					dd.col-xs-9 Ing. Ľudmila Šandalová
					dt.col-xs-3 Dizajnér
					dd.col-xs-9 Braňo Šandala

				h2 Identifikačné údaje
				dl.row
					dt.col-xs-3 Názov
					dd.col-xs-9 tota agentura
					dt.col-xs-3 Právna forma
					dd.col-xs-9 občianske združenie
					dt.col-xs-3 Adresa
					dd.col-xs-9
						| Gen. Svobodu 698/21
						br
						|  089 01 Svidník
						br
						|  Slovenská republika
					dt.col-xs-3 IČO
					dd.col-xs-9 42231027
					dt.col-xs-3 DIČ
					dd.col-xs-9 2023251912
					dt.col-xs-3 č. reg.
					dd.col-xs-9 VVS/1-900/90-37518-1

				h2 Fakturačné údaje
				dl.row
					dt.col-xs-3 Číslo účtu
					dd.col-xs-9
						| 622892154 / 0900
						br
						|  (Slovenská sporiteľňa)
					dt.col-xs-3 IBAN
					dd.col-xs-9 SK67 0900 0000 0006 2289 2154
					dt.col-xs-3 SWIFT
					dd.col-xs-9 GIBASKBX
				p Nie sme platcami DPH.
</template>

<style lang='scss'>
	.kontakt {
		margin: 0 $grid-gap-column;

		@media (min-width: $screen-sm-min) {
			margin: 0;
			grid-column: 1 / span 9;
		}
		@media (min-width: $screen-md-min) {
			grid-column: 1 / span 6;
		}

	}
</style>
