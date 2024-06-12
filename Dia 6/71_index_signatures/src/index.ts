class HotelRooms {
    [roomNumber: string]: string
}

let room = new HotelRooms()

// Cria as propriedades
room.A201 = 'Andre'
room.A202 = 'Ana'
room.A207 = 'Marcos'

console.log(room)