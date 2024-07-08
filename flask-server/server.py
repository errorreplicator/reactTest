from flask import Flask
from dbData import bluePront_obj

import pandas as pd
from sqlalchemy import create_engine
import numpy as np

app = Flask(__name__)
app.register_blueprint(bluePront_obj)

@app.route("/members")
def members():
    return ({"members": ["m1","m2","m3"]})


if __name__ == "__main__":
    app.run(debug=True)