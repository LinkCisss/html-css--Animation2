window.onload = function (){
	let progress = 0
	
	function run() {
	  if (progress < 1) {
	    progress = parseFloat((progress + 0.01).toFixed(2))
	    
	    document.querySelector('h1').style.setProperty('--progress', progress)
	    
	    setTimeout(run, 20)
	  }
	}
	
	document.querySelector('#empty').addEventListener('click', (e) => {
	  progress = 0
	  document.querySelector('h1').style.setProperty('--progress', progress)
	})
	
	document.querySelector('#full').addEventListener('click', (e) => {
	  run()
	})
}