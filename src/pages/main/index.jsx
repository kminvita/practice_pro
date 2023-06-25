import React, { useState, useEffect } from 'react';
import './main.css';
import { DetailModal, CreateModal, EditModal } from '../../components';

import TopInfo from './topinfo';
import TodoItem from './todoitem';
import Empty from './empty';

function MainPage() {
  const [clickedItem, setClickedItem] = useState(null);
  const [isOpenCreatemodal, setIsOpenCreatemodal] = useState(false);
  const [todoList, setTodolist] = useState([]);

  const onClickTitle = (id) => () => {
    const titleClickedItem = todoList.find((item) => item.id === id);
    if (!titleClickedItem) return;
    setClickedItem(titleClickedItem);
  };

  const onCloseModal = (key) => {
    if (key === 'detail') setClickedItem(null);
    if (key === 'create') setIsOpenCreatemodal(false);
  };

  const onClickAdd = () => {
    setIsOpenCreatemodal(true);
  };

  const onClickComplete = (id) => () => {
    const updatedList = todoList.reduce((acc, cur) => {
      if (cur.id === id) { return [...acc, { ...cur, isComplete: !cur.isComplete }]; }
      return [...acc, cur];
    }, []);

    setTodolist(updatedList);
  };

  const onClickDelete = (id) => () => {
    const deletedList = todoList.filter((item) => item.id !== id);
    setTodolist(deletedList);
  };

  useEffect

  return (
    <div>
      <main>
        <TopInfo onClickAdd={onClickAdd} />
        <section className="todolist">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onClickTitle={onClickTitle(item.id)}
              onClickComplete={onClickComplete(item.id)}
              onClickDelete={onClickDelete(item.id)}
            />
          ))}
          <Empty view={todoList.length === 0} />
        </section>
      </main>
      <DetailModal
        isOpen={!!clickedItem}
        onClose={() => onCloseModal('detail')}
        item={clickedItem}
      />
      <CreateModal
        isOpen={isOpenCreatemodal}
        onClose={() => onCloseModal('create')}
        setTodolist={setTodolist}
      />
      <EditModal />
    </div>
  );
}

export default MainPage;
