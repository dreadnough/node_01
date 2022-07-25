const { getUserService, createUsersService, deleteUserService } = require("./user.service");

module.exports = {
    getUsers: async (req, res) => {
        const data = await getUserService();
        return res.status(200).json(data);
    },
    createUsers: async (req, res) => {
        const data = await createUsersService(req.body);
        return res.status(200).json({ userId: data.insertId });
    },
    deleteUser: async (req, res) => {
        const data = await deleteUserService({userId:req.params.id});
        return res.status(200).json({ userId: data.insertId });
    },
};

