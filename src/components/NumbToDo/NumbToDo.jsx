import { useRecoilValue } from "recoil";
import { TotalToDo } from "../../state/selectors/TotalToDo";

const NumbToDo = () => {
  const totalToDo = useRecoilValue(TotalToDo);
  return (
    <div className="bg-white w-[350px] flex justify-center items-center p-9 rounded-xl shadow-lg shadow-gray-500/50 md:w-[500px] h-[75px]">
      <h3 className="font-bold text-center">Total tasks: {totalToDo}</h3>
    </div>
  );
};

export default NumbToDo;
