export const List = ({ notes, onRemove, onChecked, onEdit, onInputEdit }) => {

    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <input type="checkbox" checked={note.isChecked} onChange={() => onChecked(note.id)}/>
                    {note.isEdit ? <input onChange={e => onInputEdit(note.id, e)} value={note.title} /> : <span>{note.title}</span>}
                    <button onClick={() => onRemove(note.id)}>Удалить</button>
                    <button onClick={() => onEdit(note.id)}>Редактировать</button>
                </li>
            ))}
        </ul>
    );
}