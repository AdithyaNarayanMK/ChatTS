import pytest
from flask import g, session
from FlaskServer.db import get_db
import json

def test_register(client, app):
    username = "a"
    password = "a"
    response = client.post(
        '/auth/register',
        data={'email': username, 'password': password}
    )
    
    with app.app_context():
        assert get_db().execute(
            "SELECT * FROM user WHERE user_email = 'a'",
        ).fetchone() is not None


@pytest.mark.parametrize(('username', 'password', 'message'), (
    ('', '', 'email is required.'),
    ('a', '', 'Password is required.'),
    ('test', 'test', 'User already exist in the database'),
))
def test_register_validate_input(client, username, password, message):
    response = client.post(
        '/auth/register',
        data={'email': username, 'password': password}
    )
    assert message in json.loads(response.data.decode())["info"]



def test_login(client, auth):
    response = auth.login()

    with client:
        client.get("/")
        assert session["user_id"] == 1


@pytest.mark.parametrize(('username', 'password', 'message'), (
    ('a', 'test', 'Unauthorized'),
    ('test', 'a', 'Unauthorized'),
    ('test', 'test', 'login Successful'),
    ("", "", "Unauthorized")
))
def test_login_validate_input(auth, username, password, message):
    response = auth.login(username, password)
    assert message in json.loads(response.data.decode())["info"]


def test_logout(client, auth):
    auth.login()

    with client:
        auth.logout()
        assert 'user_id' not in session
    
        response = auth.logout()
        assert "User not logged in" in json.loads(response.data.decode())["info"]
