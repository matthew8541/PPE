import os
from flask import Flask, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import pymysql

from query import fetchManufacture, fetchInventory, fetchRecentTransaction, fetchTableDetail

# load .env secrets to python file
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
    return jsonify({
        "table": fetchTableDetail(cursor, table)
    })

@app.route("/purchase/<hospital>")
def showPurchase(hospital):
    hospital = " ".join(hospital.split("_"))

    return jsonify({
        "manufacturer": fetchManufacture(cursor)
    })

@app.route("/dashboard/<hospital>")
def showDashBoard(hospital):
    hospital = " ".join(hospital.split("_"))

    return jsonify({
        "recent_transaction": fetchRecentTransaction(cursor, hospital, limit=5),
        "inventory": fetchInventory(cursor, hospital)
    })

@app.route("/")
def hello():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
