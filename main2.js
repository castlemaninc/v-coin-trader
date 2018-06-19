Vue.component('coin-card', {

	props: ['coin'],
	template: `
		<div class="item-card">
			<img :src="coin.image" alt="" class="item-photo">
			<div class="item-description">
				<h3 class="item-name">{{ coin.name }}</h3>
				<h4 class="item-weight">{{ coin.weight }}</h4>
				<small class="item-purity">{{ coin.purity }}</small>
				<h1 class="item-price">{{ coin.markup }}</h1>
				<form class="add-items">
					<input type="number" min="0" size="2" placeholder="0" class="item-number" v-model.number="coin.numOfEachProduct">
					<div class="add-to-cart button" v-on:click='addToCart()'>Add to Cart</div>
				</form>
			</div>
		</div>		
		`
})

Vue.component('add-to-cart', {
	data: function() {
		return {

		}
	}
})




var app = new Vue({
	el: '#app',
	data: {
		goldSpot: 1334.20,
		silverSpot: 16.57,
		cart: 0,
		numItems: 0,
		percentageChange: 1.34,
		metalType: 'gold',		
		products : [
			{
				productId: 0,
				metalType: 'gold',
				name: '2018 American Eagle',
				weight: '1 oz of Gold',
				purity: '.9167 FINE GOLD',
				image: './assets/2018-1-oz-american-gold-eagle_360.png',
				markup: 1.045,
				numOfEachProduct: 0
			},
			{
				productId: 1,
				metalType: 'gold',
				name: '2018 American Gold Buffalo',
				weight: '1 oz of Gold',
				purity: '.9999 FINE GOLD',
				image: './assets/2018-1-oz-american-gold-buffalo_360.png',
				markup: 1.076,
				numOfEachProduct: 0
			},
			{
				productId: 2,
				metalType: 'gold',
				name: '2018 Austrian Gold Philharmonic',
				weight: '1 oz of Gold',
				purity: '.9999 FINE GOLD',
				image: './assets/2018-1-oz-austrian-gold-philharmonic_360.jpeg',
				markup: 1.091,
				numOfEachProduct: 0
			},
			{
				productId: 3,
				metalType: 'gold',
				name: '2018 Great Britain Gold Brittania',
				weight: '1 oz of Gold',
				purity: '.9999 FINE GOLD',
				image: './assets/2018-1-oz-great-britain-gold-britannia_360.png',
				markup: 1.071,
				numOfEachProduct: 0
			},
			{
				productId: 4,
				metalType: 'silver',
				name: '2018 American Eagle',
				weight: '1 oz of Silver',
				purity: '.999 FINE SILVER',
				image: './assets/2018-1-oz-american-silver-eagle_360.png',
				markup: 1.056,
				numOfEachProduct: 0
			},
			{
				productId: 5,
				metalType: 'silver',
				name: '2018 Canadian Silver Maple Leaf',
				weight: '1 oz of Silver',
				purity: '.9999 FINE SILVER',
				image: './assets/2018-1-oz-canadian-silver-maple-leaf_360.png',
				markup: 1.071,
				numOfEachProduct: 0
			},
			{
				productId: 6,
				metalType: 'silver',
				name: '2018 Austrian Silver Philharmonic',
				weight: '1 oz of Silver',
				purity: '.9999 FINE SILVER',
				image: './assets/2018-1-oz-austrian-silver-philharmonic_360.jpeg',
				markup: 1.042,
				numOfEachProduct: 0
			},
			{
				productId: 7,
				metalType: 'silver',
				name: 'Morgan Silver Dollar 1878-1894',
				weight: '.7735 oz of Silver',
				purity: '90% Silver 10% Copper',
				image: './assets/morgan_silver_dollar_brilliant_uncirculated_360.png',
				markup: 1.256,
				numOfEachProduct: 0
			}
		]
	},

	methods: {
		addToCart(index) {
			// this is a new change
			this.cart += this.products.numOfEachProduct;
			this.products.numOfEachProduct = 0;
		},

		selectGold() {
			this.metalType = 'gold';
			console.log(this.metalType + ' is selected');
		},

		selectSilver() {
			this.metalType = 'silver';
			console.log(this.metalType + ' is selected');
		},

		toggleMetalType() {
			if(this.metalType === 'gold'){
				this.metalType = 'silver'
			} else {
				this.metalType = 'gold'
			}
		}
	},

	
})