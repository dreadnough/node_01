const {
    getUserService,
    createUserService,
    updateUserService,
} = require("./user.service");
const {
    successStatusCode,
    notFoundStatusCode,
} = require("../constantStatusCode");

module.exports = {
    getUsers: async (req, res) => {
        const data = await getUserService();
        return res.status(successStatusCode).json(data);
    },
    createUser: async (req, res) => {
        const { ...userInfo } = req.body;
        const data = await createUserService(userInfo);
        return res.status(successStatusCode).json({ userId: data.insertId });
    },
    updateUser: async (req, res) => {
        const data = await updateUserService(req.params.id, req.body);
        return res.status(successStatusCode).json({ userId: req.params.id });
    },
};
