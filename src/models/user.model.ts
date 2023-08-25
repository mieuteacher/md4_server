const users = [
    {
        name: "Phước",
        age: 26
    },
    {
        name: "Phương",
        age: 26
    }
]

export default {
    find: function() {
        return {
            status: true,
            message: "Ok!",
            data: users
        }
    }
}