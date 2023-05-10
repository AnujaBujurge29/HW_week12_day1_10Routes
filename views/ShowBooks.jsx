const React = require("react");
class Show extends React.Component {
  render() {
   const {books} = this.props
    return (
      <div>
        <h3> Books Page </h3>
        <ul>
         {books.map((char, i)=>{
            return(
               <li key={i}>
                  <strong>{char.title}</strong> is written by <strong>{char.author}</strong>.<br/>
                  <img src={char.url} alt="not found" style={{width:"100px", height:"150px"}}></img>
               </li>
            )
         })
         }
        </ul>
      </div>
    );
  }
}
module.exports = Show;