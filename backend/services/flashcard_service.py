from backend.services.groq_service import ask_groq


def generate_flashcards(text):

    prompt = f"""
You are an expert teacher.

Read the following study material and create 10 flashcards.

Rules:
- Each flashcard must have:
  Front:
  Back:

- Keep answers short.
- Focus on important concepts.
- Make them easy to memorize.

Study Material:

{text}
"""

    return ask_groq(prompt)