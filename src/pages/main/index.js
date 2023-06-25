import './main.css';
import { DetailModal, CreateModal } from '../../components';
import { useState } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';
import TopInfo from './topinfo';
import TodoItem from './todoitem';

dayjs.locale('ko');

function MainPage() {
    const [clickedItem, setClickedItem] = useState(null);
    const [isOpenCreatemodal, setIsOpenCreatemodal] = useState(false);
    const [todoList, setTodolist] = useState([]);
    
    const onClickTitle = (id) => () => {
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
                                <TodoItem 
                                    key={item.id}
                                    item={item}
                                    onClickTitle={onClickTitle(item.id)}
                                />
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