from flask import Flask
import os


def create_app():
    app = Flask(__name__, instance_relative_config = True)
    app.config.from_mapping(
        DATABASE = os.path.join(app.instance_path, "Database.sqlite"),
        SECRET_KEY = "dev",
        PERMANENT_SESSION_LIFETIME = 5000,
    )

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass



    from . import db
    db.init_app(app)

    from .auth import auth_bp
    app.register_blueprint(auth_bp)


   
    return app