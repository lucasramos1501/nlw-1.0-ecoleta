# *Next Level Weak*

# *Ecoleta*

## Descrição
    Markteplace desenvolvido na Next Level Weak durante os dias 01 até 07 de junho, 
    realizada pela Rocketseat. À aplicação possui como finalidade facilitar o
    coleta de resíduos, baseado na localização e no tipo de resíduos. 
## Layout
    O layout da aplicação você pode encotrar [aqui](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).
## Instalação
```bash
	# Primeiro clone o repositório
	git clone https://github.com/lucasramos1501/nlw-1.0-ecoleta

	# Acesse o repositório
	cd nlw-1.0-ecoleta
```
### Server
```bash
	# Acesse o diretório do server
	cd server

	# Arquivo sqlite
	npm run knex:migrate

	# Seeds 
	npm run knex:migrate

	# inciar 
	npm run dev
```
### Web
```bash
	# Acesse o diretório do server
	cd web

	# inciar 
	npm run start
```
### Mobile
```bash
	# Acesse o diretório do server
	cd mobile

	# inciar 
	npm run start
```
### Aviso
	Como na aplicação é utilizado ip fixo, caso as funcionalidades não realizem o esperado altera as seguintes
	linhas de código, com o seu ip.
```bash
	#No server, em PointController
	cd server/src/controllers/PointController.ts

	#No server, em ItemsController
	cd server/src/controllers/ItemsController.ts
```
```javascript
	image_url: `http://192.168.0.101:3333/uploads/${point.image}`,
```
```bash
	#Na web
	cd web/src/services/api.ts
	# E no mobile
	cd web/src/services/api.ts
```
```javascript
	 baseURL: 'http://192.168.0.101:3333'
```