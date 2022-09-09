const requestUrl =
        'https://api.unsplash.com/search/photos?query=rapper&client_id=33tHr1M-7ZnGG4g8V_TzwgXRYuw0wUEdsEJ_Zjxeuww';
    const getImagesButton = document.querySelector('.getImagesButton');
    const imageToDisplay = document.querySelector('.imageToDisplay');

    getImagesButton.addEventListener('click', async () => {
        let randomImage = await getNewImage();
        imageToDisplay.src = randomImage;
    });
    async function getNewImage() {
        let randomNumber = Math.floor(Math.random() * 10);
        return fetch(requestUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                let allImages = data.results[randomNumber];
                return allImages.urls.regular;
            })
    };

    function api_img(){
        document.getElementById('#api_img').classList.remove('imageToDisplay');
        document.getElementById('#api_img').classList.add('imageToDisplaystyle');
    };
    getImagesButton.addEventListener("click",api_img);

