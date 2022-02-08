//조건문 Upgrade
//1
function isKoreanFood(food) {
    if (food === '불고기' || food === '비빔밥' || food === '떡볶이') {
        return true;
    } else {
        return false;
    }
}
const food1 = isKoreanFood('불고기');
console.log(food1); //true
const food2 = isKoreanFood('피자');
console.log(food2); //false
//2
function isKoreanFood2(food) {
    if (['불고기', '떡볶이', '비빔밥'].includes(food)) {
        return true;
    }
    return false;
}
const food3 = isKoreanFood2('비빔밥');
console.log(food3); //true
const food4 = isKoreanFood2('파스타');
console.log(food4); //false

//3 -> 주어진 값에 따라 각각 다른 값을 반환하는 함수, 비교할 조건들이 많아지면 별로다
const getMeal = (mealType) => {
    if (mealType === '한식') return '불고기';
    if (mealType === '일식') return '스시';
    if (mealType === '양식') return '스테이크';
    if (mealType === '중식') return '멘보샤';
    return '굶기';
}
console.log(getMeal('양식'));
console.log(getMeal('과일'));
//4 (3)번의 문제를 해결 하기  -> 객체의 property에 접근하는 괄호 표기법으로 해결
meal = {
    한식: '불고기',
    일식: '스시',
    양식: '스테이크',
    중식: '멘보샤',
    인도식: '커리'
}
const getMeal2 = (mealType) => {
    return meal[mealType] || '굶기';
}
console.log(getMeal2('일식'));