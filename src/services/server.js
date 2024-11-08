const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

const FILE_PATH = './codes.json';

// Middleware para parsing JSON e configuração do CORS
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Permitindo acesso apenas para 'localhost:3000'

// Função para carregar os códigos
const loadCodes = () => {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  }
  return [];
};

// Função para salvar os códigos
const saveCodes = (codes) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(codes, null, 2));
};

// Rota para gerar e salvar um novo código
app.post('/generate-code', (req, res) => {
  const { name, usesLimit, expiryTime, points } = req.body;

  const newCode = {
    id: Date.now(),
    name: name || `CODE-${Math.floor(Math.random() * 100000)}`,
    usesLimit: usesLimit || 'Unlimited',
    expiryTime: expiryTime ? Date.now() + expiryTime * 24 * 60 * 60 * 1000 : null,
    points: points || 0
  };

  const codes = loadCodes();
  codes.push(newCode);
  saveCodes(codes);

  res.json(newCode);
});

// Rota para listar todos os códigos
app.get('/codes', (req, res) => {
  const codes = loadCodes();
  res.json(codes);
});

// Rota para deletar códigos expirados ou que atingiram o limite de usos
app.delete('/delete-expired-codes', (req, res) => {
  let codes = loadCodes();
  const currentTime = Date.now();

  codes = codes.filter(code => {
    const isExpired = code.expiryTime && code.expiryTime < currentTime;
    const isLimitReached = code.usesLimit !== 'Unlimited' && code.usesLimit <= 0;
    return !isExpired && !isLimitReached;
  });

  saveCodes(codes);
  res.json({ message: 'Códigos expirados e com uso limitado foram deletados' });
});

// Rota para deletar um código específico pelo ID
app.delete('/delete-code/:id', (req, res) => {
  const { id } = req.params;
  let codes = loadCodes();

  codes = codes.filter(code => code.id !== parseInt(id));
  saveCodes(codes);

  res.json({ message: 'Código deletado com sucesso' });
});

// Rota para resgatar o código
app.post('/redeem-code', (req, res) => {
  const { codeName } = req.body;
  console.log(`Tentativa de resgatar o código: ${codeName}`); // Log para verificar a entrada

  let codes = loadCodes();
  console.log('Códigos disponíveis:', codes); // Log para verificar os códigos carregados

  const codeIndex = codes.findIndex(code => code.name === codeName);

  if (codeIndex === -1) {
    console.log('Código não encontrado'); // Log para código inexistente
    return res.status(404).json({ message: 'Código não encontrado' });
  }

  const code = codes[codeIndex];
  const currentTime = Date.now();

  if (code.expiryTime && code.expiryTime < currentTime) {
    console.log('O código expirou'); // Log para código expirado
    return res.status(400).json({ message: 'O código expirou' });
  }

  if (code.usesLimit !== 'Unlimited' && code.usesLimit <= 0) {
    console.log('O código atingiu o limite de usos'); // Log para limite de usos atingido
    return res.status(400).json({ message: 'O código atingiu o limite de usos' });
  }

  // Diminui o limite de usos e remove se o limite chegar a zero
  if (code.usesLimit !== 'Unlimited') {
    code.usesLimit -= 1;
    console.log(`Novo limite de usos para o código ${codeName}: ${code.usesLimit}`); // Log do novo limite de usos

    if (code.usesLimit === 0) {
      console.log(`Código ${codeName} removido por atingir o limite de usos`); // Log para código removido
      codes.splice(codeIndex, 1);
    }
  }

  saveCodes(codes);
  res.json({ message: 'Código resgatado com sucesso', remainingUses: code.usesLimit });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
