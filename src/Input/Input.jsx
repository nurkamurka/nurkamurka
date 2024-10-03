import { useState } from "react";
import { List } from "../List/List"
import { nanoid } from 'nanoid'
import InputStyles from "./input.module.css"

let arr 

if (localStorage.getItem('Todo')) {
    arr = JSON.parse(localStorage.getItem('Todo'))
} else {
    arr = []
}

export const Input = () => {
    const [notes, setNotes] = useState(arr)
    const [value, setValue] = useState('')

    const handleClickAdd = () => {
        const newNote = {
            id:nanoid(),
            isChecked: false,
            title: value,
            isEdit: false,
        }
        
        let copy = [...notes, newNote]
        setNotes(copy)
        setValue('')
        
        localStorage.setItem('Todo', JSON.stringify(copy))
    }

    const handleClickDel = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const handleClickCheck = (id) => {
        let copy = notes.map(el => {
            if(el.id === id) {
                el.isChecked = !el.isChecked
            }

            return el
        })
        setNotes(copy)
        localStorage.setItem('Todo', JSON.stringify(copy))
    }

    const handleClickEdit = (id) => {
        let copy = notes.map(el => {
            if(el.id === id) {
                el.isEdit = !el.isEdit
            }
            
            return el
        })
        setNotes(copy)
        localStorage.setItem('Todo', JSON.stringify(copy))
    }

    const handleEditInputClick = (id, e) => {
        let copy = notes.map(el => {
            if(el.id === id) {
                el.title = e.target.value
            }

            return el
        })
        setNotes(copy)
        localStorage.setItem('Todo', JSON.stringify(copy))
    }

    return (

    <div>
        <input className="MainInput" value={value} onChange={e => setValue(e.target.value)} type="text" />
        <button onClick={handleClickAdd}>Создать</button>
        <List notes={notes} onInputEdit={handleEditInputClick} onEdit={handleClickEdit} onChecked={handleClickCheck} onRemove={handleClickDel} />
    </div>
    );
    }