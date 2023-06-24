import './main.css';

function MainPage() {
    return (
        <main>
            <h1>our React Todolist</h1>
            <div className='Topnavbar'>
                <time>여기에 날짜</time>
                <button type='button'>추가</button>
            </div>
            {/* 리스트가 없을 경우에는 추가해주세요 라는 텍스트 추가할것임 */}
            <section className='todolist'>
                <article className='todoitem'>
                    <div>
                        <p className='todotitle'>제목입니다</p>
                        <tium className="createddate">생성날짜 2023-06-25</tium>
                    </div>
                    <div>
                        <button type='button'>수정</button>
                        <button type='button'>삭제</button>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default MainPage;