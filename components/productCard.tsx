export default function ProductCard(props : any){
  
  console.log(props)

  return (
    <div className="bg-[#FF0000] w-[208.9px] h-[563.65px]">

      <h1>{props.name}</h1>
      <img src={props.imageURL}/>
      <p>Price: {props.price}</p>

    </div>
  )

}