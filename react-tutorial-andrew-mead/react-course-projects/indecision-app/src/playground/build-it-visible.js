// console.log('build-it-visible.js is running');
// const app = {
//     title: "Visibility Toggle",
//     //subTitle: "Hey I am a subtitle",
//     buttonText: "Show Title",
//     pText: ""

// };
// let showTitle = true;

// //const numbers = [55,101,1000]

// const onShowTitleClick = () => {
//     if(showTitle)
//     {
//         app.buttonText = 'Hide Title';
//         app.pText = "Hey, These are some details you can now see!";
//     }
//     else
//     {
//         app.buttonText = "Show Title";
//         app.pText = "";
//     }
//     showTitle = !showTitle;
//     console.log(showTitle);
//     render();
// };

// const approot = document.getElementById('app');
// const render =() => {
//     console.log("In render");
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button id='showTitle' onClick={onShowTitleClick}>{app.buttonText}</button>
//             <p id='details'>{app.pText}</p>
//         </div>
//     );
//     ReactDOM.render(template, approot)
// }
// render();

//using Component
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            title: "Visibility Toggle",

        };
    }

    handleToggleVisibility() {
        this.setState((prevstate)=>{
            return {
                visibility: !(prevstate.visibility)
            }

        })

    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button id='showTitle' onClick={this.handleToggleVisibility}>
                {this.state.visibility ?'Hide details':'Show details'}
                </button>
                {this.state.visibility && (
                <p id='details'>Hey, These are some details you can now see!</p>
                )
                }
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
