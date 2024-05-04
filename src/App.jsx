import { useState, useEffect } from "react"
import { Header, Search, TransactionForm, Table } from "./components"
function App() {
  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [search, setSearch] = useState("")

  const submitHandler = data => {
    setTransactions((currentState) => [...currentState, data])
  }

  useEffect(() => {
    if(search.length === 0){
      setFilteredTransactions(transactions)
    } else {
      const filtered = transactions.filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))
      setFilteredTransactions(filtered)
    }
  }, [search, transactions])

  return (
    <>
      <Header />
      <Search value={search} onChange={(event) => setSearch(event.target.value)} />
      <TransactionForm submitHandler={submitHandler} />
      <Table transactions={filteredTransactions} />
    </>
  )
}

export default App
