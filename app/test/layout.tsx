export default function TestLayout(props:any){

    return(
        <div>
            <h1>Test Layout</h1>
            <div className="w-[450px] h-[450px] bg-red-600">
                {props.children}
            </div>
            
        </div>
    )
}