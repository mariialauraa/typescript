// roles:
// const admin = 1
// const read = 2
// const backup = 3

// Usando Enum:
enum Role {admin = 1, read = 2, backup = 3}

const user = {
    firstName: 'Andre',
    age: 40,
    role: Role.backup
}

console.log(user)