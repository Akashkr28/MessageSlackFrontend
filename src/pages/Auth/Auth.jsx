export const Auth = ({ children }) => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-[#BBDDF8]">
            <div className="w-screen h-screen overflow-hidden ">
                {children}
            </div>    
        </div>
    )
};