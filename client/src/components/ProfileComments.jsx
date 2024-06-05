import IconInput from './IconInput'

export default () => {
    return (
        <form className="space-y-5 mb-10">
            <div className="dark:bg-mixed-700 bg-light-200 flex flex-col max-h-96 rounded-tr-xl rounded-xl">
                <div className="ml-5 mt-4 flex">
                    <div className="rounded-full min-h-12 max-h-12 min-w-12 max-w-12 dark:bg-mixed-700 bg-light-200"></div>
                    <div className="ml-2 mr-8 mt-2 text-xl border-b dark:border-mixed-800 border-light-500 dark:text-light-400 text-light-600 truncate">
                        Title Title Title Title Title Title Title Title Title
                        Title Title Title Title Title Title Title Title
                    </div>
                </div>
                <div className="flex">
                    <div className="ml-9 mt-4">
                    <img width="96" height="96" src="https://img.icons8.com/material-rounded/96/down-right.png" alt="down-right" className="opacity-50"/>
                    </div>
                    <div className=" ml-2 mr-8 p-3 mt-2 mx-auto dark:bg-mixed-700 bg-light-300 shadow-lg rounded-tr-xl rounded-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet dolore aliquid quasi fuga debitis voluptatibus,
                        placeat alias aspernatur libero minus est, soluta
                        excepturi deleniti repudiandae doloremque rem. Sapiente,
                        non voluptates.
                    </div>
                </div>
                <div className="mt-1 ml-2 mb-1 dark:text-light-400 text-light-600">Date commented: date here</div>
            </div>
        </form>
    )
}
