export const process = {
    register: async (req, res) => {
        console.log(req.body);
        res.sendStatus(200);
    }
}

export default { process };

