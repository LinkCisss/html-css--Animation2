window.onload = function() {
	// document.getElementById('btn01').onclick = function(){alert(123)}

	const images = document.querySelectorAll('img')
	document.querySelector('header').addEventListener('mousemove', (ev) => {
		
			let x = ev.clientX / window.outerWidth
			let offset = 10 * x
			let blur = 20

			for (let [index, image] of images.entries()) {
				offset *= 1.3

				let blurValue = (Math.pow((index / images.length - x), 2) * blur)
				image.style.setProperty('--offset', `${offset}px`)
				image.style.setProperty('--blur', `${blurValue}px`)
			}
		})
	
	
	// const images = document.querySelectorAll('header > div > img')
	
	// document.querySelector('header').addEventListener('mousemove', (e) => {
	//   let percentage = e.clientX / window.outerWidth
	//   let offset = 10 * percentage
	//   let blur = 20
	
	//   for (let [index, image] of images.entries()) {
	//     offset *= 1.3
	
	//     let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)
	
	//     image.style.setProperty('--offset', `${offset}px`)
	//     image.style.setProperty('--blur', `${blurValue}px`)
	//   }
	// })

}





