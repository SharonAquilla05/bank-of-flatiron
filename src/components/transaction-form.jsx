import { useState } from "react"
export const TransactionForm = ({ submitHandler }) => {
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState(0)

    const onSubmit = (evt) => {
        evt.preventDefault()
        submitHandler({ date, description, category, amount })
        setDate("")
        setDescription("")
        setCategory("")
        setAmount(0)
    }
  return (
    <div className="flex justify-around m-8 flex-row shadow border-4 rounded border-gray-200">
        <form onSubmit={onSubmit}>
            <input value={date} onChange={evt => setDate(evt.target.value)} type="date" name="date" className="shadow border rounded p-2 text-gray-700 m-8 focus:outline-none" />
            <input value={description} onChange={evt => setDescription(evt.target.value)} type="text" name="description" placeholder="Description" className="shadow border rounded p-2 text-gray-700 m-8 focus:outline-none" />
            <input value={category} onChange={evt => setCategory(evt.target.value)} type="text" name="category" placeholder="Category" className="shadow border rounded p-2 text-gray-700 m-8 focus:outline-none" />
            <input value={amount} onChange={evt => setAmount(evt.target.value)} type="number" name="amount" placeholder="Amount" className="shadow border rounded p-2 text-gray-700 m-8 focus:outline-none" />
            <input type="submit" value="Submit" className="bg-green-500 text-white p-4 rounded" />
        </form>
    </div>
  )  
}