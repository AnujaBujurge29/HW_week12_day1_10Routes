const React = require("react");
class Show extends React.Component {
  render() {
   const {planets} = this.props
    return (
      <div>
        <h1> Planets Page </h1>
        <ul>
         {planets.map((planet, i)=>{
            return(
               <li key={i}>
                  <strong>{planet.names}</strong> has {planet.moons} moons.<br/><br/>
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
