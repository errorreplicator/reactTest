from flask import Blueprint
import pandas as pd
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, text
import numpy as np


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost:3306/cryptokline'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
bluePront_obj = Blueprint("helloBPO", __name__)


@bluePront_obj.route("/charts1h")
def getData1h():
    cnx = create_engine('mysql+pymysql://root:''@localhost:3306/cryptokline') 
    sql = f"select * from solusdtbb1h order by ID desc limit 100"
    df = pd.read_sql(sql,cnx)
    df = df[['open','high','low','close','closeDateTime']]
    df = df.rename(columns={"closeDateTime": "time"})
    df['time'] = df['time'].apply(lambda x: int((x - pd.Timestamp('1970-01-01')) / pd.Timedelta(seconds=1)))
    retData = df.to_json(orient='records')
    return (retData)

@bluePront_obj.route("/charts30m")
def getData30m():
    cnx = create_engine('mysql+pymysql://root:''@localhost:3306/cryptokline') 
    sql = f"select * from solusdtbb30m order by ID desc limit 100"
    df = pd.read_sql(sql,cnx)
    df = df[['open','high','low','close','closeDateTime']]
    df = df.rename(columns={"closeDateTime": "time"})
    df['time'] = df['time'].apply(lambda x: int((x - pd.Timestamp('1970-01-01')) / pd.Timedelta(seconds=1)))
    retData = df.to_json(orient='records')
    return (retData)

@bluePront_obj.route("/charts15m")
def getData15m():
    cnx = create_engine('mysql+pymysql://root:''@localhost:3306/cryptokline') 
    sql = f"select * from solusdtbb15m order by ID desc limit 100"
    df = pd.read_sql(sql,cnx)
    df = df[['open','high','low','close','closeDateTime']]
    df = df.rename(columns={"closeDateTime": "time"})
    df['time'] = df['time'].apply(lambda x: int((x - pd.Timestamp('1970-01-01')) / pd.Timedelta(seconds=1)))
    retData = df.to_json(orient='records')
    return (retData)



   
