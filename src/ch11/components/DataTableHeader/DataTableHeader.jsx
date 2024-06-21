import "./style.css";

function DataTableHeader() {
    return (  
        <header className="table-header">
            <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
            <div>
                {
                    true && (
                <div>
                    <button>추가</button>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
                    )
                }
                {
                    false && (
                <div>
                    <button>확인</button>
                    <button>취소</button>
                </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;