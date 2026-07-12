export default function LoginPage(){

return(

<div className="container py-24">

<h1 className="text-5xl font-bold">

Login

</h1>

<form className="mt-10 space-y-6">

<input

type="email"

placeholder="Email"

className="border p-4 rounded w-full"

/>

<input

type="password"

placeholder="Password"

className="border p-4 rounded w-full"

/>

<button

className="btn-primary"

>

Login

</button>

</form>

</div>

)

}
