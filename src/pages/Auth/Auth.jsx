export const Auth = ({ children }) => {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center">
            <div className="h-auto w-[100vw]">
                {children}
            </div>    
        </div>
    )
};