from flask import Blueprint, request, jsonify
from .models import User, db
import json

# Create a Blueprint for your views
views_bp = Blueprint('views', __name__)

# Define your routes and views

@views_bp.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
    return jsonify(user_list)

@views_bp.route('/api/users', methods=['POST'])
def create_user():
    data = json.loads(request.data)
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201

