
import http from 'node:http'

//criar um usuário (name, email, senha)

/**
 * HTTP
 * 
 * - Método HTTP
 * 
 * - URL
 * 
 * GET POST, PUT, PATCH e DELETE
 * 
 * GET => BUSCAR BACK-END
 * POST => CRIAR UM RECURSO NO BACK-END
 * PUT => ATUALIZAR RECURSO NO BACK-END
 * PATCH => ATUALIZAR UMA INFORMAÇÃO ESPECIFICA BACK-END
 * DELETE => REMOVER UM RECURSO NO BACK-END
 * 
 */

//cabeçalho (requisição e resposta)  => Metadados

const users = []
const server = http.createServer((req, res)=>{
    const { method, url} = req
    
    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    if (method == 'POST' && url == '/users'){
        users.push({
            id: users.length +1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })
        return res.writeHead(201).end()
    }
    return res.writeHead(404).end('Rota não Encontrada')
})

server.listen(3333)

//localhost:3333
