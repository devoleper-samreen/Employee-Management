export const setAuthData = (userData) => {
    return localStorage.setItem("user", JSON.stringify(userData))
}

export const getAuthData = () => {
    return JSON.parse(localStorage.getItem("user")) || []
}

export const removeAuthData = () => {
    return localStorage.removeItem("user")
}