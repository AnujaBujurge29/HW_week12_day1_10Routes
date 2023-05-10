const React = require("react");
class Show extends React.Component {
  render() {
   const {zodiac} = this.props
    return (
      <div>
        <h3> Zodiac Page </h3>
        <ul>
         {zodiac.map((char, i)=>{
            return(
               <li key={i}>
                  <strong>{char.name}</strong> has <strong>{char.element}</strong> element.<br/>
                  <img src={char.url} alt="no found" style={{width:"100px", height:"150px"}}></img>
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