import React from 'React'

handleChange (e) (
    //not quite right... 
    this.setState = e.target.value 

)

render () {

<form> 
<input placeholder: 'type a todo item here'
//have to put the handleChange in here when it's done. 
</input>
</form> 
}

export default TodoForm 