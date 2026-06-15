import os
from flask import Flask, request, jsonify
from hugchat import hugchat
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    if not data or 'query' not in data:
        return jsonify({'error': 'No query provided'}), 400
    user_query = data['query']
    try:
        bot_response = chatBot(user_query)
        return jsonify({'response': bot_response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    flask_debug = os.getenv("FLASK_DEBUG", "False").lower() in ("true", "1", "t")
    app.run(host="0.0.0.0", port=5000, debug=flask_debug)
