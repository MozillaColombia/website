# coding: utf-8
from flask import (
    Flask, url_for, render_template, session, redirect, escape, request,
    flash, redirect, current_app, Response
)

from flask_wtf import Form, RecaptchaField
from wtforms import (
     TextField, TextAreaField, SubmitField, validators, ValidationError,
     RadioField
)
from flask.ext.mail import Message, Mail



class ContactForm(Form):

  first_name = TextField("Nombre",
      [validators.Required("Este campo es obligatorio.")])
  last_name = TextField("Apellido",
      [validators.Required(u"Este campo es obligatorio.")])
  email = TextField("Email",
      [validators.Required("Este campo es obligatorio."),
      validators.Email("Tienes que ingresar una dirección de correo válida")])
  subject = TextField("Asunto",
      [validators.Required("Este campo es obligatorio")])
  message = TextAreaField("Mensaje", 
      [validators.Required("Tienes que ingresar un mensaje.")])
  submit = SubmitField("Enviar")

  recaptcha = RecaptchaField()



class ContributeForm(Form):

  category = RadioField("Categoría",
      [validators.Required()],
      choices=[('coding', 'coding'), ('testing','testing'), 
      ('writing','writing'), ('teaching','teaching'),
      ('translating', 'translating'), ('activism', 'activism'),
      ('helping', 'helping'), ('education', 'education')])
  name = TextField("name",
      [validators.Required(u"Este campo es obligatorio.")])
  email = TextField("Email",
      [validators.Required("Este campo es obligatorio."),
      validators.Email("Tienes que ingresar una dirección de correo válida")])
  message = TextAreaField("Message", 
      [validators.Required("Tienes que ingresar un mensaje.")])
  submit = SubmitField("Enviar")

  recaptcha = RecaptchaField()



mail = Mail()

app = Flask(__name__)
app.secret_key = 'test_key'
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True

#These fields needs to be filled in production
app.config['MAIL_USERNAME'] = 'contacto@mozillacolombia.org'
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_RECIPIENTS'] = ['gioyik@mozillacolombia.org']

app.config['RECAPTCHA_PRIVATE_KEY'] = ''
app.config['RECAPTCHA_PUBLIC_KEY'] = '6LckyAcTAAAAANSkOgWHfenFU2KHUnE_g_acdA-o'


mail.init_app(app)


# routes

@app.route('/')
def home():
    return render_template('home/index.html')

@app.route('/participa', methods=['GET', 'POST'])
def contribute():
    form = ContributeForm()
    if request.method == 'POST':
      if form.validate() == False:
        flash("Error")
        return render_template('contribute/index.html', form=form)
      else:
        msg = Message('[' + form.category.data + '] tenemos un voluntario nuevo!',
            sender=app.config['MAIL_USERNAME'],
            recipients=app.config['MAIL_RECIPIENTS'])
        msg.body = """
          De: {0} <{1}>
          Un nouveau contributeur vient de s'inscrire, dans la catégorie : **{2}**
          Mensaje : 
          {3}
        """.format(form.name.data, form.email.data, form.category.data, form.message.data)
        mail.send(msg)

      return render_template('contribute/index.html', form=form, sent=True)
    elif request.method == 'GET':
        return render_template('contribute/index.html', form=form)

@app.route('/enlaces')
def resources():
    return render_template('resources/index.html')

@app.route('/acerca')
def about():
    return render_template('about/index.html')

@app.route('/contacto', methods=['GET', 'POST'])
def contact():
    form = ContactForm()

    if request.method == 'POST':
      if form.validate() == False:
        flash("Error")
        return render_template('contact/index.html', form=form)
      else:
        msg = Message(form.subject.data, sender=app.config['MAIL_USERNAME'],
            recipients=app.config['MAIL_RECIPIENTS'])
        msg.body = """
          From: {0} <{1}>
          {2}
          """.format(form.first_name.data + " " + form.last_name.data,
          form.email.data, form.message.data)

        mail.send(msg)

        return render_template('contact/index.html', form=form, sent=True)
    elif request.method == 'GET':
        return render_template('contact/index.html', form=form)

@app.route('/equipo')
def team():
    return render_template('team/index.html')

@app.route('/eventos')
def events():
    return render_template('events/index.html')

@app.route('/blog')
def blog():
    return redirect('http://mozillacolombia.org/blog')

@app.errorhandler(404)
def blog_redirection(e):
    return redirect('http://mozillacolombia.org/blog{0}'.format(request.path))


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
