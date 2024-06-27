import { useInput } from '../../hooks/useInput';

function CustomHookPage(props) {
    const usernamerInput = useInput("test", 20);
    const passwordInput = useInput("", 10);
    return (
        <div>
            <input type="text" onChange={usernamerInput.onChange} value={usernamerInput.value} />
            <input type="password" onChange={passwordInput.onChange} value={passwordInput.value} />
        </div>
    );
}

export default CustomHookPage;