const bcrypt = require('bcrypt');
const { default: App } = require('../App');

App.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); 

    res.json({ success: true });
})