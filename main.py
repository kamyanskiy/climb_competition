from flask import Flask
from flask import redirect, render_template, url_for, flash, request
from forms import RouteForm, CardForm

from pprint import pprint

app = Flask(__name__)
app.secret_key = "somesecretkey"


DUMB = []


@app.route("/", methods=['GET', 'POST'])
def index():
    global DUMB
    if DUMB:
        form = CardForm(**{"route": DUMB})
    else:
        form = CardForm()

    if form.validate_on_submit():
        DUMB = []
        for route in form.route.entries:
            DUMB.append(
                {   "color": route.color.data,
                    "attempt_1" : route.attempt_1.data,
                    "attempt_2" : route.attempt_2.data,
                    "attempt_3" : route.attempt_3.data,
                    "result" : route.result.data,
                }
            )
        pprint(DUMB)
        flash("Data stored OK")

        return redirect(url_for('index'))

    print(form.errors)
    return render_template("index.html", form=form)


if __name__ == "__main__":
    app.run(debug=True)
