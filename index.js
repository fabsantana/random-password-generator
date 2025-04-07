const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const generatePasswordBtn = document.getElementById('generateBtn');
const passwordContainer1 = document.getElementById('password-container1')
const passwordContainer2 = document.getElementById('password-container2')
const passwordCopiedAlert = document.getElementById('alert')

function randomizeCharacters() {
    let randomPassword1 = ""
    let randomPassword2 = ""
    for (let i = 0; i < 15; i++) {
        let randomIndex1 =  Math.floor(Math.random() * characters.length);
        let randomIndex2 =  Math.floor(Math.random() * characters.length);
        randomPassword1 += characters[randomIndex1]
        randomPassword2 += characters[randomIndex2]
    }
    passwordContainer1.textContent = (randomPassword1)
    passwordContainer2.textContent = (randomPassword2)
}

function copyToClipboard(event) {
    const textToCopy = event.target.textContent
    navigator.clipboard.writeText(textToCopy)
}

function showAlert() {
    passwordCopiedAlert.classList.toggle('hidden')
}

generatePasswordBtn.addEventListener('click', randomizeCharacters)

passwordContainer1.addEventListener('click', copyToClipboard)
passwordContainer2.addEventListener('click', copyToClipboard)

passwordContainer1.addEventListener('click', showAlert)
passwordContainer2.addEventListener('click', showAlert)
