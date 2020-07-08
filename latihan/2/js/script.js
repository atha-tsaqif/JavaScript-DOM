let audio1 = document.getElementById("audioID")
let win = document.getElementById("win")
let lose = document.getElementById("lose")
let seri = document.getElementById("seri")

function getPilihanComputer() {
	var comp = Math.floor(Math.random() * 10) + 1;
	if ( comp < 3 ) return 'gajah'
	if ( comp >= 3 && comp < 6 ) return 'orang'
	return 'semut'
}

function getHasil(comp, player) {
	if ( player == comp ) return 'SERI!';
	if ( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	if ( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
	if ( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

function putar() {
	const imgComputer = document.querySelector('.img-komputer')
	const gambar = ['gajah', 'orang', 'semut']
	let i = 0
	const waktuMulai = new Date().getTime()
	setInterval(function() {
		if(new Date().getTime() - waktuMulai > 1000) {
			clearInterval
			return
		}
		imgComputer.setAttribute('src', "img/"+gambar[i++]+".png")
		if (i == gambar.length) i = 0;
	}, 100)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanComputer()
		const pilihanPlayer = pil.className
		let hasil = getHasil(pilihanComputer, pilihanPlayer)
		audio1.play()
		putar()
		setTimeout(function() {
			if (hasil == "MENANG!") {
				win.play()
			} else if (hasil == 'KALAH!') {
				lose.play()
			} else {
				seri.play()
			}
			const imgComputer = document.querySelector('.img-komputer')
			imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
			const info = document.querySelector('.info')
			info.innerHTML = hasil
		}, 1100)

	})
})


// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer()
// 	const pilihanPlayer = pGajah.className
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer)
// 	const imgComputer = document.querySelector('.img-komputer')
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
// 	const info = document.querySelector('.info')
// 	info.innerHTML = hasil
// })

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer()
// 	const pilihanPlayer = pOrang.className
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer)
// 	const imgComputer = document.querySelector('.img-komputer')
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
// 	const info = document.querySelector('.info')
// 	info.innerHTML = hasil
// })

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer()
// 	const pilihanPlayer = pSemut.className
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer)
// 	const imgComputer = document.querySelector('.img-komputer')
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
// 	const info = document.querySelector('.info')
// 	info.innerHTML = hasil
// })