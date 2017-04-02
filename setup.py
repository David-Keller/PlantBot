import models

# models.db.engine.execute("drop table plants")
models.db.create_all()


plant = models.plants("test4.png", 1, "daisy", "180.11 20.22", "05/04/2017 20:05:00")
models.db.session.add(plant)
models.db.session.commit()