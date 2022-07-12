const { getUserService } = require("./user.service");

module.exports = {
    getUsers: async (req, res) => {
      const data = await getUserService();
      return res.status(200).json(data);
    }
  };