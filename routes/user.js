const express = require('express');
const router = express.Router();
const userRoutes = require('../routes/user');

// Rota para enviar um novo usuário para o banco de dados
router.post('/', (req, res) => {
  // Implementação da funcionalidade para adicionar um novo usuário ao banco de dados
  res.send('Novo usuário adicionado com sucesso!');
});

// Rota para deletar um usuário do banco de dados
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  // Implementação da funcionalidade para deletar o usuário do banco de dados
  res.send(`Usuário com ID ${userId} deletado com sucesso!`);
});

module.exports = router;
