from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# MongoDB configuration - use environment variable or default to localhost
MONGODB_URI = os.getenv('MONGODB_URI', 'mongodb://localhost:27017/')
client = MongoClient(MONGODB_URI)
db = client['portfolio']


@app.route('/api')
def api():
    return jsonify({'message': 'Portfolio API is running'})


@app.route('/api/translations/<language>')
def get_translations(language):
    """
    Fetch translations for a specific language in i18next format.
    Returns the data structure that i18next expects.
    
    Example response:
    {
      "translation": {
        "projects": "Projects",
        "stack": "Stack",
        ...
      }
    }
    """
    translation_doc = db.translations.find_one({'language': language})
    
    if not translation_doc:
        return jsonify({'error': f'Translations not found for language: {language}'}), 404
    
    # Return the data in i18next format (with 'translation' key)
    return jsonify(translation_doc.get('data', {}))


@app.route('/api/translations')
def get_all_translations():
    """
    Fetch all translations for all languages.
    
    Example response:
    {
      "en": { "translation": { ... } },
      "kz": { "translation": { ... } }
    }
    """
    translations = db.translations.find({})
    result = {}
    
    for translation_doc in translations:
        lang = translation_doc.get('language')
        if lang:
            result[lang] = translation_doc.get('data', {})
    
    return jsonify(result)


if __name__ == '__main__':
    # Get environment from env variable
    is_development = os.getenv('FLASK_ENV', 'production') == 'development'
    app.run(host='0.0.0.0', debug=is_development, port=5000)
