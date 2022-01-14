import {url} from '../configs/urls'

const getAllUsers = () => {
    return fetch(url.users)
        .then(response => response.json())
}

const getAllPosts = (userId) => {
    return  fetch(`${url.users}/${userId}/posts`)
    .then(response => response.json())
}

export const services = {
    getAllUsers,
    getAllPosts 
}
