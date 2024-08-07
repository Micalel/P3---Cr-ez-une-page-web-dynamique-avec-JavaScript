        const wrapperCategories = document.querySelector('#categories')
        let displayedWorks = new Set();


        /**
         * Fonction asynchrone qui effectue une requête fetch pour obtenir des données JSON depuis une URL.
         * @param {string} url - L'URL à partir de laquelle les données JSON sont récupérées.
         * @param {Object} headers - Les en-têtes de la requête (optionnel).
         * @returns {Promise<Object>} - Retourne le contenu JSON de la réponse de l'appel à l'API.
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
         * Affiche toutes les catégories dans le DOM de la page.
         * @param {Array<Object>} categories - Les catégories à afficher.
         */
        function displayCategories(categories){
            categories.forEach(category => {
                displayCategory(category)
            })
        }

        /**
         * Affiche une catégorie dans le DOM de la page.
         * @param {Object} category - La catégorie à afficher.
         */
        function displayCategory(category){

            // Création du bouton et insertion
            const button = document.createElement('button');
            button.classList.add('btn-gallery')
            button.setAttribute('data-id', category.id)
            button.innerHTML = category.name;
        
            wrapperCategories.appendChild(button)
        }



        /**
         * Crée un élément de rendu pour un nouveau post.
         * @param {Object} work - Les données du travail à afficher.
         * @returns {HTMLElement} - Le noeud DOM créé à partir des données du travail.
         */
        function createRenderNewPost(work) {
            const figure = document.createElement('figure');
            figure.setAttribute('data-id', work.id);
            figure.innerHTML = `
                <img src="${work.imageUrl}" alt="${work.title}">
                <figcaption>${work.title}</figcaption>`;
            return figure;
        }


            /**
             * Ajoute de nouveaux posts à la galerie en récupérant les données depuis l'API.
             */

            
            window.updateGallery = async function() {
                
                    const wrapper = document.querySelector('.gallery');
                    const works = await fetchJSON('http://localhost:5678/api/works');
                    
                    // Crée un ensemble des ID de travaux récupérés
                    const newWorks = new Set();
                    works.forEach(work => {
                        newWorks.add(work.id);
                        if (!displayedWorks.has(work.id)) {
                            const newPost = createRenderNewPost(work);
                            wrapper.appendChild(newPost);
                        }
                    })
            
                    // Supprime les éléments qui ne sont plus présents
                    displayedWorks.forEach(id => {
                        if (!newWorks.has(id)) {
                            const figure = document.querySelector(`figure[data-id="${id}"]`)
                            if (figure) {
                                wrapper.removeChild(figure);    
                            }
                        }
                    })
            
                    // Met à jour l'ensemble des travaux affichés
                    displayedWorks = newWorks;
                    console.log('Galerie mise à jour avec succès')

            }
            

        /**
         * Filtrer les travaux par catégorie et les afficher dans la galerie.
         * @param {string} categoryId - L'ID de la catégorie à filtrer.
         */
        async function addNewPostbyfilter(categoryId) {

            // Récupération API
            const works = await fetchJSON('http://localhost:5678/api/works');

            // Vérifier si categoryId est -1
            if (categoryId && parseInt(categoryId) !== -1) {

                // Filtrage pour la catégorie spécifique
                const filteredWorks = works.filter(work => work.category.id === parseInt(categoryId));

                // Réinitialise l'affichage
                const wrapper = document.querySelector('.gallery');
                wrapper.innerHTML = '';

                if (filteredWorks.length > 0) {
                    filteredWorks.forEach(work => {
                        wrapper.appendChild(createRenderNewPost(work));
                    });
                } else {
                    wrapper.innerHTML = `<p>Aucun projet disponible</p>`;
                }
                
            } else {
                
                // Afficher tous les projets sans filtre
                const wrapper = document.querySelector('.gallery');
                wrapper.innerHTML = '';

                if (works.length > 0) {
                    works.forEach(work => {
                        wrapper.appendChild(createRenderNewPost(work));
                    });
                } else {
                    wrapper.innerHTML = `<p>Aucun projet disponible</p>`;
                }
            }
        }


        /**
         * Initialise l'application en affichant les catégories et en ajoutant des événements aux boutons.
         */
        async function init(){

            const categories = await fetchJSON('http://localhost:5678/api/categories');
            displayCategories(categories)
            
            const btns = document.querySelectorAll('.btn-gallery')
            btns.forEach(btn => {
                btn.addEventListener('click', function (){
                    btns.forEach(button => button.classList.remove('selected'));
                    this.classList.add('selected');

                    const categoryId = btn.getAttribute('data-id') 
                    addNewPostbyfilter(categoryId)
                });
            })

            
            updateGallery();

        }


        init();


