console.log('app.js is running');

//JSX - JavaScript XML
const app = {
    title: "This is the title",
    //subTitle: "Hey I am a subtitle",
    options: []

};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option)
        e.target.elements.option.value = '';
        render();
    }
    console.log(app.options)
};

const onRemoveAll = () => {
    app.options = [];
    console.log(app.options);
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    console.log(randomNum)
    alert(option);

}; 
const approot = document.getElementById('app');
//const numbers = [55,101,1000]

const render =() => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No Options"}</p>
            <p>{app.options.length}</p>
            <button disabled = {app.options.length === 0} id='random' onClick={onMakeDecision}>What should I do ?</button>
            <button id='remove' onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, approot)
}
render();

// Valid JSX Expressions
// {[99,98,97,'Mike', null, true, undefined]  
//  }
// {99}{98}{97}
//  {<p>123</p>}
// {
//                 [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
//             }
// {
//                 /*numbers.map((number) => {
//                     return <p key={number}>Number:{number}</p>
//                 })*/

//             }

