
import Image from "next/image";

function ProductCard(props : any){
  
  console.log(props.children)

  return (
    <div className="bg-[#FF0000] w-[208.9px] h-[563.65px]">

      <h1>{props.name}</h1>
      <img src={props.imageURL}/>
      <p>Price: {props.price}</p>
      {props.children}

    </div>
  )

}

export default function Home() {
  return (
    <div>
      
      <ProductCard name="Apple iPhone" price="LKR 25,000" imageURL="https://picsum.photos/id/3/200/300"/>
      
      <ProductCard name="MacBook Air" price="LKR 55,000" imageURL="https://picsum.photos/id/1/200/300"/>

      <ProductCard name="Forks set" price="LKR 1,000" imageURL="https://picsum.photos/id/23/200/300">\
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, cum.</p>
        <h1>Test</h1>
      </ProductCard>

    </div>
  );
}