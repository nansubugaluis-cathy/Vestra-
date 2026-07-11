import { CheckCircle } from "lucide-react";

const promise = [

"Outstanding cleaning performance",

"Fabric protection",

"Consistent quality",

"Professional results"

];

export default function OurPromise(){

return(

<section className="py-24 bg-green-50">

<div className="container">

<h2 className="text-5xl font-bold mb-12">

Our Promise

</h2>

<div className="grid md:grid-cols-2 gap-8">

{promise.map((item,index)=>(

<div
key={index}
className="bg-white p-8 rounded-xl shadow flex items-center gap-5"
>

<CheckCircle
className="text-green-600"
/>

<span className="text-xl">

{item}

</span>

</div>

))}

</div>

</div>

</section>

)

}
