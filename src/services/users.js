// services/users.js

export const createUser = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const result = await response.json();
        if (response.ok) {
            return { success: 'Usuário cadastrado com sucesso!' };
        } else {
            return { error: result.message };
        }
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return { error: 'Erro ao criar usuário.' };
    }
};

export const getUserByEmail = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const result = await response.json();
        if (response.ok) {
            return { success: 'Login realizado com sucesso!' };
        } else {
            return { error: result.message };
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return { error: 'Erro ao fazer login.' };
    }
};
