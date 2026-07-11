const reasons=[

"Premium-quality formulations",

"Professional cleaning performance",

"Designed for modern laundries and homes",

"Innovation-driven product development",

"Reliable and consistent results"

];

export default function WhyChoose(){

return(

<section className="py-24">

<div className="container">

<h2 className="text-5xl font-bold mb-12">

Why Choose VESTRA

</h2>

<div className="grid md:grid-cols-3 gap-8">

{reasons.map((reason,index)=>(

<div
key={index}
className="p-8 rounded-xl shadow-lg border"
>

<h3 className="font-bold text-2xl">

0{index+1}

</h3>

<p className="mt-5">

{reason}

</p>

</div>

))}

</div>

</div>

</section>

)

}
