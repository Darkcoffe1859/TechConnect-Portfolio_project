
from flask import render_template, request, redirect, url_for, flash
from app import app, db
from app.models import User
from flask_login import login_user, login_required, logout_user, current_user

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        user = User.query.filter_by(email=email).first()
        if user and user.check_password(password):
            login_user(user)
            flash('Login successful', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Login failed. Please check your credentials.', 'danger')
            return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html', user=current_user)

@app.route('/logout')
@login_required

def logout():

    logout_user()
    return redirect(url_for('index'))

