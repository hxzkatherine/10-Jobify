const notFountMiddleware = (req, res) => 
    res.status(404).send('Rotue does not exist')

export default notFountMiddleware