const React = require('react');

class Index extends React.Component {
  render() {
      const { Lists } = this.props;
      return (
              <div style={{textAlign:"center"}}>
                  <h1>Index Page</h1>
                  <ol>
                    {Lists.map((char,i)=>{
                        return (
                            <p>
                                <h3><a href={`/${Lists[i]}`}>{`${char}`}</a></h3>
                            </p>
                        )
                    })}
                  </ol>
              </div>
      );
  }
}
module.exports = Index;