// LIFO
class Stack {
    #stack;
    constructor() {
        this.#stack = [];
    }

    // 요소를 스택에 추가
    push(element) {
        if (element === undefined) throw new Error('빈 값은 스택에 추가할 수 없음');
        this.#stack.push(element);
    }

    // 스택에서 요소를 제거
    pop() {
        if (this.isEmpty()) throw new Error('스택이 비어있음');
        return this.#stack.pop();
    }

    // 스택의 최상단 요소를 확인
    peek() {
        if (this.isEmpty()) throw new Error('스택이 비어있음');
        return this.#stack.at(-1);
    }

    // 스택이 비어있는지 확인
    isEmpty() {
        return this.#stack.length === 0;
    }

    // 스택의 요소 수를 확인
    size() {
        return this.#stack.length;
    }

    // 스택을 비움
    clear() {
        this.#stack = [];
    }

    // 스택의 모든 요소를 출력
    print() {
        console.log(this.#stack.join(','));
    }
}

// 사용 예시
const stack = new Stack();
// stack.push();
// stack.pop();
stack.push(1);
console.log(stack.peek()); // 1
stack.push(2);
console.log(stack.peek()); // 2
stack.push(3);
stack.print(); // 1,2,3
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
stack.print(); // 1,2
