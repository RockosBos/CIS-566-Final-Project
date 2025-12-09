This is the project Repo for Nicholas Kessey's CIS 566 Final Project

---Virtual Trading Card Game---

Developed Fall 2025 - University of Michigan - Dearborn CIS566

Setup Instructions:

I. Database:
	1. MySQL Workbench can be installed here: https://dev.mysql.com/downloads/workbench/
	2. Once installed, please import the schema in the project files CIS566_Schema.sql. This can be done with the schema import tool in mysql workbench.
	3. 3 Tables with data should be loaded.
		a. cards
		b. deck
		c. login
	4. Database credentials are as follows:
		a. Hostname: 127.0.0.1
		b. Port: 3306
		c. Username: root
		d. Password: root

II. Web Application:
	1. Navigate in the command line to /VIRTUAL-TRADING-CARD_GAME
	2. run 'npm install' to import needed npm packages
	3. 'npm run build' to build the web app.
		a. If Node.js version is invalid download new version from: https://nodejs.org/en/download
	4. 'npm start' to start the web application.
	5. Open a web browser and navigate to localhost:3000
	6. You should be greeted by the application login page.

III. Admin CLI
	1. Install a python version later than 3.10 from https://www.python.org/downloads/
	2. Navigate to /PythonAdmin
	3. run 'pip install -r requirements.txt'
	4. run 'python Admin.py' to start the Admin CLI
	5. You will be prompted with the options of the Admin CLI.

Steps were followed using a Windows 11 laptop and a freshly installed MYSQL workbench, Node.js, any python.