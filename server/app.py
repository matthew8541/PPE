import os
from flask import Flask, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import pymysql

# load .env secret to python file
load_dotenv()
ENDPOINT = os.getenv("AWS_RDS_ENDPOINT")
DB_NAME = os.getenv("AWS_RDS_DB_NAME")
USERNAME = os.getenv("USERNAME")
PASSWORD = os.getenv("PASSWORD")
PORT = os.getenv("PORT")

# init Flask app
app = Flask(__name__)
CORS(app)
db = pymysql.connect(host=ENDPOINT, user=USERNAME, password=PASSWORD, db=DB_NAME)
cursor = db.cursor()

showTable = """
    show tables
"""

@app.route('/tables')
def showTB():
    cursor.execute(showTable)
    tbs = cursor.fetchall()
    print(tbs)
    return jsonify(tbs)

@app.route("/")
def hello():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)


