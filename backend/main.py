from backend.services.groq_service import ask_groq
from backend.services.quiz_service import generate_quiz
from backend.services.flashcard_service import generate_flashcards
from backend.services.chat_service import chat_with_pdf
from fastapi import FastAPI, UploadFile, File, Form
from backend.services.pdf_reader import extract_text
import shutil
import os

app = FastAPI()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "Welcome to StudyMind AI!"}


@app.post("/upload")
def upload_pdf(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)

    summary = ask_groq(
        "Summarize this PDF in simple English:\n\n" + text
    )

    return {
        "message": "File uploaded successfully!",
        "filename": file.filename,
        "summary": summary
    }


@app.get("/test-ai")
def test_ai():

    answer = ask_groq("Say hello to Safi and welcome him to AI engineering.")

    return {
        "response": answer
    }


@app.post("/quiz")
def generate_pdf_quiz(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)

    quiz = generate_quiz(text)

    return {
        "filename": file.filename,
        "quiz": quiz
    }


@app.post("/flashcards")
def generate_pdf_flashcards(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)

    flashcards = generate_flashcards(text)

    return {
        "filename": file.filename,
        "flashcards": flashcards
    }


@app.post("/chat")
def chat_pdf(
    file: UploadFile = File(...),
    question: str = Form(...)
):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)

    answer = chat_with_pdf(text, question)

    return {
        "filename": file.filename,
        "question": question,
        "answer": answer
    }