const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const value = converter.querySelector('.value')

let fahrenheit
let celsius

const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else if (one.textContent === '°F') {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const tempC = () => {
	celsius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
	converter.value = ''
}

const tempF = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
	converter.value = ''
}

const conv = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			tempF()
		} else {
			tempC()
		}
	} else {
		result.textContent = 'Musisz podać jakąś wartość!'
	}
}
const reset = () => {
	result.textContent = ''
	converter.value = ''
}

changeBtn.addEventListener('click', change)
convBtn.addEventListener('click', conv)
resetBtn.addEventListener('click', reset)
