import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { FixedArray } from './FixedArray.js';

// describe : 테스트 그룹 이름(= 그룹 실행 함수) 설정
describe('FixedArray', () => {
    let numberArray;
    let testNumberArray;
    const TEST_LENGTH = 5;
    // 각 테스트(it) 실행 전에 공통으로 실행되는 함수
    beforeEach(() => {
        numberArray = new FixedArray(TEST_LENGTH);
        testNumberArray = [];

        for (let i = 1; i <= TEST_LENGTH; i++) {
            numberArray.push(i);
            testNumberArray.push(i);
        }
    });

    // 각 테스트 정의(테스트 이름, 실행함수)
    // 테스트 이름이 주석이기 때문에 구분할 수 있는 이름으로 짓기
    it('getLength', () => {
        // expect = "테스트를 실행한다"
        expect(numberArray.getLength()).to.equal(testNumberArray.length);
    });
    it('toString', () => {});
    it('pop', () => {});
});
