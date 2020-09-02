class Weather {
	constructor(city, state) {
		this.apiKey = "3d35152f41d777187e82f1546ab22f63"
		this.city = city
		this.state = state
	}

	// Fetch weather from API
	async getWeather() {
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`
		)

		const responseData = await response.json()
		console.log(responseData)

		return responseData.current_observation
	}

	// Change weather location
	changeLocation(city, state) {
		this.city = city
		this.state = state
	}
}
