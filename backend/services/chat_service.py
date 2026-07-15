from backend.services.groq_service import ask_groq


def chat_with_pdf(text, question):

    prompt = f"""
You are an AI tutor.

Answer the student's question using ONLY the study material below.

If the answer is not found in the study material, say:

"I couldn't find that information in the uploaded PDF."

Study Material:

{text}

Student Question:

{question}
"""

    return ask_groq(prompt)
    