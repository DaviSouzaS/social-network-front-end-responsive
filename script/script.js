function separatingPosts (postsList) {

    for (let i = 0; i < postsList.length; i++) {
        let postObj = postsList[i]
        addPosts(postObj)
        createModal(postObj)
    }
}

separatingPosts(posts)

function addPosts (postItem) {

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
    spanContainer.classList = 'display-flex display-flex-row'

    let button = document.createElement('button')
    button.classList.add('button-open-posts')
    button.innerText = 'Abrir Post'

    let divButtonLike = document.createElement('div')
    divButtonLike.classList.add('button-like')

    let divSquare = document.createElement('div')
    divSquare.classList.add('square')

    let divCircleTop = document.createElement('div')
    divCircleTop.classList = 'circle top'
    
    let divCircleLeft = document.createElement('div')
    divCircleLeft.classList = 'circle left'

    let pLike = document.createElement('p')
    pLike.classList.add('likes')
    pLike.innerText = '10'

    const divPosts = document.querySelector('.add-posts')


    divButtonLike.append(divSquare, divCircleTop, divCircleLeft)
    spanContainer.append(button, divButtonLike, pLike)
    divPostsInfo.append(h3Title, pDesc, spanContainer)
    span.append(h3Name, pRole)
    divContainer.append(imgProfile, span)
    divBox.append(divContainer, divPostsInfo)

    divPosts.append(divBox)
}

function createModal (list) {

    let divModal = document.createElement('div')
    divModal.classList.add('modal-post-desktop')

    let sectionContainer = document.createElement('section')
    sectionContainer.classList = 'container modal-post'

    let divDisplay = document.createElement('div')
    divDisplay.classList = 'display-flex display-flex-row display-flex-justify'

    let divFlex = document.createElement('div')
    divFlex.classList = 'display-flex display-flex-row'

    let img = document.createElement('img')
    img.src = list.img
    img.alt = `user` + list.id
    img.classList.add('img-profile')

    let span = document.createElement('span')

    let h3Name = document.createElement('h3')
    h3Name.classList.add('profile-name')
    h3Name.innerHTML = list.name

    let pDesc = document.createElement('p')
    pDesc.innerHTML = list.desc

    let spanCloseModal = document.createElement('span')
    spanCloseModal.classList.add('close-modal-desktop')

    let buttonClose = document.createElement('button')
    buttonClose.classList.add('button-close-modal')
    buttonClose.innerText = 'X'

    let divInfo = document.createElement('div')

    let h2 = document.createElement('h2')
    h2.classList = 'title-posts modal-post-title'
    h2.innerHTML = list.title

    let p = document.createElement('p')
    p.classList.add('modal-post-paragraph')
    p.innerHTML = list.desc

    divInfo.append(h2, p)
    spanCloseModal.append(buttonClose)
    span.append(h3Name, pDesc)
    divFlex.append(img, span)
    divDisplay.append(divFlex, spanCloseModal)
    sectionContainer.append(divDisplay, divInfo)
    divModal.append(sectionContainer)

    return divModal
}


