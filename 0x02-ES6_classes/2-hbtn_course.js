export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('must be a array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(namme) {
    if (typeof namme !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = namme;
  }

  get length() {
    return this._length;
  }

  set length(lengthh) {
    if (typeof lengthh !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = lengthh;
  }

  get students() {
    return this._students;
  }

  set students(student) {
    if (!Array.isArray(student)) {
      throw new TypeError('must be a array');
    }
    this._students = student;
  }
}
