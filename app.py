from flask import Flask, render_template
import os

app = Flask(__name__)

# Route to serve the main HTML page
@app.route('/')
def index():
    return render_template('poc.html')

# Run the app on http://localhost:5000 by default
if __name__ == '__main__':
    app.run(debug=True)