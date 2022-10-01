function separatingPosts (postsList) {

    for (let i = 0; i < postsList.length; i++) {
        let postObj = postsList[i]
        createPosts(postObj)
    }
}

separatingPosts(posts)

function createPosts (postItem) {

    let divBox = document.createElement('div')

    let divContainer = document.createElement('div')
    divContainer.classList = 'display-flex display-flex-row'

    let imgProfile = document.createElement('img')
    imgProfile.src = postItem.img
    imgProfile.alt = `user` + postItem.id
    imgProfile.classList.add('img-profile')

    let span = document.createElement('span')

    let h3Name = document.createElement('h3')
    h3Name.classList.add('profile-name')
    h3Name.innerHTML = postItem.name

    let pRole = document.createElement('p')
    pRole.classList.add('profile-desc')
    pRole.innerHTML = postItem.role

    let divPostsInfo = document.createElement('div')
    divPostsInfo.classList.add('posts-infos')

    let h3Title = document.createElement('h3')
    h3Title.classList.add('title-posts')
    h3Title.innerHTML = postItem.title

    let pDesc = document.createElement('p')
    pDesc.classList.add('desc-posts')
    pDesc.innerHTML = postItem.desc

    let spanContainer = document.createElement('span')
    spanContainer.classList = 'display-flex display-flex-row display-align-center'

    let button = document.createElement('button')
    button.classList.add('button-open-posts')
    button.innerText = 'Abrir Post'


    let divButtonLike = document.createElement('div')
    divButtonLike.classList.add('button-like')

    divButtonLike.innerHTML = `<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7134 0C14.4034 0 12.3978 1.30143 11.3793 3.21286C10.3609 1.30143 8.35526 0 6.04526 0C2.70685 0 0 2.71857 0 6.07143C0 14.2857 11.3793 20 11.3793 20C11.3793 20 22.7586 14.2857 22.7586 6.07143C22.7586 2.71857 20.0518 0 16.7134 0Z" fill="#868E96"/>
    </svg>
    `

    let pLike = document.createElement('p')
    pLike.classList.add('likes')
    pLike.innerText = '10'

    const divPosts = document.querySelector('.add-posts')

    spanContainer.append(button, divButtonLike, pLike)
    divPostsInfo.append(h3Title, pDesc, spanContainer)
    span.append(h3Name, pRole)
    divContainer.append(imgProfile, span)
    divBox.append(divContainer, divPostsInfo)

    divPosts.append(divBox)

    let divModal = document.createElement('div')
    divModal.classList = 'modal-post-desktop modal__bg'

    let sectionContainer = document.createElement('section')
    sectionContainer.classList = 'modal-post modal-desktop'

    let divDisplay = document.createElement('div')
    divDisplay.classList = 'display-flex display-flex-row display-flex-justify'

    let divFlex = document.createElement('div')
    divFlex.classList = 'display-flex display-flex-row'

    let img = document.createElement('img')
    img.src = postItem.img
    img.alt = `user` + postItem.id
    img.classList.add('img-profile')

    let spanModal = document.createElement('span')

    let h3NameModal = document.createElement('h3')
    h3Name.classList.add('profile-name')
    h3Name.innerHTML = postItem.name

    let pDescModal = document.createElement('p')
    pDesc.innerHTML = postItem.desc

    let buttonClose = document.createElement('button')
    buttonClose.classList= 'button-close-modal button-close-modal-desktop'
    buttonClose.innerText = 'X'

    openModal (button, buttonClose, divModal)

    let divInfo = document.createElement('div')

    let h2 = document.createElement('h2')
    h2.classList = 'title-posts modal-post-title'
    h2.innerHTML = postItem.title

    let p = document.createElement('p')
    p.classList.add('modal-post-paragraph')
    p.innerHTML = postItem.desc

    let p2 = document.createElement('p')
    p2.classList.add('modal-post-paragraph')
    p2.innerHTML = postItem.desc2

    let p3 = document.createElement('p')
    p3.classList.add('modal-post-paragraph')
    p3.innerHTML = postItem.desc3

    divInfo.append(h2, p, p2, p3)
    spanModal.append(h3NameModal, pDescModal)
    divFlex.append(img, span)
    divDisplay.append(divFlex, buttonClose)
    sectionContainer.append(divDisplay, divInfo)
    divModal.append(sectionContainer)

}

const body = document.querySelector('body')

function openModal (btnOpen, btnClose, anexo) {
    
    btnOpen.addEventListener ('click', function () {
        
        body.appendChild(anexo)
        closeModal(btnClose, anexo)
    })
    
}

function closeModal (btnClose, anexo) {

    btnClose.addEventListener ('click', function () {
        anexo.remove()
    })
}

