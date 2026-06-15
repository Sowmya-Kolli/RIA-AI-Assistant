import pyttsx3
import speech_recognition as sr
import eel

def speak(text):
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[1].id)  # Set
    engine.setProperty('rate', 150)  # Set speech rate
    print(voices)
    engine.say(text)
    engine.runAndWait()
@eel.expose
def takecommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source, duration=0.2)
        try:
            audio = r.listen(source, timeout=15, phrase_time_limit=6)
        except sr.WaitTimeoutError:
            print("Listening timed out, please try again.")
            return ""
        try:
            query = r.recognize_google(audio, language='en-in')
            print(f"User said: {query}")
        except Exception:
            return ""
        return query.lower()   