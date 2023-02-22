import Nav from "./header/Nav";
import MyToDo from "./myToDo/MyToDo";
import TodoList from "./myToDo/TodoList";

export default function GeneralPage(){
    return(
        <div className="w-10/12 mx-auto bg-stone-600 min-h-screen flex flex-col">
            <Nav />
            
            <div className="flex w-10/12 mx-auto md:flex-col">
                <div className="w-96 md:w-full mx-auto font-main text-2xl text-stone-600 bg-red-50 rounded-2xl p-4">
                    <TodoList />
                    <MyToDo />
                </div>  
                <div className="w-2/3"></div>              
            </div>

        </div>
    )
}