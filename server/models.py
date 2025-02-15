from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Page(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    codename = db.Column(db.String(255), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    sections = db.relationship('Section', backref='page', lazy=True)


class Section(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    page_id = db.Column(db.Integer, db.ForeignKey('page.id'), nullable=False)
    codename = db.Column(db.String(255), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    contents = db.relationship('Content', backref='section', lazy=True)


class Content(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    section_id = db.Column(db.Integer, db.ForeignKey(
        'section.id'), nullable=False)
    codename = db.Column(db.String(255), nullable=False)
    language = db.Column(db.String(10), nullable=False)
    text = db.Column(db.Text, nullable=False)
    __table_args__ = (
        db.UniqueConstraint(
            'section_id',
            'codename',
            'language',
            name='_section_codename_language_uc'
        ),
    )
