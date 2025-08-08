
const errorRouter = (req, res, next) => {
    return res.status(404).json({ message: "Page not found." })
}

module.exports = errorRouter;