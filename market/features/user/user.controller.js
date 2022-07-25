const { getUserService, createUsersService, deleteUsersService } = require("./user.service");

module.exports = {
    getUsers: async (req, res) => {
        const data = await getUserService();
        return res.status(200).json(data);
    },
    createUsers: async (req, res) => {
        const data = await createUsersService(req.body);
        return res.status(200).json({ userId: data.insertId });
    },
    deleteUsers: async (req, res) => {
        const data = await deleteUsersService(req.params.id, req.body);
        return res.status(200).json({ userId: data.insertId });
    },
};

