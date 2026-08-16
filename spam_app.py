import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import pickle

app = FastAPI()

# Load the trained spam classifier
pickle_in = open("build_spam_classifier.pkl", "rb")
classifier = pickle.load(pickle_in)


# Connect the frontend folder to FastAPI
app.mount("/static", StaticFiles(directory="frontend"), name="static")


# Open the SmartSpam AI Detector website
@app.get("/")
def index():
    return FileResponse("frontend/index.html")


# Spam prediction API
@app.post("/predict")
def predict(
    num_links: int,
    num_words: int,
    num_special_chars: int,
    has_spammy_keywords: int
):

    prediction = classifier.predict([
        [
            num_links,
            num_words,
            num_special_chars,
            has_spammy_keywords
        ]
    ])

    if prediction[0] == 0:
        prediction = "NOT SPAM"
    else:
        prediction = "SPAM"

    return {
        "prediction": prediction
    }


if __name__ == "__main__":
    uvicorn.run(
        app,
        host="127.0.0.1",
        port=5000
    )