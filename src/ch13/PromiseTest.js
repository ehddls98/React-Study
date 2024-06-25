function PromiseTest() {

    /*
    * Promise 비동기 객체 
    * Promise의 3가지 상태
    * 1. 대기 -> 이행되지도, 거부되지도 않은 상태
    * 2. 이행 -> 연산이 성공했을 때의 상태
    * 3. 거부 -> 연산을 실패했을 때의 상태
    * 
    * then, catch, finally는 promise 객체에만 사용할 수 있다. 
    */

    function p1(name) {
        return new Promise((resolve, reject) => {
            // 대기상태(동기처리)
            console.log(name + "프로미스 생성");
            if(!name) {
                reject("오류!!!"); //거부(reject) -> catch로 전달
            }
            resolve(name); //이행(resolve) -> then의 result로 전달
        });
    }

    async function p2() { //함수 앞에 async를 달면 무조건 promise 객체를 반환한다. then을 사용할 수 있다. 
        let a = null; 
        try {
            a = await p4(); 
            //await을 써주면 p4의 resolve값을 동기처리로 받아온다. 
            //await -> 이행할 때까지 기다려준다. 
            //await은 async 함수 안에서만 사용할 수 있다. 
            //promise 객체에만 사용할 수 있다.
            //await setTimeout(() => {}, 2000); -> setTimeout은 promise 객체가 아니기 때문에 async 함수 안에서 사용할 수 없다.
            await p5();
        } catch(error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }

    function p3 () { //async를 달지 않았을때 promise 객체를 반환하는 방법. p3는 p2와 같은 코드이다.
        return new Promise((resolve, reject) => {
            resolve("p3");
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!");
    }
    
    const handleClick = () => {
        p1("p1") //p1 함수를 호출하여 promise 객체를 생성하고 그 안의 콜백함수를 실행한다. 
        .then(result => { //resolve가 호출되면 then이 실행된다. resolve의 매개변수 값이 then의 result로 전달된다. then 자체가 하나의 대기상태이다.
            console.log("이행");
            console.log(result);
            if(true) {
                throw new Error("거부!!"); //거부(reject) -> catch의 error로 전달
            }
            return "두번째 then"; //이행(resolve) -> 다음 then으로 전달
        })
        .then(result => {
            console.log(result); //result = "두번째 then", promise는 동기처리로 생성되고 then은 비동기처리로 실행된다.
        }).catch(error => {
            console.log(error); 
        });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            });
        }, 2000);
            

        // p3().then(r => console.log(r)); 
    }

    return (
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
     );
}

export default PromiseTest;