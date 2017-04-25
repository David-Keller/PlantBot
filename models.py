import flask_sqlalchemy, app, os
from sqlalchemy.ext.hybrid import hybrid_property, hybrid_method
from sqlalchemy import func
import math

app.app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")

# Setup connection to DB system
db = flask_sqlalchemy.SQLAlchemy()
db.init_app(app.app)
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
    
    # Constructor from Python
    def __init__(self, img, userid, name, location, date):
        self.img = img
        self.userid = userid
        self.date = date
        self.name = name
        self.location = location
        self.latitude = location.split(' ', 2)[0]
        self.longitude = location.split(' ', 2)[1]
    
    def __repr__(self):
        return "Plantpost: name: %s, user: %s, date: %s" % (self.name, self.userid, self.date)
    
    # using the Haversine_formula to calculate distance
    @hybrid_method
    def distance(self, lat,lon):
        lat = math.radians(lat)
        lon = math.radians(lon)
        slat = math.radians(self.latitude)
        slon = math.radians(self.longitude)
        return 12742 * math.asin(math.sqrt(
            math.pow(math.sin((slat - lat)/2),2) + 
            math.cos(slat)*math.cos(lat)*
            math.pow(math.sin((slon - lon)/2),2)
            ))
    # using the Haversine_formula to calculate distance
    @distance.expression
    def distance(cls, lat,lon):
        lat = func.radians(lat)
        lon = func.radians(lon)
        slat = func.radians(cls.latitude)
        slon = func.radians(cls.longitude)
        return 12742 * func.asin(func.sqrt(
            func.pow(func.sin((slat - lat)/2),2) + 
            func.cos(slat)*func.cos(lat)*
            func.pow(func.sin((slon - lon)/2),2)
            ))
    
        
        
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
    

