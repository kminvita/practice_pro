import './main.css';
import { DetailModal, CreateModal } from '../../components';
import { useState } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';
import TopInfo from '../topinfo';

dayjs.locale('ko');

function MainPage() {
    const [clickedItem, setClickedItem] = useState(null);
    const [isOpenCreatemodal, setIsOpenCreatemodal] = useState(false);
    const [todoList, setTodolist] = useState([]);
    
    const onClickTitle = (id) => {
        const clickedItem = todoList.find((item) => item.id ===id);
        if (!clickedItem) return;
        setClickedItem(clickedItem);
    }
    
    const onCloseModal = (key) => {
        if (key === "detail") setClickedItem(null);
        if (key === "create") setIsOpenCreatemodal(false);
    };

    const onClickAdd = () => {
        setIsOpenCreatemodal(true);
    }

    return (
        <>
            <main>
                <TopInfo onClickAdd={onClickAdd}/>
                <section className='todolist'>
                    {todoList.map((item) => {
                        return (
                                <article key={item.id} className={cx("todoitem", { complete: item.isComplete })}>
                                    <div>
                                        <p className='todotitle' onClick={() => onClickTitle(item.id)}>{item.title}</p>
                                        <time className='createdate'>생성날짜 {item.createdAt}</time>
                                    </div>
                                    <div>
                                        <button 
                                            type='button'
                                            className='completebutton'
                                        >
                                            {item.isComplete ? '완료해제' : '완료'}
                                        </button>
                                        <button 
                                            type='button' 
                                            className='editbutton'
                                        >
                                            수정
                                        </button>
                                        <button 
                                            type='button' 
                                            className='deletebutton'
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </article>
                        )
                    })}
                    {todoList.length === 0 && <span className='emptyText'>추가해주세요</span>}
                </section>
            </main>
            <DetailModal 
                isOpen={!!clickedItem} 
                onClose={() => onCloseModal("detail")} 
                item={clickedItem}
            />
            <CreateModal isOpen={isOpenCreatemodal} onClose={() => onCloseModal("create")}/>
        </>
    );
};

export default MainPage;