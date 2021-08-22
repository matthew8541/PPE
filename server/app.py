import os
from flask import Flask
from dotenv import load_dotenv
import pymysql

# load .env secret to python file
load_dotenv()
ENDPOINT=os.getenv("AWS_RDS_ENDPOINT")
DB_NAME = os.getenv("AWS_RDS_DB_NAME")
USERNAME=os.getenv("USERNAME")
PASSWORD=os.getenv("PASSWORD")
PORT=os.getenv("PORT")

# init Flask app
app = Flask(__name__)

db = pymysql.connect(host=ENDPOINT, user=USERNAME, password=PASSWORD, db=DB_NAME)
cursor = db.cursor()

showTable = """
    show tables
"""

@app.route('/')
def showTB():
    cursor.execute(showTable)
    tbs = cursor.fetchall()
    print(tbs)
    return f"{tbs}"

if __name__ == '__main__':
    app.run(debug=True)


