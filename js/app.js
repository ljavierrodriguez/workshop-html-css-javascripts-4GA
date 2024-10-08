window.onload = () => {
    const list = document.querySelector('.list')
    const loader = document.querySelector('.loader')

    const images = [
        { id: 1, url: './images/foto1.jpg', alt: 'Foto 1'},
        { id: 2, url: './images/foto2.jpg', alt: 'Foto 2'},
        { id: 3, url: './images/foto3.jpg', alt: 'Foto 3'},
        { id: 4, url: './images/foto4.jpg', alt: 'Foto 4'},
        { id: 5, url: './images/foto5.jpg', alt: 'Foto 5'},
        { id: 6, url: './images/foto6.jpg', alt: 'Foto 6'},
    ]

    loadGallery(images, list, loader)

    loadRandomImage(images, loader)

    function loadGallery(images, container, loader){
        for(let i = 0; i < images.length; i++){
            const img = document.createElement('img')
            img.src = images[i].url
            img.alt = images[i].alt
            img.style.cursor = 'pointer'

            img.addEventListener('click', (e) => handleClick(e, loader))

            container.appendChild(img)
        }

        function handleClick(e, loader){
            loader.src = e.target.src
        }
    }

    function loadRandomImage(images, loader){
        setInterval(() => {
            const rn = Math.floor(Math.random() * images.length)
            loader.src = images[rn].url
        }, 3000)
    }
}