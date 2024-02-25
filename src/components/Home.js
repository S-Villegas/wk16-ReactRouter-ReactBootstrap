
//importing image:
import gradimage2 from "../assets/gradimage2.avif"

function Home() {
    return (
        <div>
            <h4>Congratulations! As you cherish the fruits of your hard work; we wish that success keeps following you in eerything that you do.
            Embark on who you are, what you have accomplished and what you have yet to continue accomplishing. 
            SHINE ON!</h4>
            <img src={gradimage2}/>  
        </div>

    )
}

//this it is the default return .'export default' matches component & file name.
export default Home;