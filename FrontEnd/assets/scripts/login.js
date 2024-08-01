const form = document.querySelector('.login-form')
const errorMessageNode = document.querySelector('#errorMessage')

/**
 * Vérifie si les champs du formulaire sont valides
 * @param {string} email - L'adresse e-mail saisie par l'utilisateur
 * @param {string} pwd - Le mot de passe saisi par l'utilisateur
 * @returns {boolean} - True si les champs sont valides, sinon False
 */

const isFormValid = (email, pwd) => {

    let errorMessage = ''
    
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (email.trim() === '' || pwd.trim() === '' ) {
        errorMessage = 'Veuillez insérer une adresse e-mail et un mot de passe'

    } else if (!regexEmail.test(email)) {
        errorMessage = 'Adresse e-mail invalide'

    } else if(!regexPassword.test(pwd) ) { 
        errorMessage = 'Mot de passe invalide'
    }

    errorMessageNode.innerHTML = errorMessage

    return errorMessage === ''
}

/**
 * Tente de connecter l'utilisateur avec les informations fournies
 * @param {string} email - L'adresse e-mail saisie par l'utilisateur
 * @param {string} pwd - Le mot de passe saisi par l'utilisateur
 */
const tryToLogin = async (email, pwd) => {

    const response = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: pwd,
        }),
    })
    .then(response => {
        if(response.status !== 200){
            throw new Error('erreur de connexion')
        }
        return response.json()
    }) 
    .then(data => {
        const token = data.token
        localStorage.setItem('token', token)
        window.location.href = 'index.html'
    })
    .catch(error => {
         errorMessageNode.innerHTML = 'Identifiant invalide, veuillez réessayer';
    })

}



/**
 * Écouteur d'événements pour la soumission du formulaire de connexion
 */

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Coupe le comportement par default du formulaire
    
    const email = document.getElementById('user-email').value;
    const pwd = document.getElementById('user-pwd').value;

    if(isFormValid(email, pwd)){
        tryToLogin(email, pwd)
    } 

})




