# welcome.py
import pyttsx3

def text_to_speech(text, output_file="welcome.wav"):
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)
    engine.setProperty('volume', 1.0)
    voices = engine.getProperty('voices')
    female_voice = None
    for voice in voices:
        if "female" in voice.name.lower() or "female" in voice.id.lower():
            female_voice = voice.id
            break
    if female_voice:
        engine.setProperty('voice', female_voice)
    else:
        engine.setProperty('voice', voices[0].id)
    engine.save_to_file(text, output_file)
    engine.runAndWait()
    return output_file
