from datetime import datetime

from inflection import underscore
from sqlalchemy import Column, Integer, DateTime
from sqlalchemy.exc import DatabaseError
from sqlalchemy.ext.declarative import declarative_base, declared_attr
from sqlalchemy.orm import Session


class _Base:
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    
    @declared_attr
    def __tablename__(self):
        return underscore(self.__name__)

    @classmethod
    def query(cls, session):
        return session.query(cls)

    def save(self, session: Session):
        session.add(self)
        self._flush(session)
        return self

    def delete(self, session: Session):
        session.delete(self)
        self._flush(session)

    # noinspection PyMethodMayBeStatic
    def _flush(self, session: Session):
        try:
            session.flush()
        except DatabaseError:
            session.rollback()
            raise


Base = declarative_base(cls=_Base)
