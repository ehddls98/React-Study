function Box({ name, isShow, children }) {
    const result = false && "김동인"; 
    //true && true = true, 
    //true && 값 = 앞에 값이 true일 때 뒤에 값이 출력됨 
    //false && 값 = false가 result에 들어가고 출력 안됨 
    console.log(result);
    return <div>
        <h1>{name}</h1>
        {children}
        {1 + 1}
        {false && "김동인"}
        {isShow && <h3>안녕하세요</h3>} 
        {/* isShow가 true일 때 안녕하세요 출력, false 일땐 아무것도 출력 안함 */}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>} 
        {/* true/false에 따라 다른 값을 출력하고 싶을땐 삼항연사자를 사용 해야함 */}

    </div>
}

export default Box; 