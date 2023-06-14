const usersModel = require('../models/account');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers();

        res.json({
            message: 'Get all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error,
        })
    }
}

const buatDataUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Berhasil Membuat Data User',
        data: req.body
    })
}

const updateDataUser = (req, res) => {
    const {
        idUser
    } = req.params;
    console.log('idUser', idUser);
    res.json({
        message: 'Berhasil Update Data User',
        data: req.body,
    })
}

const hapusDataUser = (req, res) => {
    const {
        idUser
    } = req.params;
    res.json({
        message: 'Data User Berhasil Dihapus',
        data: {
            // data dummy
            id: idUser,
            name: "Fatih",
            email: "kopling69@gmail.com",
            address: "Bekasi"
        }
    })
}

module.exports = {
    getAllUsers,
    buatDataUser,
    updateDataUser,
    hapusDataUser
}