import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

function TodoItems ({text, id, isComplete, onDelete, toggle}) {
    return (
        <div className="flex items-center my-3 gap-2">
            <div onClick={()=> {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete ? tick : not_tick} alt="" className='w-7 cursor-pointer' />
                <p className={`ml-4 text-slate-700 text-1xl decoration-slate-500 font-medium ${isComplete ? "line-through" : ""}`}>{text}</p>
            </div>

            <img onClick={()=>{onDelete(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' onClick={() => onDelete && onDelete(id)}/>
        </div>
    )
}

export default TodoItems;