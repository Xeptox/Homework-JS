const root = ReactDOM.createRoot(document.getElementById('root'));

const Group = () => {
    const subTitle = 'Tel-Ran program';
    return (
        <div>
            <h1>FullStack 34-64</h1>
            <h2>{subTitle} - {Math.round(Math.random() * 10)}</h2>
        </div>
    )
}

root.render(
    <div>
        <Group/>
        <Group/>
        <Group/>
    </div>
);