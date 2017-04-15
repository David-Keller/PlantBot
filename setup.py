import models
from datetime import datetime

models.db.engine.execute("drop table plants")
models.db.create_all()


plant = models.plants("daisy.png", 2, "daisy", "50.1 16.22", datetime.now())
models.db.session.add(plant)
plant = models.plants("rose.png", 2, "rose", "51.9 16.9", datetime.now())
models.db.session.add(plant)
plant = models.plants("pansy.png", 2, "pansy", "49.5 16.2", datetime.now())
models.db.session.add(plant)
models.db.session.commit()

# user = models.users("test key")
# models.db.session.add(user)
# models.db.session.commit()

# results = models.db.engine.execute("select * from plants where distance <= 1")
# request = models.plants.query.filter(models.plants.distance(50,16.22) < 200)


request = models.plants.query.filter(models.plants.ilike("%rose%"))
results = request.all()
for row in results:
    # print("img: " , row['img'], "date: ", row['date'])
    print(row)
# print requests