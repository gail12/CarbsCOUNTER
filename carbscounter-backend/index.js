const express = require('express')
const { Usuario, Diario, Medico, Conteudo } = require('./models')

const app = express()

app.get("/usuarios", async (req, res) => {
    const usuarios = await Usuario.findAll();
    const diario = await Diario.findAll();
    const medico = await Medico.findAll();
    const conteudo = await Conteudo.findAll();

    return res.status(200).json({ usuarios, diario, medico, conteudo });
})

console.log("Sei lá")

app.listen(3333)