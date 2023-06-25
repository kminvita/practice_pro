import './main.css';
import { DetailModal, CreateModal } from '../../components';
import { useState } from 'react';

import TopInfo from './topinfo';
import TodoItem from './todoitem';
import Empty from './empty';


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
    };

    const onClickComplete = (id) => () => {
        const updatedList = todoList.reduce((acc, cur) => {
            if(cur.id === id) 
                return [...acc, { ...cur, isComplete: !cur.isComplete }];
            return [...acc, cur];
        }, []);

        setTodolist(updatedList);
    };

    return (
        <>
            <main>
                <TopInfo onClickAdd={onClickAdd}/>
                <section className='todolist'>
                    {todoList.map((item) => 
                        <TodoItem 
                            key={item.id}
                            item={item}
                            onClickTitle={onClickTitle(item.id)}
                            onClickComplete={onClickComplete(item.id)}
                        />
                    )}
                    <Empty view={todoList.length === 0} />
                </section>
            </main>
            <DetailModal 
                isOpen={!!clickedItem} 
                onClose={() => onCloseModal("detail")} 
                item={clickedItem}
            />
            <CreateModal 
                isOpen={isOpenCreatemodal}
                onClose={() => onCloseModal("create")}
                setTodolist={setTodolist}
            />
        </>
    );
};

export default MainPage;