import { InputGroup,FormControl } from "react-bootstrap";
function Task(props){
    return(
        <>
          <div className={props.className}>
            {props.tasks.map((task)=>{
              return(
                <>
                  <div className="checklist">
                    <input type="checkbox"  
                      value={task} 
                      onChange={props.func} 
                      checked={props.checked}
                    />
                    <div value={task}>{task}</div>
                  </div>
                </>
              )
            })}
          </div>
        </>
    )
}
export default Task;
