from flask_wtf import FlaskForm

from wtforms import StringField, IntegerField, FormField, FieldList, SubmitField, SelectField
from wtforms.validators import DataRequired


class RouteForm(FlaskForm):
    color = SelectField(label="Color", choices=[(1, "Red"), (2, "Green"), (3, "Yellow")], coerce=int)
    attempt_1 = IntegerField(label="1st", validators=[DataRequired(),])
    attempt_2 = IntegerField(label="2nd", validators=[DataRequired(),])
    attempt_3 = IntegerField(label="3rd", validators=[DataRequired(),])
    result = IntegerField('result', default=0)


class CardForm(FlaskForm):
    route = FieldList(FormField(RouteForm), min_entries=2, max_entries=30)
