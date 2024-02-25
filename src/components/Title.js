
//this is component function name (good practice to name it same as file:Title.js) 
function Title({myYear}) {
return (
    <div>    
        <h1>College of Research & Science - Class of {myYear}</h1>
    </div>
)
}

//this it is the default return .'export default' matches component & file name.
export default Title;