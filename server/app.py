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
# allow Cross-Origin Resource Sharing
CORS(app)

db = pymysql.connect(host=ENDPOINT, user=USERNAME,
                     password=PASSWORD, db=DB_NAME)
cursor = db.cursor()

@app.route('/tables')
def showTB():
    showTable = """
        show tables
    """
    cursor.execute(showTable)
    tbs = cursor.fetchall()
    # restructure output data
    tables = [tb[0] for tb in tbs]
    return jsonify(tables)

@app.route('/<table>')
def showTableDetail(table):
    query = f"""
        SELECT * 
        FROM {table}
    """
    try: 
        cursor.execute(query)
        return jsonify(cursor.fetchall())
    except:
        return f"{table} is not found in the database"

@app.route("/")
def hello():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
