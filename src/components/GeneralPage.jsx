import Nav from "./header/Nav";
import MyPosts from "./myPosts/MyPosts";
import MyToDo from "./myToDo/MyToDo";
import TodoList from "./myToDo/TodoList";

export default function GeneralPage(){
    return(
        <div className="w-10/12 mx-auto min-h-screen flex flex-col sm:w-full">
            <Nav />
            
            <div className="flex gap-5 w-10/12 mx-auto justify-between lg:flex-col lg:justify-center">
                <div className="1/4 lg:w-full mx-auto font-main text-2xl text-stone-600 bg-white-bg rounded-2xl p-4 drop-shadow-md">
                    <TodoList />
                    <MyToDo />
                </div>  
                <div className="w-3/4 lg:w-full">
                    <MyPosts />
                </div>              
            </div>

        </div>
    )
}