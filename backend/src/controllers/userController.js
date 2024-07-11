const client = require('../config/database');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const query = 'INSERT INTO usuarios (email, password, dummy) VALUES (?, ?, ?)';
  try {
    await client.execute(query, [email, password, 'dummy'], { prepare: true });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ? ALLOW FILTERING';
  try {
    const result = await client.execute(query, [email, password], { prepare: true });
    if (result.rowLength > 0) {
      res.status(200).json({ message: 'Login successful', email: email });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('Error during login:', err);  // Log para depuración
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };
