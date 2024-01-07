build:
	npm install
	npm run build

test:
	npm install
	npm start

prod:
	rsync -a build/ andrew@andrewheare.net:public 