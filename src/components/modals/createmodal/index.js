import './createmodal.css';
import { IconClose } from '../../../assets/icons';

function CreateModal({ isOpen, onClose, value, onChange }) {
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
                <form>
                    <h1 className='modaltitle'>제목</h1>
                    <input 
                        type="text"
                        placeholder='제목을 입력해주세요'
                        name='value'
                        value={value.title}
                        onChange={onChange} 
                    />
                    <h1 className='modaltitle'>내용</h1>
                    <textarea 
                        placeholder='내용을 입력해주세요'
                        rows={12} 
                        name="content"
                        value={value.content}
                        onChange={onChange}
                    />
                    <button type='button'>생성</button>
                </form>
            </aside>
        </div>
    );
};

export default CreateModal;