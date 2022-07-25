const { getUserService, createUserService } = require("./user.service");
const {
    getUserService,
    createUsersService,
    updateUserService,
} = require("./user.service");

module.exports = {
    getUsers: async (req, res) => {
        const data = await getUserService();
        return res.status(200).json(data);
    },
    createUser: async (req, res) => {
        const data = await createUserService(req.body);
        return res.status(200).json({ userId: data.insertId });
    },
    updateUser: async (req, res) => {
        const data = await updateUserService(req.params.id, req.body);
        return res.status(200).json({ userId: req.params.id });
    },
};
