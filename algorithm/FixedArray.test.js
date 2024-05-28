import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { FixedArray } from './FixedArray.js';

// describe : 테스트 그룹 이름(= 그룹 실행 함수) 설정
describe('FixedArray', () => {
    let fixedArray;
    let testNumberArray;
    const TEST_LENGTH = 5;

    // 각 테스트(it) 실행 전에 공통으로 실행되는 함수
    beforeEach(() => {
        fixedArray = new FixedArray(TEST_LENGTH);
        testNumberArray = [];

        for (let i = 1; i <= TEST_LENGTH; i++) {
            fixedArray.push(i);
            testNumberArray.push(i);
        }
    });

    // 각 테스트 정의(테스트 이름, 실행함수)
    // 테스트 이름이 주석이기 때문에 구분할 수 있는 이름으로 짓기
    // expect = "테스트를 실행한다"
    it('pop', () => {
        const lastElement = testNumberArray.pop();

        expect(fixedArray.pop()).to.equal(lastElement); // 요소 제거
        expect(fixedArray.getLength()).to.equal(testNumberArray.length); // 반환
    });

    it('getLength', () => {
        expect(fixedArray.getLength()).to.equal(testNumberArray.length);
    });

    it('toString', () => {
        expect(fixedArray.stringify()).to.equal(testNumberArray.join(', '));
    });

    it('indexOf', () => {
        expect(fixedArray.indexOf(2)).to.equal(testNumberArray.indexOf(2));
    });
    it('find', () => {
        expect(fixedArray.find((x) => x > 3)).to.equal(testNumberArray.find((x) => x > 3));
    });
    it('findIndex', () => {
        expect(fixedArray.findIndex((x) => x > 3)).to.equal(
            testNumberArray.findIndex((x) => x > 3)
        );
    });
    it('includes', () => {
        expect(fixedArray.includes(2)).to.equal(true);
        expect(fixedArray.includes(7)).to.equal(false);
    });
    it('forEach', () => {
        const newTestArray = [];
        fixedArray.forEach((x) => newTestArray.push(x));
        expect(newTestArray).to.deep.equal(testNumberArray); // ===
    });

    it('filter', () => {
        const newTestArray = fixedArray.filter((x) => x > 2); // 배열
        // JSON.stringify (배열 -> 문자열)
        expect(newTestArray.stringify()).to.deep.equal(
            testNumberArray.filter((x) => x > 2).join(', ')
        );
    });
    it('map', () => {
        const newTestArray = fixedArray.map((x) => x * 2);
        expect(newTestArray.stringify()).to.equal(testNumberArray.map((x) => x * 2).join(', '));
    });
    it('reduce', () => {
        const initialValue = 0;
        const testValue = testNumberArray.reduce((a, c) => a + c, initialValue);
        expect(fixedArray.reduce((a, c) => a + c, initialValue)).to.equal(testValue);
    });
});
