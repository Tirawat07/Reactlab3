

const stylePic = {display:'flex',justifyContent:'center',padding:'20px'}
const picText = {display:'flex',justifyContent:'center', flexDirection:'column',textAlign:'center',padding:'20px',}
const divPost = {display:'flex',justifyContent:'space-between',gap:'20px',marginBottom:'30px' }




function Pic() {
    return (
        <div style = {stylePic}>
            <img style = {{borderRadius:'50%'}}  src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80
">
            </img>
        </div>
    )

}


function Pictext() {

    return (
        <div style ={picText} >
            <h2>Julienne Moore</h2>
            <h3>Julienne.Moore@company.com</h3>
        </div>
    )
}


function Post() {




    return (
        <div style = {divPost}>

            <div >
                <h2>25</h2>
                <h3>Posts</h3>
            </div>
            <div>
                <h2>350</h2>
                <h3>Following</h3>
            </div>
            <div>
                <h2>1.5K</h2>
                <h3>Followers</h3>
            </div>
        </div>
    )

}


function Rendering() {
    return (
        <div>
            <Pic />
            <Pictext />
            <Post />
        </div>
    )
}





ReactDOM.createRoot(document.querySelector("#root"))
    .render(<Rendering />)


let result = ()=>{}