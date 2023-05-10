const React = require("react");
class Show extends React.Component {
  render() {
   const {vegetables} = this.props
    return (
      <div>
        <h1> Fruit Page </h1>
        <ul>
         {vegetables.map((char, i)=>{
            return(
               <li key={i}>
                  <strong>{char.name} </strong>has <strong>{char.color}</strong> color.<br/><br/>
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