function getRandomColor() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}

for (let index = 0; index < 480; index++) {
	const div = document.createElement('div')

	div.addEventListener('mouseenter', e => {
		const color = getRandomColor()

		e.target.style.setProperty('background', color)

		e.target.style.setProperty('box-shadow', '0px 0px 240px 16px ' + color)
		e.target.style.setProperty('-webkit-box-shadow', '0px 0px 16px 0px ' + color)

		e.target.style.setProperty('animation-name', null)
	})

	div.addEventListener('mouseleave', e => {
		e.target.style.setProperty('animation-name', 'color')
	})

	div.addEventListener('animationend', e => {
		e.target.style.setProperty('background', null)
		e.target.style.setProperty('box-shadow', null)
		e.target.style.setProperty('-webkit-box-shadow', null)
		e.target.style.setProperty('animation-name', null)
	})

	document.querySelector('main').appendChild(div)
}
