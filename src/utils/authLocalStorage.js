const employee = [
    {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "John@1234",
        "role": "employee"
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "Jane@5678",
        "role": "employee"
    },
    {
        "id": 3,
        "email": "sam@gmail.com",
        "password": "123456",
        "role": "employee"
    },
    {
        "id": 4,
        "email": "linda.green@example.com",
        "password": "Linda@1122",
        "role": "employee"
    },
    {
        "id": 5,
        "email": "alex.white@example.com",
        "password": "Alex@3344",
        "role": "employee"
    },
    {
        "id": 100,
        "email": "admin@example.com",
        "password": "admin123",
        "role": "admin"
    }
];


export const setAuthData = () => {
    localStorage.setItem("employee", JSON.stringify(employee));
}

export const getAuthData = () => {
    const data = JSON.parse(localStorage.getItem("employee"));
    console.log(data);
    return data;
}



