const jwt = require("jsonwebtoken");
const User = require("../models/user");
// const router = express.Router();


const jwtController = async (req, res, next) => {
    try {
        const currentUser = req.body;
        console.log(currentUser);
        const isExistUser = await User.findOne({ email: currentUser.email });
        if (!isExistUser) {
            const user = new User(currentUser);
            await user.save();
        }

        const token = jwt.sign(currentUser, process.env.JWT_SECRET);
        console.log(token);
        res.send({ token });
    } catch (err) {
        // next(err);
        console.error(err.message)
        res.status(404).send({ error: err.message });
    }
}

// router.post("/jwt", async (req, res) => {
//     try {
//         console.log("jwt");
//         // const currentUser = req.body;
//         // console.log(user);
//         // console.log(req.headers);
//         const currentUser = await User.findOne({ email: req.body.email });
//         if (!currentUser) {
//             const user = new User(currentUser);
//             await user.save();
//         }

//         const token = jwt.sign(user, process.env.JWT_SECRET);
//         // console.log(token);
//         res.send({ token });
//     } catch (error) {
//         console.error(error.message)
//         res.status(404).send({ error: error.message });
//     }
// })

// module.exports = router;
module.exports = jwtController;