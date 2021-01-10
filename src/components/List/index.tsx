import * as S from './styles';

interface IListProps {
  data: any[];
  onCellClick: (value: any) => void;
}

const List: React.FC<IListProps> = ({ data, onCellClick }) => {
  return (
    <S.Container>
      {data.map((item, index) => {
        return (
          <div key={index} onClick={() => onCellClick(item)}>
            <span>{item.name}</span>
          </div>
        );
      })}
    </S.Container>
  );
};

export default List;
