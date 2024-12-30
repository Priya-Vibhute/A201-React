
function Header()
{
    let student={
        id:101,
        name:"Nisha"
    }
    let counter=6;
    let a=[12,45,89,23]
    return(
        <div>
            <h1>Header {student["id"]}</h1>
            <p>Counter  {counter}</p>

            {a.map((m)=>{
                return <li>{m}</li>
            })}
        </div>
    );
}

export default Header