const InputBox = ({topLabel}) => {
    return ( 
        <div className="flex flex-col rounded-md bg-white text-black text-md p-4 ">
            <div className="text-xs text-gray-500 border-b px-2 border-gray-200" >{topLabel}</div>
            <div className="flex gap-4 text-md"><input type='number' value={0} className="flex-1 p-2 focus:outline-0" />
            <select name="currency" id="currency" >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes" selected>Mercedes</option>
  <option value="audi">Audi</option>
</select></div>
                    </div>
     );
}
 
export default InputBox;