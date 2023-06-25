import './createmodal.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import { IconClose } from '../../../assets/icons';
import { generateID } from '../../utils';

dayjs.locale('ko');

const INITIAL_VALUE = {
  title: '',
  content: '',
};

function CreateModal({ isOpen, onClose, setTodolist }) {
  const [value, setValue] = useState(INITIAL_VALUE);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const onCreate = (e) => {
    e.preventDefault();

    if (!value.title || !value.content) return;

    const newItem = {
      id: generateID(),
      ...value,
      createdAt: dayjs().format('YYYY.MM.DD hh:mm:ss'),
      updatedAt: dayjs().format('YYYY.MM.DD hh:mm:ss'),
      isComplete: false,
    };

    setTodolist((prev) => [...prev, newItem]);

    onClose();
    setValue(INITIAL_VALUE);
  };

  if (!isOpen) return null;

  return (
    <div className="createlModalWrapper">
      <aside>
        <IconClose
          width="40px"
          height="40px"
          className="closebutton"
          onClick={onClose}
        />
        <form onSubmit={onCreate}>
          <h1 className="modaltitle">제목</h1>
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            name="title"
            value={value.title}
            onChange={onChange}
          />
          <h1 className="modaltitle">내용</h1>
          <textarea
            placeholder="내용을 입력해주세요"
            rows={12}
            name="content"
            value={value.content}
            onChange={onChange}
          />
          <button type="submit">생성</button>
        </form>
      </aside>
    </div>
  );
}

export default CreateModal;
