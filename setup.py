import models

# models.db.engine.execute("drop table plants")
models.db.create_all()


# plant = models.plants("daisy.png", 2, "daisy", "170.16 16.22", "05/02/2017 12:05:00")
# models.db.session.add(plant)
# models.db.session.commit()

user = models.users("test key")
models.db.session.add(user)
models.db.session.commit()

# results = models.db.engine.execute("select * from plants where userid = 2")
# for row in results:
#     print("img: " , row['img'], "date: ", row['date'])
#     print(row['date'])