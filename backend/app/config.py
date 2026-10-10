import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "ResQAI Emergency Ambulance Connectivity Platform"
    API_V1_PREFIX: str = "/api"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "resqai-super-secret-emergency-security-key-2026")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./resqai.db")
    CORS_ORIGINS: list = ["http://localhost:3000", "http://127.0.0.1:3000", "*"]

    class Config:
        case_sensitive = True

settings = Settings()
