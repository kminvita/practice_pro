import './detailmodal.css';
import { IconClose } from '../../../assets/icons';

function DetailModal({ isOpen }) {
    if (!isOpen) return null;

    return (
        <div className="detailModalWrapper">
            <aside>
                <IconClose width="40px" height="40px" className='closebutton' />
                <h1 className='modaltitle'>제목</h1>
                <p>제목 데이터</p>
                <h1 className='modaltitle'>내용</h1>
                <p>내용 데이터</p>
                <h1 className='modaltitle'>생성 날짜</h1>
                <p>생성 날짜 데이터</p>
                <h1 className='modaltitle'>수정 날짜</h1>
                <p>수정 날짜 데이터</p>
                <h1 className='modaltitle'>완료 여부</h1>
                <p>완료 여부 데이터</p>
            </aside>
        </div>
    );
};

export default DetailModal;