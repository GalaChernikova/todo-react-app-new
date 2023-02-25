

export default function CommentsItem({comId, comName, comText}){
    return(
        <div key={comId}>
            <div>{comName}</div>
            <div>{comText}</div>
        </div>
    )
}