import categories from '../../data/categories'; 

const Form = () => {
    const [info, setInfo] = useState<IInfoState>({
        category:'',
        activity:'',
        calories: 0
    })

  return (
    <form
    className=" space-y-5 bg-white shadow p-10 rounded-lg">
        <div className=" grid grid-cols-1 gap-3">
            <label htmlFor="category">Category:</label>
            <select
            className=" border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category"
            value={info.category}
            >
                {categories.map(category => <option 
                key={category.id}
                value={category.id}
                >{category.name}</option>)}

            </select>
        </div>
        <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="activity" className=' font-bold'>Activity:</label>
        <input 
        id='activity'
        type='text'
        className=' border border-slate-300 p-2 rounded-lg'
        placeholder='Ex. Meal, Juice, Salad, Exercise, Bicycle, Dumbbells'
        value={info.activity}></input>
        </div>

        <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=' font-bold'>Calories:</label>
        <input id='calories'
        type='number'
        className=' border border-slate-300 p-2 rounded-lg'
        placeholder='Calories Ex. 200, 300'
        value={info.calories}></input>
        </div>

        <input
        type='submit'
        className=' bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer'
        value={'Save Food or Save Exercise'}></input>
        </form>
  )
}

export default Form