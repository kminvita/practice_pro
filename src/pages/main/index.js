import './main.css';
import { DetailModal, CreateModal } from '../../components';
import { useState } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';

const DUMMY_TODOLIST = [
    {
        id: 1,
        title: '할 일 1입니다.',
        content: '내용 1입니다.',
        createdAt: dayjs().format('YYYY.MM.DD HH:mm:ss'),
        updatedAt: dayjs().format('YYYY.MM.DD HH:mm:ss'),
        isComplete: true,
    },
    {
        id: 2,
        title: '할 일 2입니다.',
        content: '내용 2입니다.',
        createdAt: dayjs().format('YYYY.MM.DD HH:mm:ss'),
        updatedAt: dayjs().format('YYYY.MM.DD HH:mm:ss'),
        isComplete: false,
    }
];

dayjs.locale('ko');

function MainPage() {
    const [clickedItem, setClickedItem] = useState(null);
    const [isOpenCreatemodal, setIsOpenCreatemodal] = useState(false);
    const [todoList, setTodolist] = useState(DUMMY_TODOLIST);
    
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
                <h1>our React Todolist</h1>
                <div className='Topnavbar'>
                    <time>TODAY: {dayjs().format('YYYY.MM.DD')}</time>
                    <button type='button' className='addbutton' onClick={onClickAdd}>추가</button>
                </div>
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