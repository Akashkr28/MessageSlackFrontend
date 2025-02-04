export const Auth = ({ children }) => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-white via-gray-300 to-black dark:from-gray-800 dark:via-gray-700 dark:to-black">
            <div className="w-screen h-screen overflow-hidden  flex justify-center items-center ">
                {children}
            </div>    
        </div>
    )
};