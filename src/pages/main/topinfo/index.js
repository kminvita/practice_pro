import dayjs from 'dayjs';

dayjs.locale('ko');

function TopInfo({ onClickAdd }) {
  return (
    <>
      <h1>Our React Todolist</h1>
      <div className="Topnavbar">
        <time>
          TODAY:
          {dayjs().format('YYYY.MM.DD')}
        </time>
        <button type="button" className="addbutton" onClick={onClickAdd}>추가</button>
      </div>
    </>
  );
}

export default TopInfo;
