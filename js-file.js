let div = document.getElementById('container')

let redP = document.createElement('p')
redP.style.color = 'red'
redP.textContent = "Hey! I'm red!"

let blueH3 = document.createElement('h3')
blueH3.style.color = 'blue'
blueH3.textContent = "I'm a blue H3!"



div.append(redP, blueH3)