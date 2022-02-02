let div = document.getElementById('container')

let redP = document.createElement('p')
redP.style.color = 'red'
redP.textContent = "Hey! I'm red!"

let blueH3 = document.createElement('h3')
blueH3.style.color = 'blue'
blueH3.textContent = "I'm a blue H3!"

let blackPink = document.createElement('div')
blackPink.setAttribute('style', 'border: 2px solid black; background-color: pink;')

let h1 = document.createElement('h1')
h1.textContent = "I'm in a div"

let p = document.createElement('p')
p.textContent = "ME TOO!"

blackPink.append(h1, p)
div.append(redP, blueH3, blackPink)