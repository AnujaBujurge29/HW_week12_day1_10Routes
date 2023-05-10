const React = require("react");
class Show extends React.Component {
  render() {
   const {pokemon} = this.props
    return (
      <div>
        <h3> Character Page </h3>
        <ul>
         {pokemon.map((char, i)=>{
            return(
               <li key={i}>
                  <strong>{char.name}</strong> has <strong>{char.species}</strong> species.<br/><br/>
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