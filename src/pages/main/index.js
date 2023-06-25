import './main.css';
import { DetailModal, CreateModal } from '../../components';
import { useState } from 'react';
import dayjs from 'dayjs';
import TopInfo from './topinfo';
import TodoItem from './todoitem';
import Empty from './empty';
import { generateID } from '../../components/utils';

dayjs.locale('ko');

const INITIAL_VALUE = {
    title:"",
    content:""
};

function MainPage() {
    const [clickedItem, setClickedItem] = useState(null);
    const [isOpenCreatemodal, setIsOpenCreatemodal] = useState(false);
    const [todoList, setTodolist] = useState([]);
    const [value, setValue] = useState(INITIAL_VALUE);

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

    const onCreate = (e) => {
        e.preventDefault();

        if(!value.title || !value.content) return;

        const newItem = {
            id: generateID(), 
            ...value, 
            createdAt: dayjs().format('YYYY.MM.DD'), 
            updatedAt: dayjs().format('YYYY.MM.DD'), 
            isComplete: false, 
        };

        setTodolist((prev) => {
            return [...prev, newItem];
        })

        onCloseModal("create");
        setValue(INITIAL_VALUE);
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
                onCreate={onCreate}
                value={value}
                onChange={onChange}
                isOpen={isOpenCreatemodal}
                onClose={() => onCloseModal("create")}
            />
        </>
    );
};

export default MainPage;