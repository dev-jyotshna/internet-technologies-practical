const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 30000;

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sarul',
    database: 'my_db',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM datainfo WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send('Welcome!');
        } else {
            res.send('Invalid credentials. Please try again.');
        }
    });
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    const query = 'INSERT INTO datainfo (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log("Server is listening on port ");
});
