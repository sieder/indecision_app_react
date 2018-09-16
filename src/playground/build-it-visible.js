

let visibility = false;
const toggleButton = () => {
    visibility = !visibility;
    if (visibility) {
        renderApp();
    } else {
        renderApp();
    }
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    //JSX - Javascript XML
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleButton}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                <p>Hey, these are some details you can now see!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();