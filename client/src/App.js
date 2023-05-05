import {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [itemText, setItemText] = useState('');
    const [listItems, setListItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState('');
    const [updateItemText, setUpdateItemText] = useState('');

    // Add new item to the database when clicking on the add button
    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/api/item", {item: itemText})
            setListItems(prev => [...prev, res.data]);
            setItemText('');
        }catch (err){
            console.log(err);
        }
    }

   // Fetch all items from the database using the useEffect hook
    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/items")
                setListItems(res.data);
                console.log('render')
            } catch (err) {
                console.log(err);
            }
        }
        getItemsList()
    }, []);

    // Delete item when clicking on the delete button
    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3001/api/item/${id}`)
            const newListItems = listItems.filter(item=> item._id !== id);
            setListItems(newListItems);
        }catch (err){
            console.log(err);
        }
    }

    // Update item when clicking on the update button
    const updateItem = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.patch(`http://localhost:3001/api/item/${isUpdating}`, {item:updateItemText})
            console.log(res.data)
            const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
            const updatedItem = listItems[updatedItemIndex].item = updateItemText;
            setUpdateItemText('');
            setIsUpdating('');
        }catch (err){
            console.log(err);
        }
    }

    // Render the update form
    const renderUpdateForm = () => (
        <form className={"update-form"} onSubmit={(e)=>{updateItem(e)}} >
            <input className={"update-new-input"} type={"text"} placeholder={"New Item"} onChange={e=>{setUpdateItemText(e.target.value)}} value={updateItemText}/>
            <button className={"update-new-btn"} type={"submit"}>Update</button>
        </form>
    )

    return (
        <div className={"App"}>
            <h1>Todo List</h1>
            <form className={"form"} onSubmit={e => addItem(e)}>
                <input type={"text"} placeholder={"Add Todo Item"} onChange={e => {setItemText(e.target.value)} } value={itemText} />
                <button type={"submit"}>Add</button>
            </form>
            <div className={"todo-listItems"}>
                {
                    listItems.map(item => (
                        <div className={"todo-item"}>
                            {
                                isUpdating === item._id
                                    ? renderUpdateForm()
                                    : <>
                                        <p className={"item-content"}>{item.item}</p>
                                        <button className={"update-item"} onClick={() => {setIsUpdating(item._id)}}>Update</button>
                                        <button className={"delete-item"} onClick={() => {deleteItem(item._id)}}>Delete</button>
                                    </>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App;
