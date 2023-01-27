import React from 'react';
class Bye extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>bye{this.props.name}</p>
      </div>
    );
  }
}
export default Bye;
