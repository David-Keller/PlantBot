import flask_sqlalchemy, app, os

# REMOTE APPLICATION
app.app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")

# CLOUD9 DEVELOPMENT ENVIRONMENT
#app.app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:pass@localhost/messaging'

# Setup connection to DB system
db = flask_sqlalchemy.SQLAlchemy(app.app)
print "\"Models\" connected and DB import complete!"

# "TextObj" DB Model
class TextObj(db.Model):
    
    # Auto-Increment Primary Key Integer
    id = db.Column(db.Integer, primary_key=True)
    
    # Setup other columns
    text = db.Column(db.String(160))
    
    # Constructor from Python
    def __init__(self, text):
        self.text = text
    
    def __repr__(self):
        return "Obj.text: %s" % self.text
        
