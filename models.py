import flask_sqlalchemy, app, os

# REMOTE APPLICATION
#app.app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")

# CLOUD9 DEVELOPMENT ENVIRONMENT
app.app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://firefly:password@localhost/postgres'

# Setup connection to DB system
db = flask_sqlalchemy.SQLAlchemy(app.app)
print "\"Models\" connected and DB import complete!"

# "TextObj" DB Model
class plants(db.Model):
    
    # Auto-Increment Primary Key Integer
    id = db.Column(db.Integer, primary_key=True)
    
    # Setup other columns
    img = db.Column(db.String(5000000))
    userid = db.Column(db.BigInteger)
    name = db.Column(db.String(60))
    location = db.Column(db.String(60))
    date = db.Column(db.DateTime)
    ifedit = db.Column(db.String(20))
    editdate = db.Column(db.String(60))
    
    # Constructor from Python
    def __init__(self, img, userid, name, location, date):
        self.img = img
        self.userid = userid
        self.date = date
        self.name = name
        self.location = location
    
    def __repr__(self):
        return "Obj.plantName: %s" % self.plantName
        
        
class users(db.Model):
    userid = db.Column(db.Integer, primary_key = True)
    # userid = db.Column(db.Integer, unique = True)
    userlevel = db.Column(db.Integer, default = 0)
    facebook = db.Column(db.String(200))
    fbid = db.Column(db.String(20))
    username = db.Column(db.String(100))
    
    def __init__(self, facebook):
        self.facebook = facebook
        # self.userid = userid
        
    def __repr__(self):
        return "Obj.user: %s, %s" % self.username, self.userid
        
