export class FixedArray {
    #arrayLength; // 배열 초기화 시 길이
    #array;
    #currentLength; // 할당된 요소 개수

    // #arrayLength와 #array를 알맞게 초기화
    // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야됨.
    // #array초기화 시 각요소의 값은 undefined
    constructor(num) {
        this.#array = [];
        this.#arrayLength = num;
        this.#currentLength = 0;
        for (let i = 0; i < num; i++) {
            this.#array[i] = undefined;
        }
    }

    // 배열 맨 뒤에 요소 추가
    // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
    push(element) {
        if (this.#currentLength < this.#arrayLength) {
            this.#array[this.#currentLength] = element;
            this.#currentLength++;
        } else {
            throw new Error(`배열 길이 ${this.#arrayLength}를 초과함`);
        }
    }

    // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
    pop() {
        let tmp = 0;
        if (this.#currentLength > 0) {
            tmp = this.#array[this.#currentLength - 1];
            this.#array[this.#currentLength - 1] = undefined;
            this.#currentLength--;
        } else {
            throw new Error('배열에 요소가 없음');
        }
        return tmp;
    }

    // 현재 배열의 사용되고 있는 크기를 반환
    getLength() {
        return this.#currentLength;
    }

    // 현재 배열의 상태를 string으로 반환
    stringify() {
        if (this.#currentLength === 0) return '배열에 요소 없음';
        else {
            let tmp = '';
            for (let i = 0; i < this.#currentLength; i++) {
                if (i === 0) tmp += this.#array[i];
                else tmp += `, ${this.#array[i]}`;
            }
            return tmp;
        }
    }

    //////////////////////////////
    //////      LEVEL 2      /////
    //////////////////////////////
    // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
    indexOf(searchElement) {
        for (let i = 0; i < this.#currentLength; i++) {
            if (this.#array[i] === searchElement) return i;
        }
        return -1;
    }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
    // true 가 없으면 null 반환
    // [].find((item)=>item===1)
    find(predicate) {
        // for (let i = 0; i < this.#currentLength; i++) {
        //     if (predicate(this.#array[i])) return this.#array[i];
        // }
        // return null;
        const findIdx = this.findIndex(predicate);
        if (findIdx === -1) return null;
        return this.#array[findIdx];
    }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
    // true 가 없으면 -1 반환
    findIndex(predicate) {
        for (let i = 0; i < this.#currentLength; i++) {
            if (predicate(this.#array[i])) return i;
        }
        return -1;
    }

    // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
    includes(searchElement) {
        return this.#array.indexOf(searchElement) !== -1;
    }

    //////////////////////////////
    //////      LEVEL 3      /////
    //////////////////////////////
    // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
    forEach(callback) {
        for (let i = 0; i < this.#currentLength; i++) {
            callback(this.#array[i]);
        }
    }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환(FixedArray)
    filter(predicate) {
        const filteredArray = new FixedArray(this.#currentLength);
        for (let i = 0; i < this.#currentLength; i++) {
            if (predicate(this.#array[i])) filteredArray.push(this.#array[i]);
        }
        return filteredArray;
    }

    // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환(FixedArray)
    map(callback) {
        const mappedArray = new FixedArray(this.#currentLength);
        for (let i = 0; i < this.#currentLength; i++) {
            mappedArray.push(callback(this.#array[i]));
        }
        return mappedArray;
    }

    // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
    // [].reduce((a,c) => a+c, [])
    reduce(callback, initValue) {
        const len = this.getLength();
        if (len === 0) return initValue;

        let startIdx = 0;
        if (initValue != 0 && !initValue) {
            initValue = this.#array[0];
            startIdx++;
        }

        let acc = initValue; // 누적값 = 초기값
        for (let i = startIdx; i < len; i++) {
            acc = callback(acc, this.#array[i]);
        }
        return acc;
    }
}

const fixedArray = new FixedArray(5);
console.log('Initial array:', fixedArray.stringify());

fixedArray.push(1);
fixedArray.push(2);
fixedArray.push(3);
fixedArray.push(4);
fixedArray.push(5);
console.log(
    'Filtered array (elements > 2):',
    fixedArray.filter((x) => x > 2)
); // [3, 4, 5]
console.log(
    'Mapped array (elements * 2):',
    fixedArray.map((x) => x * 2)
); // [2, 4, 6, 8, 10]

const testArr = [];
fixedArray.forEach((x) => testArr.push(x));
console.log(testArr);

const sum = fixedArray.reduce((acc, x) => acc + x, 0);
