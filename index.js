const express = require("express");
const fs = require('fs');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to display users in HTML
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// Route to get all users in JSON
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// Grouped routes for /api/users/:id
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        // Update user details
        users[userIndex] = { ...users[userIndex], ...req.body };

        // Save updated data
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Failed to update user" });
            }
            res.json({ status: "success", message: "User updated", user: users[userIndex] });
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        users.splice(userIndex, 1);

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Failed to delete user" });
            }
            res.json({ status: "success", message: "User deleted" });
        });
    });

// Route to create a new user
app.post('/api/users', (req, res) => {
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ status: "error", message: "All fields are required" });
    }

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to create user" });
        }
        res.json({ status: "success", id: users.length, user: newUser });
    });
});

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));