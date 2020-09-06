const React = require('react'); 
class New extends React.Component{
    render(){
        return(
          
            <div style={{backgroundColor:'green'}}>
            <h1 style= {{textAlign:'center'}}>Add a New Shoe</h1>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                Description: <input type="text" name="description" /><br/>
                IMG: <input type="URL" name="img" /><br/>
                Price: <input type ="number" name ="price"/><br/>
                
                {/* Where does the quantity get store?
                Where does the quantity get store?
                Where does the quantity get store? */}
                Qty: <input type = "number" name= "qty"/><br/>


                <input type="submit" name="" value="Create A New Shoe"/>
             </form>
        </div>
        )
    }
}
module.exports = New; 