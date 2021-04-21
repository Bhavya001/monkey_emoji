const closedEmojiFace = document.querySelector('.closed')
const openEmojiFace = document.querySelector('.open')

//Add Event Listener
closedEmojiFace.addEventListener ( 'click' , () => {
    if (openEmojiFace.classList.contains('open')){
        openEmojiFace.classList.add('active');
        closedEmojiFace.classList.remove('active');
    }
})

//Add event listener
openEmojiFace.addEventListener ( 'click' , () => {
    if (closedEmojiFace.classList.contains('closed')){
        closedEmojiFace.classList.add('active');
        openEmojiFace.classList.remove('active');
    }
})



