const personGenerator = {
    surnameJson: `{
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Августина",
            "id_2": "Елизавета",
            "id_3": "Дарья",
            "id_4": "Ванда",
            "id_5": "Лада",
            "id_6": "Анна",
            "id_7": "Леся",
            "id_8": "Марианна",
            "id_9": "Милиса",
            "id_10": "Лилия"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    majorMale: `{
        "count": 5,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Слесарь",
            "id_3": "Драгер",
            "id_4": "Канавщик",
            "id_5": "Котельщик"
        }
    }`,
    majorCommon: `{
        "count": 8,
        "list": {
            "id_1": "Повар",
            "id_2": "Программист",
            "id_3": "Врач",
            "id_4": "Учитель",
            "id_5": "Бухгалтер",
            "id_6": "Кассир",
            "id_7": "Менеджер по продажам",
            "id_8": "Парикмахер",
            "id_9": "Водитель автобуса",
            "id_10": "Дворник"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {

        return gender == this.GENDER_MALE ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);

    },

    randomSurname: function(gender) {

        return gender == this.GENDER_MALE ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а';

    },

    randomPatronymic: function(gender) {
        let res;
        let vowels = ['а', 'о', 'и', 'ы', 'у', 'э', 'й'];
        let randPatronymic = this.randomFirstName(this.GENDER_MALE);

        if (randPatronymic.slice(-1) == 'й') {
            res = randPatronymic.slice(0, -1);
            res += gender == this.GENDER_MALE ? 'eвич' : 'eвна';
        } else {
            if (vowels.includes(randPatronymic.slice(-1))) {
                res = randPatronymic.slice(0, -1);
                res += gender == this.GENDER_MALE ? 'ович' : 'овна';
            } else {
                res = randPatronymic;
                res += gender == this.GENDER_MALE ? 'ович' : 'овна';
            }
        }

        return res;
    },

    randomMagor: function(gender) {
        let res;
        if (gender == this.GENDER_FEMALE) {
            res = this.randomValue(this.majorCommon);
        } else {
            res = this.randomIntNumber(1, 0) == 1 ? this.randomValue(this.majorCommon) : this.randomValue(this.majorMale);
        }
        return res;
    },

    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();

        this.person.gender = this.randomIntNumber(1, 0) == 1 ? this.GENDER_FEMALE : this.GENDER_MALE;
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname =  this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);

        this.person.birthdate = this.randomIntNumber(1960, 2005);
        this.person.major = this.randomMagor(this.person.gender);

        return this.person;
    }
};
