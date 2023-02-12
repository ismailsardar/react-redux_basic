import Swal from 'sweetalert2'
import { editeTodos, removeTodos } from '../../reduxRabble/state/todo/todoSlice'
import store from '../../reduxRabble/store/store'

export const TodoDelete = (index)=> {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch(removeTodos(index));
            Swal.fire(
                'Deleted!',
                'Your Todo has been deleted.',
                'success'
              )     
        }
      })
      
}

export const TodoEidte = (i,item)=> {
    Swal.fire({
        title: 'Todo Update',
        input: 'text',
        inputValue: item,
        inputValidator: (value)=>{
            if (value) {
                store.dispatch(editeTodos({index:i,task:value}));
            }
        }
        
      })
      
}