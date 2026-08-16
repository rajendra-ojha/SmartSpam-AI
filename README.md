# SmartSpam AI

SmartSpam AI is a supervised machine learning project that detects whether a message is **SPAM** or **NOT SPAM** based on its message characteristics.

The project uses a trained **Logistic Regression** model and integrates it with a **FastAPI backend** and a web-based frontend built with **HTML, CSS, and JavaScript**.

## Project Overview

The system analyzes the following four characteristics of a message:

- Number of links
- Number of words
- Number of special characters
- Presence of spammy keywords

These features are passed to the trained machine learning model, which predicts whether the message is spam or not spam.

## Machine Learning

### Learning Type

**Supervised Learning**

### Algorithm

**Logistic Regression**

### Classification

| Prediction | Meaning |
|------------|---------|
| `0` | NOT SPAM |
| `1` | SPAM |

### Dataset

The project uses a spam detection dataset containing **10,000 records**.

The dataset contains the following columns:

| Feature | Description |
|---------|-------------|
| `num_links` | Number of links present in the message |
| `num_words` | Number of words in the message |
| `num_special_chars` | Number of special characters in the message |
| `has_spammy_keywords` | Indicates whether spam-related keywords are present |
| `label` | Target variable indicating SPAM or NOT SPAM |

### Train-Test Split

The dataset is divided into:

- **80% training data**
- **20% testing data**

### Model Performance

The Logistic Regression model achieved a test accuracy of:

**95.95%**

## How SmartSpam AI Works

The prediction process follows this workflow:

```text
Message Characteristics
        |
        v
FastAPI Backend
        |
        v
Trained Logistic Regression Model
        |
        v
Prediction
        |
        v
SPAM or NOT SPAM
```

## Features

- Detects spam based on message characteristics
- Uses a trained Logistic Regression classifier
- Provides a FastAPI backend for predictions
- Provides a web-based user interface
- Displays the prediction as SPAM or NOT SPAM
- Supports real-time prediction through the API

## Technologies Used

### Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Logistic Regression

### Backend

- FastAPI
- Uvicorn
- Pickle

### Frontend

- HTML
- CSS
- JavaScript

### Development Tools

- Jupyter Notebook
- Visual Studio Code
- Git
- GitHub

## Project Structure

```text
SmartSpam-AI/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── build_spam_classifier.ipynb
├── build_spam_classifier.pkl
├── spam_app.py
├── spam_detection.csv
├── requirements.txt
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rajendra-ojha/SmartSpam-AI.git
```

### 2. Navigate to the Project Directory

```bash
cd SmartSpam-AI
```

### 3. Install the Required Packages

```bash
pip install -r requirements.txt
```

### 4. Run the FastAPI Application

```bash
python spam_app.py
```

### 5. Open the Application

Open the following address in your web browser:

```text
http://127.0.0.1:5000/
```

## API Endpoint

The application provides the following prediction endpoint:

```text
POST /predict
```

### Input Parameters

The API accepts four parameters:

```text
num_links
num_words
num_special_chars
has_spammy_keywords
```

For example:

```text
num_links = 2
num_words = 50
num_special_chars = 8
has_spammy_keywords = 1
```

### API Response

If the model detects spam:

```json
{
    "prediction": "SPAM"
}
```

If the model determines that the message is not spam:

```json
{
    "prediction": "NOT SPAM"
}
```

## Machine Learning Workflow

The machine learning workflow used in this project is:

```text
Dataset
   |
   v
Data Preparation
   |
   v
Feature Selection
   |
   v
Train-Test Split
   |
   v
Logistic Regression
   |
   v
Model Training
   |
   v
Model Evaluation
   |
   v
Save Trained Model
   |
   v
FastAPI Integration
   |
   v
Web Application
```

## Project Purpose

The purpose of this project is to demonstrate how a supervised machine learning classification model can be developed and integrated into a complete application.

The project combines:

**Machine Learning + FastAPI + Web Frontend**

to create a working spam detection system.

## Author

**Rajendra Kumar Ojha**

GitHub: https://github.com/rajendra-ojha

## License

This project is created for educational and machine learning project purposes.
