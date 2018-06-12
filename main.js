let app = new Vue({
	el: '#app',
	data: {
		goldSpot: 1334.20,
		silverSpot: 16.57,
		itemsInCart: 0,
		percentageChange: 1.34,
		metalType: 'gold',		
		products : [
			{
				metalType: 'gold',
				name: '2018 American Eagle',
				weight: '1 oz of Gold',
				purity: '.9167 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003733_2018-1-oz-american-gold-eagle_360.png',
				markup: 1.045,
				numOfEachProduct: 0
			},
			{
				metalType: 'gold',
				name: '2018 American Gold Buffalo',
				weight: '1 oz of Gold',
				purity: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003799_2018-1-oz-american-gold-buffalo_360.png',
				markup: 1.056,
				numOfEachProduct: 0
			},
			{
				metalType: 'gold',
				name: '2018 Austrian Gold Philharmonic',
				weight: '1 oz of Gold',
				purity: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003737_2018-1-oz-austrian-gold-philharmonic_360.jpeg',
				markup: 1.051,
				numOfEachProduct: 0
			},
			{
				metalType: 'gold',
				name: '2018 Great Britain Gold Brittania',
				weight: '1 oz of Gold',
				purity: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003749_2018-1-oz-great-britain-gold-britannia_360.png',
				markup: 1.047,
				numOfEachProduct: 0
			},
			{
				metalType: 'silver',
				name: '2018 American Eagle',
				weight: '1 oz of Silver',
				purity: '.999 FINE SILVER',
				image: './assets/2018-1-oz-american-silver-eagle_360.png',
				markup: 1.056,
				numOfEachProduct: 0
			},
			{
				metalType: 'silver',
				name: '2018 Canadian Silver Maple Leaf',
				weight: '1 oz of Silver',
				purity: '.9999 FINE SILVER',
				image: './assets/2018-1-oz-canadian-silver-maple-leaf_360.png',
				markup: 1.071,
				numOfEachProduct: 0
			},
			{
				metalType: 'silver',
				name: '2018 Austrian Silver Philharmonic',
				weight: '1 oz of Silver',
				purity: '.9999 FINE SILVER',
				image: './assets/2018-1-oz-austrian-silver-philharmonic_360.jpeg',
				markup: 1.042,
				numOfEachProduct: 0
			},
			{
				metalType: 'silver',
				name: 'Morgan Silver Dollar 1878-1894',
				weight: '.7735 oz of Silver',
				purity: '90% Silver 10% Copper',
				image: './assets/morgan_silver_dollar_brilliant_uncirculated_360.png',
				markup: 1.256,
				numOfEachProduct: 0
			}
		]
	}
})