// /// ############## ////// //////####### //////####### //////
// /////////###### STOCK X E-COMMERCE STORE ####### ///////////////
// /////////################ //////####### //////####### //////

const React = require("react");
const Default = require('./components/Default.jsx')
class Index extends React.Component {
  render() {
    const fruits = this.props.fruits;
    return (
      <Default>
        <ol style={{ display: "flex", flexWrap: "wrap-reverse" }}>
          {this.props.fruits.map((fruit, i) => {
            return (
              <ul key={fruit._id}>
                The <a href={`/fruits/${fruit.id}`}> {fruit.name}</a> is
                {" " + fruit.color}
                {fruit.readyToEat
                  ? ` - It is ready to eat`
                  : ` - It is not ready to eat`}
                <a href={`/fruits/${fruits.id}`}>
                  <img src={fruit.img}></img>
                </a>
              </ul>
            );
          })}
        </ol>
        <nav>
          {/* Create link to make a new shoe */}
          <a href="/fruits/new">Create New Shoes</a>
          <br />

          {/* Buy Button I could not figure out. Along with the inventory and subtraction. New link will redirect user to creating rather than buying. */}
          <a href="/fruits/new">Buy New Shoes</a>
          <br />

          {/* Delete link redirects to new page. Will use logic from w06d01 to a functional delete button. */}
          <a href="/fruits/new">Delete Shoes from Cart</a>
        </nav>
      {/* </div> */}
      </Default>
    );
  }
}

module.exports = Index;