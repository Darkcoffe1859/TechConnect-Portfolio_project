import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your_secret_key_here')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI', 'sqlite:///your-database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CORS_HEADERS = 'Content-Type'

    class DevelopmentConfig(Config):
        DEBUG = True

    class ProductionConfig(Config):
        DEBUG = False

    config = {
            'development': DevelopmentConfig,
            'production': ProductionConfig,
            'default': DevelopmentConfig
            }

