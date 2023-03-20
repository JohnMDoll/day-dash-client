export const loginUser = (user) => {
    return fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(authInfo => {
            if (authInfo.valid) {
                localStorage.setItem("dd_token", JSON.stringify({"token": authInfo.token, "firstName": authInfo.firstName, "zipcode": authInfo.zipcode, "id":authInfo.id  }))
            } else {
                window.alert("Email or password incorrect")
            }
        })
}

export const registerUser = (user) => {
    return fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(authInfo => {
            if (authInfo.valid) {
                localStorage.setItem("dd_token", JSON.stringify({"token": authInfo.token, "firstName": authInfo.firstName, "zipcode": authInfo.zipcode, "id":authInfo.id  }))
            } else {
                window.alert(authInfo.message)
            }
        })
}
