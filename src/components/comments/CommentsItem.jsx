

export default function CommentsItem({id, name, text}){
    return(
        <div key={id}>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    )
}