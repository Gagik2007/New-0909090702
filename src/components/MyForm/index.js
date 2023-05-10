
// function MyForm() {
//     return (
//          <form>
//           <label htmlFor="pass"></label>
//             <input type="password" id="pass" /><br></br>
//             <label htmlFor="email"></label>
//             <input type="email" id="email" />
//             <label htmlFor="check"></label><br></br>
//             <input type="checkbox" id="ckeck" />Remember
//             <button>Log In</button>
//          </form>
//     );
//   }
// function MyButton({title, handleClick}) {
//   return (
//        <form>
        
//           <button onClick = {handleClick}>{title}</button>
//        </form>
//   );
// }
// export default MyButton;
function MyForm({onChange, handleLogin}) {
  return (
       <form>
        <label htmlFor="pass"></label>
          <input type="password" id="pass" onInput={onChange} /><br></br>
          <label htmlFor="email"></label>
          <input type="email" id="email"  onInput={onChange}/>
          <label htmlFor="check"></label><br></br>
          <input type="checkbox" id="ckeck"  onChange={onChange}/>Remember
          <button onClick = {handleLogin}> Log In</button>
       </form>
  );
}
export default MyForm;