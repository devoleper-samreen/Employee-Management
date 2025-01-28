const emplyee = [
    {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "John@1234"
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "Jane@5678"
    },
    {
        "id": 3,
        "email": "sam@gmail.com",
        "password": "123456"
    },
    {
        "id": 4,
        "email": "linda.green@example.com",
        "password": "Linda@1122"
    },
    {
        "id": 5,
        "email": "alex.white@example.com",
        "password": "Alex@3344"
    }
]

export const setAuthData = () => {
    localStorage.setItem("employee", JSON.stringify(emplyee));
}

export const getAuthData = () => {
    const data = JSON.parse(localStorage.getItem("employee"));
    console.log(data);

}

