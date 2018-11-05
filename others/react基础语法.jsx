//基础jsx
let style={
    color:'red',
    fontSize:'30px'
};
ReactDOM.render(
    <div>
        <i className="fa fa-camera-retro"></i>
        {/* 这是条件判断 */}        
        <h1>
            { flag?<p>i am {name}</p>:<p>i am not {name}</p>}
        </h1>
         {/* 这是数组循环 */}  
        <div>
            {names.map((name,index)=> 
                <p key={index}>
                    {name}
                </p>            
            )}
        </div>
    </div>,
    document.getElementById('app')
)


