import cx from 'classnames';

function TodoItem({ item, onClickTitle }) {
    return (
        <article className={cx("todoitem", { complete: item.isComplete })}>
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
    );
};

export default TodoItem;