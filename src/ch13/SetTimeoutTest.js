function SetTimeoutTest() {
    /*
    * 비동기
    */
    setTimeout(() => {
        print(count);
    }, 2000);

    function print(fx) {
        console.log(4);
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    /*
    * 콜백 함수
    */

    function test(fx) {
        console.log("test 함수 호출");
        fx();
    }

    function add() {
        console.log("add 함수 호출");
    }

    test(add); //fx에 add 함수가 호출되게 된다.

    return (
        <>
        
        </>
    );
}

export default SetTimeoutTest;