const users = [
    { id: 1, name: "Adam" },
    { id: 2, name: "Jagienka" },
    { id: 3, name: "Marysia" },
    { id: 4, name: "Mieszko" },
];

module.exports = {
    showUsers() {
        const names = users.map(user => user.name);
        console.log('\nNasi użytkownicy to:');
        names.forEach(name => console.log(name));
    },
    showUserObj(id) {
        console.log("Szukany uzytkownik to:");
        const user = users.find(user => id === user.id);
        console.log(user);
    },
    userListLength: users.length
};