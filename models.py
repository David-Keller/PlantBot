import flask_sqlalchemy, app, os
import math

app.app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("HEROKU_POSTGRESQL_JADE_URL")
#app.app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:pass@localhost/plantbot'
db = flask_sqlalchemy.SQLAlchemy(app.app)
print "\"Models\" connected and DB import complete!"

# "PlantDB" DB Model
class plants(db.Model):
    
    # Auto-Increment Primary Key Integer
    id = db.Column(db.Integer, primary_key=True)
    
    # Setup other columns
    img = db.Column(db.String(5000000))
    userid = db.Column(db.BigInteger)
    name = db.Column(db.String(60))
    location = db.Column(db.String(60))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    date = db.Column(db.DateTime)
    ifedit = db.Column(db.String(20))
    editdate = db.Column(db.String(60))
        
class users(db.Model):
    userid = db.Column(db.Integer, primary_key = True)
    userlevel = db.Column(db.Integer, default = 0)
    facebook = db.Column(db.String(200))
    fbid = db.Column(db.String(20))
    username = db.Column(db.String(100))
    
    def __init__(self, facebook):
        self.facebook = facebook
        
    def __repr__(self):
        return "Obj.user: %s, %s" % self.username, self.userid
    

