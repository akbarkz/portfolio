from flask import Flask
from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'postgresql://akbar:postgres@localhost:5432/postgres'
)

db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/api')
def api():
    return 'API'


if __name__ == '__main__':
    app.run(debug=True)
