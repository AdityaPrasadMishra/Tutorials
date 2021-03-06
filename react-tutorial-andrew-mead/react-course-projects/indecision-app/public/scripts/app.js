'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var InDecisionApp = function (_React$Component) {
    _inherits(InDecisionApp, _React$Component);

    function InDecisionApp(props) {
        _classCallCheck(this, InDecisionApp);

        var _this = _possibleConstructorReturn(this, (InDecisionApp.__proto__ || Object.getPrototypeOf(InDecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(InDecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(()=>{
            //     return{
            //         options:[]
            //     };
            // });
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            //console.log('hdo',option)

            this.setState(function (prevstate) {
                return {
                    options: prevstate.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exist';
            }
            // this.setState((prevState)=>{
            //     return{
            //         options:prevState.options.concat([option])
            //     };
            // })

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subTitle = 'Put your life on the hands of the computer';
            //<Header title={title} subTitle={subTitle} />
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return InDecisionApp;
}(React.Component);

InDecisionApp.defaultProps = {
    options: []

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

};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
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

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick,
                disabled: !props.hasOptions },
            'What should I do ?'
        )
    );
};

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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option,
                handleDeleteOption: props.handleDeleteOption,
                optionText: option });
        })
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div> 
//         )
//     }
// }


var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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

ReactDOM.render(React.createElement(InDecisionApp, { options: ['Devils Den', '2nd District'] }), document.getElementById('app'));
