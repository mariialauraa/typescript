type User = {
    firstName: string
    age: number
}

type JobRole = {
    id: number
    role: string
}

// intersection
type employee = User & JobRole

const emp1: employee = {
    firstName: 'Andre',
    age: 31,
    id: 201,
    role: 'Admin'
}