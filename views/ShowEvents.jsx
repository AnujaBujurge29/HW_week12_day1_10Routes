const React = require("react");
class Show extends React.Component {
  render() {
   const {events} = this.props
    return (
      <div>
        <h3> Events Page </h3>
        <ul>
         {events.map((char, i)=>{
            return(
               <li key={i}>
                  <strong>{char.name}</strong> has <strong>{char.nature}</strong> nature.<br/><br/>
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