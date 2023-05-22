from flask import session, request, Blueprint, redirect
from werkzeug.security import check_password_hash, generate_password_hash
from functools import wraps


from FlaskServer.db import get_db

auth_bp = Blueprint("auth", __name__, url_prefix = "/auth")

@auth_bp.route("/register", methods = ["POST"])
def register():
    
    email = request.form["email"]
    password = request.form["password"]
    
    if email == "":
        return {"info": "email is required."}, 409
    elif password =="":
        return {"info": "Password is required."}, 409
    
    db = get_db()
    ifExist = db.execute("select user_email from user where user_email = ?",(email,)).fetchone()
    if ifExist:
        
        return {"info": "User already exist in the database"}, 409
    

    db.execute("insert into user (user_email, password) values (?, ?)",(email, generate_password_hash(password)))
    db.commit()
    data = db.execute("select id from user where user_email = ?",(email,)).fetchone()

    return {"user_email": email, "id" : data["id"], "info" : "registered Successfully"}, 200


@auth_bp.route("/login", methods = ["POST"])
def login():
    email = request.form["email"]
    password = request.form["password"]

    db = get_db()
    data = db.execute("select * from user where user_email = ?",(email,)).fetchone()
    if not data:
        return {"info": "Unauthorized"}, 401
     
    if not check_password_hash(data["password"],password):
        return {"info": "Unauthorized"}, 401



    session["user_id"] = data["id"]
   
    return {"user_email" : email, "id" : data["id"],"info" : "login Successful"}, 200



@auth_bp.route("/logout", methods = ["GET"])
def logout():
    ses = session.get("user_id", None)

    if ses is None:
        return {"info":"User not logged in"}, 401
    session.clear()

    return {"info": "logged out successfully"}, 200



def login_required(func):
    @wraps(func)
    def wrapped(*args, **kargs):
        if session.get("user_id",None) is None:
            return {"error": "Unauthorized access"}, 401
        
        return func(*kargs, **kargs)

    return wrapped