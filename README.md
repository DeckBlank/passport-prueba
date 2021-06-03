# passport-prueba

ENDPOINTS DISPONIBLES


a) SignUp: Post Request donde se pasa como body el email y la contraseña

curl --location --request POST 'localhost:3000/api/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"miMail@gmail.com",
    "password":"miContraseñaSuperSecreta"
}'


Respuesta Esperada:

{
    "message": "Signup successful",
    "user": {
        "_id": "60b835de55ad95eb2a725a71",
        "email": "miMail@gmail.com",
        "password": "$2b$10$Qk3e/832zV3I3zCFAvArluPl./1zWtsT7dQbh6I2qNc7uqtAvwmbi",
        "__v": 0
    }
}

b) Login: Post Request donde se pasa como body el email y la contraseña

curl --location --request POST 'localhost:3000/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"miMail@gmail.com",
    "password":"miContraseñaSuperSecreta"
}'

Respuesta esperada

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYjgzNWRlNTVhZDk1ZWIyYTcyNWE3MSIsImVtYWlsIjoibWlNYWlsQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MjI2ODUxNzF9.nbbHffu0XUHfprA4fGI7a7VoTAt4K4AbyyoaXMci5pg"
}

c) Pedido de Perfil : Get Request donde se pide el perfil del usuario. Se necesita estar logueado, es decir. Enviar un token


curl --location --request GET 'localhost:3000/api/user/profile' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYjgyZGU0ZDc2MTA2Y2NmZGE0ZWVlYiIsImVtYWlsIjoiam9zZWExMjNAZ21haWwuY29tIn0sImlhdCI6MTYyMjY4MzI2MX0.Fa7x7sVVHBocgV9oWZrXdvbjk_QoyitqiSvCjo1DTas'

Respuesta esperada:

{
    "message": "You made it to the secure route",
    "user": {
        "_id": "60b82de4d76106ccfda4eeeb",
        "email": "miMail@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYjgyZGU0ZDc2MTA2Y2NmZGE0ZWVlYiIsImVtYWlsIjoiam9zZWExMjNAZ21haWwuY29tIn0sImlhdCI6MTYyMjY4MzI2MX0.Fa7x7sVVHBocgV9oWZrXdvbjk_QoyitqiSvCjo1DTas"
}


