import './createmodal.css';
import { IconClose } from '../../../assets/icons';

function CreateModal({ isOpen = true, onClose, item }) {
    if (!isOpen) return null;

    return (
        <div className="createlModalWrapper">
            <aside>
                <IconClose 
                    width="40px"
                    height="40px"
                    className='closebutton'
                    onClick={onClose}
                />
                <h1 className='modaltitle'>제목</h1>
                <input />
                <h1 className='modaltitle'>내용</h1>
                <textarea />
                {/* <h1 className='modaltitle'>제목</h1>
                <p>{item.title}</p>
                <h1 className='modaltitle'>내용</h1>
                <p>{item.content}</p>
                <h1 className='modaltitle'>생성 날짜</h1>
                <p>{item.createdAt}</p>
                <h1 className='modaltitle'>수정 날짜</h1>
                <p>{item.updatedAt}</p>
                <h1 className='modaltitle'>완료 여부</h1>
                <p>{item.isComplete ? "완료" : "미완료"}</p> */}
            </aside>
        </div>
    );
};

export default CreateModal;