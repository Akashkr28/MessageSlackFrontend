export const Auth = ({ children }) => {
    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <div className="h-auto w-[720px]">
                {children}
            </div>    
        </div>
    )
};