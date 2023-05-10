const React = require("react");
class Show extends React.Component {
  render() {
   const {fruits} = this.props
    return (
      <div>
        <h3> Fruit Page </h3>
        <ul>
         {fruits.map((fruit, i)=>{
            return(
               <li key={i}>
                  <strong>{fruit.name} </strong>has <strong>{fruit.color}</strong> color.<br/>
                  <img src={fruit.url} alt="not found" style={{width:"100px", height:"100px"}} ></img>
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