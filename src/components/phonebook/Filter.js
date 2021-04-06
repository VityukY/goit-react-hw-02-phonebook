const Filter = ({ value, onChange }) => {
   return (
      <label className="phonebook__filter">
         Find contacts by name
         <input type="text" value={value} onChange={onChange} />
      </label>
   );
};
export default Filter;
