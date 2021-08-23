function numToString(num) {
    let s = ""

    while (num > 0) {
        if (num === 1) {
            s += 'один';
        }
        else if (num === 2) {
            s += 'два';
        }
        else if (num === 3) {
            s += 'три';
        }
        else if (num === 4) {
            s += 'четыре';
        }
        else if (num === 5) {
            s += 'пять';
        }
        else if (num === 6) {
            s += 'шесть';
        }
        else if (num === 7) {
            s += 'семь';
        }
        else if (num === 8) {
            s += 'восемь';
        }
        else if (num === 9) {
            s += 'девять';
        }
        else if (num === 10) {
            s += 'десять';
        }
        else if (num === 11) {
            s += 'одиннадцать';
        }
        else if (num === 12) {
            s += 'двенадцать';
        }
        else if (num === 13) {
            s += 'тринадцать';
        }
        else if (num === 14) {
            s += 'четырнадцать';
        }
        else if (num === 15) {
            s += 'пятнадцать';
        }
        else if (num === 16) {
            s += 'шестнадцать';
        }
        else if (num === 17) {
            s += 'семньнадцать';
        }
        else if (num === 18) {
            s += 'восемьнадцать';
        }
        else if (num === 19) {
            s += 'девятнадцать';
        }
        else if (num >= 20 && num < 30) {
            s += 'двадцать ';
        }
        else if (num >= 30 && num < 40) {
            s += 'тридцать ';
        }
        else if (num >= 40 && num < 50) {
            s += 'сорок ';
        }
        else if (num >= 50 && num < 60) {
            s += 'пятьдесят ';
        }
        else if (num >= 60 && num < 70) {
            s += 'шесьтдесят ';
        }
        else if (num >= 70 && num < 80) {
            s += 'семьдесят ';
        }
        else if (num >= 80 && num < 90) {
            s += 'восемьдесят ';
        }
        else if (num >= 90 && num < 100) {
            s += 'девяносто ';
        }
        else if (num >= 100 && num < 200) {
            s += 'сто ';
        }
        else if (num >= 200 && num < 300) {
            s += 'двести ';
        }
        else if (num >= 300 && num < 400) {
            s += 'триста ';
        }
        else if (num >= 400 && num < 500) {
            s += 'четыреста ';
        }
        else if (num >= 500 && num < 600) {
            s += 'пятьсот ';
        }
        else if (num >= 600 && num < 700) {
            s += 'шестьсот ';
        }
        else if (num >= 700 && num < 800) {
            s += 'семьсот ';
        }
        else if (num >= 800 && num < 900) {
            s += 'восемьсот ';
        }
        else if (num >= 900 && num < 1000) {
            s += 'девятьсот ';
        }

        if (num < 20) {
            break;
        }
        else if (num < 100) {
            num = num % 10;
        }
        else {
            num = num % 100;
        }
    }

    console.log(s);
}

numToString(999);