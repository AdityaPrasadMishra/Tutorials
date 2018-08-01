// const user = {
//     name: 'Andrew',
//     age: '26',
//     location: 'philadelphia'

// };
// const userName = 'Adi';
// const userAge = 29
// const userLocation = 'Tempe'

// // var templateTwo = (
// //     <div>
// //         <h1>{userName.toUpperCase()}</h1>
// //         <p>Age: {userAge}</p>
// //         <p>Location: {userLocation}</p>
// //     </div>
// // );
// function getlocation(location) {
//     if (location) {
//         return location;
//     }

// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>
//         {(user.age && user.age >= 18) && <p>{user.age}</p>}
//         {getlocation(user.location)}
//     </div>
// );

// var templateTwo = (
//     <div>
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         <p>Location: {getlocation(user.location)}</p> 
//     </div>
// );
// Transformed Code

// var template = React.createElement(
//     'p',
//     null,
//     'something new'
//   );
// let count = 0;
// let someid = 'someidhere'
// const addOne = () => {
//     count++;
//     //console.log('addOne', count);
//     renderCounterApp()
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };



// //Virtual Dom algorithms to render only required elements... Highly efficient...

// const renderCounterApp = () => {
//     const templateTwo = (

//         <div>
//             <h1>Count: {count} </h1>
//             <button id={someid} onClick={addOne} className="button">
//                 +1
//             </button>
//             <button id='minusone' onClick={minusOne} className="button">
//                 -1
//             </button>
//             <button id='reset' onClick={reset} className="button">
//                 reset
//             </button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, approot);
// };

// renderCounterApp()

//Using Component State
class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : props.count
        };
    }
    
    handleAddOne(){        
        console.log('handleAddOne');
        this.setState((prevState)=>{
            return {
                count : prevState.count + 1
            }
        })
    };
    handleMinusOne(){
        console.log('handleMinusOne');
        this.setState((prevState)=>{
            return {
                count : prevState.count - 1
            }
        })
    };
    handleReset() {
        console.log('handleReset');
        this.setState(()=>{
            return {
                count : 0
            }
        })
    };
    render(){
    return(
         <div>
            <h1>Count: {this.state.count} </h1>
            <button id='addone' onClick={this.handleAddOne} count = {this.state.count} className="button" >
                +1
            </button>
            <button id='minusone' onClick={this.handleMinusOne} count = {this.state.count} className="button">
                -1
            </button>
            <button id='reset' onClick={this.handleReset} count = {this.state.count} className="button">
                reset
            </button>
        </div>

    )}

} 

Counter.defaultProps={
 count:0
}

ReactDOM.render(<Counter count={45}/>, document.getElementById('app'))