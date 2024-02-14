const token = localStorage.getItem('token')

if (token) {

    setLoginLinkText(true)

    /**
     * 
     * @param {boolean} isLoggedIn - Permet de changer le texte du lien de connexion lorsqu'un utilisateur est connecté ou non
     */
    function setLoginLinkText(isLoggedIn) {

        const loginLink = document.getElementById('loginLink')
        const linkText = isLoggedIn ? 'Logout' : 'Login'
        loginLink.innerText = linkText

        if (isLoggedIn) {

            loginLink.addEventListener('click', logout)

        } else {

            loginLink.removeEventListener('click', logout)

        }

        loginLink.addEventListener('click', (event) => {

            event.preventDefault()

        })

    }

    /**
    * Permet de supprimer le token de l'utilisateur lors du logout et de recharger la page.
    * 
    * @param {Event} event - L'événement déclencheur.
    */
    function logout() {

        localStorage.removeItem('token')
        setLoginLinkText(false)
        location.reload()

    }

    /**
     *  Créer un bandeau noir sur la page pour indiquer que l'utilisateur est en mode édition
     */
    function createBlackBand() {

        const blackBand = document.createElement('div')
        blackBand.classList.add('edition-mode')
        const titleBand = document.createElement('p')
        titleBand.innerText = 'Mode édition'
        blackBand.innerHTML += `<svg width="15" height="15" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.0229 2.18576L14.3939 2.55679C14.6821 2.84503 14.6821 3.31113 14.3939 3.5963L13.5016 4.49169L12.0879 3.07808L12.9803 2.18576C13.2685 1.89751 13.7346 1.89751 14.0198 2.18576H14.0229ZM6.93332 8.23578L11.0484 4.11759L12.4621 5.53121L8.34387 9.64633C8.25494 9.73525 8.14455 9.79964 8.02496 9.83337L6.23111 10.3455L6.7432 8.55162C6.77693 8.43203 6.84133 8.32164 6.93025 8.23271L6.93332 8.23578ZM11.9408 1.14625L5.89074 7.1932C5.62397 7.45998 5.43078 7.78808 5.32959 8.14685L4.4526 11.2133C4.379 11.4708 4.44953 11.7468 4.63965 11.9369C4.82977 12.127 5.10574 12.1976 5.36332 12.124L8.42973 11.247C8.79156 11.1427 9.11967 10.9495 9.38338 10.6858L15.4334 4.63888C16.2951 3.77722 16.2951 2.37894 15.4334 1.51728L15.0624 1.14625C14.2007 0.284585 12.8024 0.284585 11.9408 1.14625ZM3.19844 2.34214C1.70816 2.34214 0.5 3.55031 0.5 5.04058V13.3812C0.5 14.8715 1.70816 16.0796 3.19844 16.0796H11.5391C13.0293 16.0796 14.2375 14.8715 14.2375 13.3812V9.94683C14.2375 9.539 13.9094 9.21089 13.5016 9.21089C13.0937 9.21089 12.7656 9.539 12.7656 9.94683V13.3812C12.7656 14.0589 12.2167 14.6078 11.5391 14.6078H3.19844C2.52076 14.6078 1.97188 14.0589 1.97188 13.3812V5.04058C1.97188 4.36291 2.52076 3.81402 3.19844 3.81402H6.63281C7.04065 3.81402 7.36875 3.48591 7.36875 3.07808C7.36875 2.67025 7.04065 2.34214 6.63281 2.34214H3.19844Z" fill="white"/>
  </svg>`
        document.body.prepend(blackBand)
        blackBand.appendChild(titleBand)
    }
    /**
     *  Créer un bouton modifier pour permettre à l'utilisateur de modifier/ajouter les projets
     */

    function createModifyButton() {

        const projectSection = document.querySelector('.portfolio-titles')
        const modalBtn = document.createElement('button')
        modalBtn.classList.add('portfolio-modalBtn')
        modalBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0229 2.18576L14.3939 2.55679C14.6821 2.84503 14.6821 3.31113 14.3939 3.5963L13.5016 4.49169L12.0879 3.07808L12.9803 2.18576C13.2685 1.89751 13.7346 1.89751 14.0198 2.18576H14.0229ZM6.93332 8.23578L11.0484 4.11759L12.4621 5.53121L8.34387 9.64633C8.25494 9.73525 8.14455 9.79964 8.02496 9.83337L6.23111 10.3455L6.7432 8.55162C6.77693 8.43203 6.84133 8.32164 6.93025 8.23271L6.93332 8.23578ZM11.9408 1.14625L5.89074 7.1932C5.62397 7.45998 5.43078 7.78808 5.32959 8.14685L4.4526 11.2133C4.379 11.4708 4.44953 11.7468 4.63965 11.9369C4.82977 12.127 5.10574 12.1976 5.36332 12.124L8.42973 11.247C8.79156 11.1427 9.11967 10.9495 9.38338 10.6858L15.4334 4.63888C16.2951 3.77722 16.2951 2.37894 15.4334 1.51728L15.0624 1.14625C14.2007 0.284585 12.8024 0.284585 11.9408 1.14625ZM3.19844 2.34214C1.70816 2.34214 0.5 3.55031 0.5 5.04058V13.3812C0.5 14.8715 1.70816 16.0796 3.19844 16.0796H11.5391C13.0293 16.0796 14.2375 14.8715 14.2375 13.3812V9.94683C14.2375 9.539 13.9094 9.21089 13.5016 9.21089C13.0937 9.21089 12.7656 9.539 12.7656 9.94683V13.3812C12.7656 14.0589 12.2167 14.6078 11.5391 14.6078H3.19844C2.52076 14.6078 1.97188 14.0589 1.97188 13.3812V5.04058C1.97188 4.36291 2.52076 3.81402 3.19844 3.81402H6.63281C7.04065 3.81402 7.36875 3.48591 7.36875 3.07808C7.36875 2.67025 7.04065 2.34214 6.63281 2.34214H3.19844Z" fill="black"/>
    </svg>
    modifier`
        projectSection.appendChild(modalBtn)

        modalBtn.addEventListener('click', (event) => {
            event.preventDefault()
            createAndDisplayModal()
        })

    }

    /**
     *  Créer une modale spécifique pour la galerie photo actuelle, la première modale à être affichée
     *  La fonction createModal se charge de créer la modale et de l'afficher, cette fonction n'étant appelé que pour générer le contenu intial.
     */
    function createAndDisplayModal() {

        createModal('Galerie Photo', async (modal) => {

            const newNode = document.createElement('div')

            // Création de la gallerie photo
            const photoContainer = document.createElement('div')
            photoContainer.classList.add('modal-photo-container')
            await displayPhotosInModal(photoContainer)
            newNode.append(photoContainer)

            // Création du bouton pour ajouter un projet
            const addPhotoBtn = createAddPhotoButton(modal)
            newNode.append(addPhotoBtn)

            // On retourne le container
            return newNode
        })
    }

    /**
    * Crée un bouton qui servira à ajouter des projets, déclenche l'affichage de la deuxième modale.
    * 
    * @param {HTMLElement} container - Le conteneur du bouton.
    * @returns {HTMLElement} - Le bouton créé.
    */
    function createAddPhotoButton(container) {

        const addPhotoBtn = document.createElement('button')
        const modal = document.querySelector('.modal-container')
        addPhotoBtn.classList.add('modal-btn-adder')
        addPhotoBtn.innerText = 'Ajouter une photo'
        addPhotoBtn.addEventListener('click', (event) => {
            event.preventDefault()
            closeModal(modal)
            createAndDisplaySecondModal()
        })
        console.log('Add photo button created')
        console.log('Button:', addPhotoBtn)
        return addPhotoBtn;
    }

    /**
     *  Crée et affiche la deuxième modale qui permettra à l'utilisateur d'ajouter des projets.
     *  Cette fonction est appelé dans createAddPhotoButton.
     */

    function createAndDisplaySecondModal() {

        createModal('Ajout Photo', async () => {
            const modal = document.querySelector('.modal')
            const backButton = createBackButton(modal)
            const newNode = document.createElement('div')
            const modalHeader = document.querySelector('.modal-header')
            modalHeader.appendChild(backButton)
            const formContent = await displayFormInModal()
            newNode.appendChild(formContent)

            return newNode

        })

    }

    /**
  * Crée un bouton qui permettra de revenir à la première modale.
  * 
  * @param {HTMLElement} modal - La modale actuelle.
  * @returns {HTMLElement} - Le bouton de retour créé.
  */
    function createBackButton(modal) {
        const backButton = document.createElement('button')
        const container = document.querySelector('.modal-container')
        backButton.classList.add('modal-btn-backbutton')
        backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.439478 8.94458C-0.146493 9.53055 -0.146493 10.4822 0.439478 11.0681L7.9399 18.5686C8.52587 19.1545 9.47748 19.1545 10.0635 18.5686C10.6494 17.9826 10.6494 17.031 10.0635 16.445L5.11786 11.5041H19.4999C20.3297 11.5041 21 10.8338 21 10.004C21 9.17428 20.3297 8.50393 19.4999 8.50393H5.12255L10.0588 3.56303C10.6447 2.97706 10.6447 2.02545 10.0588 1.43948C9.47279 0.853507 8.52118 0.853507 7.93521 1.43948L0.43479 8.9399L0.439478 8.94458Z" fill="black"/>
        </svg>
        `
        backButton.addEventListener('click', (event) => {
            event.preventDefault()
            closeModal(container);
            createAndDisplayModal();
        });
        return backButton;
    }

    /**
     * Crée un formulaire d'ajout de projet.
     * 
     * @returns {HTMLElement} - Le formulaire HTML.
     */
    async function displayFormInModal() {

        const formContainer = document.createElement('form')
        formContainer.classList.add('form-container')
        formContainer.setAttribute('id', 'formCreateProject')

        const categories = await fetchCategoriesFromServer('http://localhost:5678/api/categories')
        const categoriesOptions = categories.map(category => `
        <option value="${category.id}">${category.name}</option>`).join('')

        console.log('Categories:', categoriesOptions)

        const formHTML = `
        <div class="file-container">
            <img src="" alt="" />
            <button id="file-btn">
                <span>+ Ajouter photo</span>
            </button>
            <p>jpg, png : 4 mo max</p>
            <input type="file" class="input-file--hidden" />
        </div>
        <div class="form-fields">
            <label for="titre">Titre</label>
            <input type="text" id="titre" class="modal-form--title" placeholder="Titre"/>
    
            <label for="categories"> Catégorie</label>
            <select id="categoriesId" class="modal-form--select">${categoriesOptions}</select>
        </div>
        <button type="submit" class="form-btn--validate"> Valider </button>`;

        formContainer.innerHTML = formHTML

        const previewContainer = formContainer.querySelector('.file-container')
        const previewImage = previewContainer.querySelector('img')
        const fileInput = previewContainer.querySelector('input[type="file"]')
        const addPhotoBtn = previewContainer.querySelector('#file-btn')
        const paragraphElement = previewContainer.querySelector('p')
        let canvas;

        // ajout de la prévisualisation ainsi que le downsize de l'image
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0]
            if (file) {

                const reader = new FileReader()
                reader.onload = (e) => {

                    // Création d'un nouvel objet d'image
                    const img = new Image()
                    img.src = e.target.result;

                    // Attente du chargement de l'image
                    img.onload = async () => {

                        // Canvas qui va redimensionner l'image
                        canvas = document.createElement('canvas')
                        const ctx = canvas.getContext('2d')

                        // Définir les dimensions du canvas

                        const maxWidthPercentage = '80%';
                        const maxWidth = (window.innerWidth * maxWidthPercentage) / 100;
                        const maxHeight = 300;

                        let newWidth = img.width
                        let newHeight = img.height

                        // Redimensionnement
                        if (img.width > maxWidth) {
                            newWidth = maxWidth
                            newHeight = (img.height * maxWidth) / img.width
                        }

                        if (img.height > maxHeight) {
                            newHeight = maxHeight
                            newWidth = (img.width * maxHeight) / img.height
                        }

                        canvas.width = newWidth
                        canvas.height = newHeight
                        ctx.drawImage(img, 0, 0, newWidth, newHeight)
                        const url = canvas.toDataURL()
                        previewImage.src = url
                        addPhotoBtn.style.display = 'none'
                        paragraphElement.style.display = 'none'
                    }
                }
                reader.readAsDataURL(file)
            }
        })

        // Gestion du bouton pour ajouter une photo
        const fileBtn = previewContainer.querySelector('#file-btn')
        fileBtn.addEventListener('click', () => {
            fileInput.click()
        })

        // Gestion du bouton pour valider le formulaire

        formContainer.addEventListener('submit', (event) => {
            event.preventDefault();

            const selectedCategoryId = document.querySelector('#categoriesId').value
            console.log(selectedCategoryId)

            handleFormSubmit(canvas)
            previewImage.src = ''
            addPhotoBtn.style.display = 'block'
            paragraphElement.style.display = 'block'
            document.getElementById('titre').value = ''
            document.getElementById('categoriesId').value = ''
            fileInput.value = ''
        })

        return formContainer
    }

    /**
     * Envoie les informations du formulaire vers le serveur en les mettant au bon format.
     * 
     * @param {Array} canvas - Le canvas contenant l'image redimensionnée.
     */
    function handleFormSubmit(canvas) {

        const title = document.getElementById('titre').value
        const category = document.getElementById('categoriesId').value
        const image = document.querySelector('.input-file--hidden').files[0]
        console.log(image);

        console.log(category)
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        formData.append('category', category)

        addPhotoToServer(formData)

    }


    /**
     * Envoie des informations sur le serveur avec la méthode POST.
     * 
     * Cette fonction est appelé dans handleFormSubmit.
     *  
     * FIXME: L'ERREUR DE RAFRAICHISSEMENT A PARTIR DE L'IMPLEMENTATION DE CETTE FONCTION
     *  
     * @param {Array} formData 
     */
    function addPhotoToServer(formData) {

        fetch('http://localhost:5678/api/works', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
            })

    }

    /**
  * Récupère les catégories présentes sur le serveur.
  * 
  * @param {string} url - L'URL de l'API.
  * @param {object} headers - Les en-têtes de la requête.
  * @returns {Promise} - La promesse contenant les catégories.
  */
    async function fetchCategoriesFromServer(url, headers = {}) {
        return await fetchJSON(url, {
            headers: {
                'Accept': 'application/json',
                ...headers,
            }
        });
    }

    /**
     * Affiche les photos dans la modale.
     * 
     * @param {HTMLElement} container - Le conteneur où afficher les photos.
     */
    async function displayPhotosInModal(container) {


        const modalContainer = document.querySelector('.modal-photo-container')
        const photos = await fetchPhotos('http://localhost:5678/api/works')

        const photoElements = photos.map(photo => {
            const imgElement = createElementPhoto(photo)
            return imgElement

        })

        displayPhotos(photoElements, container)

    }

    /**
     * Affiche les photos dans un conteneur HTML.
     * 
     * @param {Array} photoElements - Les éléments HTML des photos à afficher.
     * @param {HTMLElement} container - Le conteneur où afficher les photos.
     */
    function displayPhotos(photoElements, container) {

        container.innerHTML = ''
        photoElements.forEach(photoElements => {
            container.appendChild(photoElements)

        })

    }

    /**
     * Effectue une requête pour récupérer les projets en utilisant fetchJSON.
     * 
     * @param {string} url - L'URL de l'API.
     * @param {Object} headers - Les en-têtes de la requête.
     * @returns {Promise} - La promesse contenant les projets.
     */
    async function fetchPhotos(url, headers = {}) {

        return await fetchJSON(url, {
            headers: {
                'Accept': 'application/json',
                ...headers,
            }
        })

    }


    /**
     * Effectue une requête vers le serveur pour récupérer un JSON.
     * 
     * @param {string} url - L'URL de l'API.
     * @param {Object} headers - Les en-têtes de la requête.
     * @returns {Promise} - La promesse contenant les données JSON.
     */
    async function fetchJSON(url, headers = {}) {

        return await fetch(url, {
            headers: {
                'Accept': 'application/json',
                ...headers,
            }
        })
            .then(response => response.json())
            .catch(error => console.error(`Une erreur s'est produite lors de l'obtention des données!`))
    }
    /**
     * Crée un élément photo qui servira à afficher les projets obtenus depuis le serveur.
     * 
     * @param {Object} photo - Les données de la photo.
     * @returns {HTMLElement} - L'élément HTML de la photo.
     */
    function createElementPhoto(photo) {

        const container = document.createElement('div')
        const imgElement = document.createElement('img')
        const deleteButton = document.createElement('button')


        imgElement.src = photo.imageUrl

        deleteButton.classList.add('delete-btn')
        deleteButton.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="17" height="17" rx="2" fill="black"/>
    <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
    </svg>`

        container.classList.add('modal-photo-sub-container')

        deleteButton.addEventListener('click', (event) => {
            event.preventDefault()
        })


        deleteButton.addEventListener('click', (event) => {

            deletePhotoClientSide(deleteButton);
            deletePhotoServerSide(photo.id);

        })

        container.appendChild(imgElement)
        container.appendChild(deleteButton)

        return container

    }

    /**
     * Permet de supprimer un projet visiuelement sur le DOM.
     * Cette fonction est appelé dans createElementPhoto.
     * 
     * @param {HTMLElement} button 
     */
    function deletePhotoClientSide(button) {

        const imageContainer = button.closest('.modal-photo-sub-container')
        if (imageContainer) {
            imageContainer.remove()
        }
    }

    /**
     * Supprime une photo du serveur.
     * 
     * @param {string} photoId - L'identifiant de la photo à supprimer.
     */
    async function deletePhotoServerSide(photoId) {

        const response = await fetch(`http://localhost:5678/api/works/${photoId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },

        })

        if (response.ok) {

            console.log(`Photo ${photoId} a été supprimé`)

        } else { console.error(`Erreur lors de la suppression`) }
    }


    /**
     *  Permet de créer le squelette de la modale.
     * Cette fonction est appelé dans createAndDisplayModal.
     * 
     * @param {string} title 
     * @param {function} contentFn 
     */
    function createModal(title, contentFn) {

        const modalContainer = document.createElement('div')
        modalContainer.classList.add('modal-container')
        document.body.appendChild(modalContainer)

        const modalOpener = document.querySelector('.portfolio-modalBtn')
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modalContainer.appendChild(modal)

        const modalHeader = document.createElement('div')
        modalHeader.classList.add('modal-header')
        modal.appendChild(modalHeader);

        const btnCloseModal = document.createElement('button')
        btnCloseModal.classList.add('modal-btn-close')
        btnCloseModal.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
        </svg>`;
        modalHeader.appendChild(btnCloseModal)

        initializeModalContent(modal, title, contentFn)

        btnCloseModal.addEventListener('click', (event) => {
            event.preventDefault()
            closeModal(modalContainer)
        })


        modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
                closeModal(modalContainer)
            }
        })

    }

    /**
     *  Ferme la modale lorsqu'elle est appelé.
     *  Cette fonction est appelé dans createModal ET createAddPhotoButton.
     * 
     * @param {HTMLElement} modalContainer 
     */
    function closeModal(modalContainer) {

        modalContainer.remove()

    }

    /**
     * Initialise le contenu de la modale en ajoutant un titre et le contenu de la modale en élément HTML.
     * Cette fonction est appelé dans createModal.
     * 
     * @param {HTMLElement} modal 
     * @param {string} title 
     * @param {function} contentFn 
     */
    async function initializeModalContent(modal, title, contentFn) {

        const modalTitle = document.createElement('h3')
        modalTitle.innerText = title
        modal.appendChild(modalTitle)

        const content = await contentFn(modal)
        modal.appendChild(content)

    }

    function init() {

        createBlackBand()
        createModifyButton()

    }

    init()

}




