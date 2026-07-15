from backend.services.groq_service import ask_groq


def generate_quiz(text):

    prompt = f"""
You are a university teacher.

Read the following study material and generate 5 multiple-choice questions.

Rules:
- Each question must have 4 choices (A, B, C, D).
- Clearly indicate the correct answer.
- Make the questions educational.

Study Material:

{text}
"""

    return ask_groq(prompt)