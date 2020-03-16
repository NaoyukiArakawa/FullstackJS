import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    id: 0,
    name: 'Thijs'
  }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:userId', (req, res) => {
  res.json(users[req.params.userId]);
});

app.post('/users', (req, res) => {
  users.push({ id: users.length, ...req.body });
  res.json(users);
});

app.put('/users', (req, res) => {
  res.send('Received PUT request on endpoint /users');
});

app.delete('/users', (req, res) => {
  res.send('Received DELETE request on endpoint /users');
});

app.listen(5000, () => console.log(`Example app listening on port 5000!`));
