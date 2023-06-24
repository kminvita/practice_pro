import './main.css';
import { CommonModal } from '../../components';
import { useState } from 'react';

function MainPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>모달 열기</button>
            <main>
                <h1>our React Todolist</h1>
                <div className='Topnavbar'>
                    <time>TODAY: 2023.06.25</time>
                    <button type='button' className='addbutton'>추가</button>
                </div>
                {/* 리스트가 없을 경우에는 추가해주세요 라는 텍스트 추가할것임 */}
                <section className='todolist'>
                    <article className='todoitem'>
                        <div>
                            <p className='todotitle'>제목입니다</p>
                            <tium className="createddate">생성날짜 2023-06-25</tium>
                        </div>
                        <div>
                            <button type='button' className='editbutton'>수정</button>
                            <button type='button' className='deletebutton'>삭제</button>
                        </div>
                    </article>
                </section>
            </main>
            <CommonModal isOpen={isOpen} />
        </>
    );
};

export default MainPage;