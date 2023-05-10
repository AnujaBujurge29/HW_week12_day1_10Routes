const React = require("react");
class Show extends React.Component {
  render() {
   const {colors} = this.props
    return (
      <div>
        <h3> Colors Page </h3>
        <ul>
         {colors.map((char, i)=>{
            return(
               <li key={i}>
                  <strong>{char.color}</strong> has <strong>{char.hex}</strong> hex code.<br/>
                  <img src={char.url} alt="not found" style={{width:"100px", height:"100px"}}></img>
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