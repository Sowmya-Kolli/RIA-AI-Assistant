# 🤖 RIA - AI Voice Assistant

RIA (Responsive Intelligent Assistant) is an AI-powered voice assistant that enables users to interact through natural conversations using voice and text. It integrates speech processing with Generative AI to provide intelligent responses through a simple web interface.

## 🚀 Features

- 🎙️ Voice-based user interaction
- 💬 Text chat support
- 🧠 AI-powered responses using Gemini API
- 🔊 Text-to-Speech response generation
- 🌐 Web-based user interface
- ⚡ Flask backend integration
- 🔐 Secure API key management using environment variables
- 🎨 Responsive and user-friendly interface


## 🛠️ Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Python
- Flask

**AI & APIs**
- Google Gemini API
- Speech Recognition
- Text-to-Speech


## 📂 Project Structure

```
RIA_Assistant/
│
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
│
├── requirements.txt
├── .env.example
├── .gitignore
└── README.md
```


## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Sowmya-Kolli/RIA-AI-Assistant.git
```

Move into the project:

```bash
cd RIA-AI-Assistant
```


### 2. Create Virtual Environment (Optional)

```bash
python -m venv venv
```

Activate it:

Windows:

```bash
venv\Scripts\activate
```


### 3. Install Dependencies

```bash
pip install -r requirements.txt
```


### 4. Configure Environment Variables

Create a `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

Never expose your actual API keys publicly.


### 5. Run the Application

```bash
python app.py
```

Open:

```
http://localhost:5000
```


## 🔒 Security Implementation

- API keys are stored using environment variables.
- `.env` file is ignored using `.gitignore`.
- Example configuration is provided through `.env.example`.


## 🎯 Future Enhancements

- User authentication
- Conversation history storage
- Personalized assistant memory
- Multiple AI model support
- Deployment on cloud platforms


## 👩‍💻 Developer

**Sowmya Kolli**

Computer Science Engineering Student

Interested in:
- Software Development
- Artificial Intelligence
- Machine Learning
- Cloud Technologies


---

⭐ If you like this project, consider giving it a star!