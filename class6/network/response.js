const {faker} = require ('@faker-js/faker');
const randomName = faker.name.fullName();
const randomEmail = faker.internet.email();

exports.success = function (req, res) {
    res.send({
        "Nombre Autor": randomName,
        "Correo Clientes": randomEmail,
    });
}