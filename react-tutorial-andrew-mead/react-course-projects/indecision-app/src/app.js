// const obj ={
//     name :'Vikram',
// getName(){
//         return this.name;
//     }
// }

// //This Works
// console.log(obj.getName());

// //This does not work
// // let getName = obj.getName();
// // console.log(getName())

// //so we change to
// let getName = obj.getName.bind(obj);
// console.log(getName())

class InDecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state ={
        options :props.options
        }
    }
    handleDeleteOptions(){
        // this.setState(()=>{
        //     return{
        //         options:[]
        //     };
        // });
        this.setState(()=>({options:[]}))
    }

    handleDeleteOption(optionToRemove){
        //console.log('hdo',option)

        this.setState((prevstate)=>({
            options:prevstate.options.filter((option)=>{
                return optionToRemove !== option

            }
        )
        }))
    }

    handlePick(){
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item.';
        } else if(this.state.options.indexOf(option)>-1){
            return 'This option already exist';
        }
        // this.setState((prevState)=>{
        //     return{
        //         options:prevState.options.concat([option])
        //     };
        // })

          this.setState((prevState)=>({ options: prevState.options.concat([option])}))
    }
    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life on the hands of the computer';
        //<Header title={title} subTitle={subTitle} />
        return (
            <div>
            <Header />
            <Action hasOptions={this.state.options.length >0} 
            handlePick={this.handlePick}/>
            <Options options={this.state.options} 
             handleDeleteOptions ={this.handleDeleteOptions}
             handleDeleteOption ={this.handleDeleteOption}/>
            <AddOption handleAddOption ={this.handleAddOption}/>
            </div>
        )
    }
}

InDecisionApp.defaultProps={
    options : []

}

// class Header extends React.Component{
//     render(){
//         console.log(this.props);
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subTitle}</h2>
//             </div>
//         )
//     }
// }

const Header =(props) =>{
    return (
            <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
            </div>
        );
};

Header.defaultProps =
{
    title :'Indecision'

}
// class Action extends React.Component{

//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do ?</button>
//             </div> 
//         )
//     }
// }

//Classless Component

const Action = (props) =>{
        return(
            <div>
                <button onClick={props.handlePick} 
                disabled={!props.hasOptions}>What should I do ?</button>
            </div> 
        );
}

//With Bind
// class Options extends React.Component{
//     handleRemoveAll(){
//         //Lost the this binding
//             alert('handleRemoveAll');
//         //By using bind we will get it
//         console.log(this.props.options)
//         }
//     render(){
//         return(
//             <div>   
//             <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>         
//                 {

//                     this.props.options.map((option)=><Option key={option} optionText={option}/>)
//                 }
//             </div> 
//         )
//     }
// }

//With bind only in constructor
// class Options extends React.Component{
//     constructor(props)
//     {
//         super(props);
//     }
//     render(){
//         return(
//             <div>   
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>         
//                 {

//                     this.props.options.map((option)=><Option key={option} optionText={option}/>)
//                 }
//             </div> 
//         )
//     }
// }

const Options =(props)=>{
        return(
            <div>   
            <button onClick={props.handleDeleteOptions}>Remove All</button>         
                {

                    props.options.map((option)=>(
                        
                        <Option key={option}
                        handleDeleteOption ={props.handleDeleteOption}
                        optionText={option}/>
                    ))
                }
            </div> 
        )
    }
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div> 
//         )
//     }
// }


const Option =(props)=>{
    return(
            <div>
                {props.optionText}
                <button 
                onClick ={(e) =>{
                    props.handleDeleteOption(props.optionText)
                }}>
                Remove
                </button>
            </div> 
        )
}

class AddOption extends React.Component{
constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state={
        error : undefined
    };
}
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
       this.setState(() => ({error}))
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            </div> 
        )
    }
}

// const jsx =(
//     /*important - React Component must be in Upper Case Letter*/
//     <div>
//     <h1>Title</h1>
//     <Header/>
//     <Action/>
//     <Options/>
//     <AddOption/>
//     </div>
// );

// const User =(props) => {
//     return(
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         </div>
//     );
// };

//ReactDOM.render(<User name="Andrew" age={26}/>, document.getElementById('app'));

ReactDOM.render(<InDecisionApp options={['Devils Den','2nd District']}/>, document.getElementById('app'));