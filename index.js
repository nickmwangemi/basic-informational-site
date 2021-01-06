const http = require('http')
const fs = require('fs')
const indexPage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact-me.html')
const notFoundPage = fs.readFileSync('notFound.html')

// index, about, contact-me and 404.
const server = http.createServer((req, res) => {
	if (req.url === '/about') res.end(aboutPage)
	else if (req.url === '/contact-me') res.end(contactPage)
	else if (req.url === '/') res.end(indexPage)
	else {
		res.writeHead(404)
		res.end(notFoundPage)
	}
})

server.listen(8080)
