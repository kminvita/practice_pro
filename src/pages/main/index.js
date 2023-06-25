import './main.css';
import { DetailModal, CreateModal } from '../../components';
import { useState } from 'react';
import dayjs from 'dayjs';
import TopInfo from './topinfo';
import TodoItem from './todoitem';
import Empty from './empty';
import { generateID } from '../../components/utils';

dayjs.locale('ko');

function MainPage() {
    const [clickedItem, setClickedItem] = useState(null);
    const [isOpenCreatemodal, setIsOpenCreatemodal] = useState(false);
    const [todoList, setTodolist] = useState([]);
    const [value, setValue] = useState({ title:"", content:"" });

    const onChange = (e) => {
        const  { name, value } = e.currentTarget;
        setValue((prev) => ({ ...prev, [name]: value }));
    };
    
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

    const onCreate = () => {
        const newItem = { id: generateID(), ...value }
        // ...value는 title: value.title이고 content: value.content인데 합쳐서 ...value로 적어줘도 된다.

        // setTodolist((prev) => {
        //     return [...prev, ]
        // })
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
                value={value}
                onChange={onChange}
                isOpen={isOpenCreatemodal}
                onClose={() => onCloseModal("create")}
            />
        </>
    );
};

export default MainPage;