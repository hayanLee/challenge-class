class FixedArray {
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
}

const a = new FixedArray(3);
a.push(1);
a.push(2);
a.push(3);
console.log('길이 :' + a.getLength());
console.log(a.pop());
console.log(a.pop());
console.log('길이 :' + a.getLength());
console.log(a.stringify());
console.log(a);
