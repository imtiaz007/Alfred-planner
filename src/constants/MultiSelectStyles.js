const customStyles = {
  multiValueLabel: (base) => ({
    ...base,
    color: '#F9FAFB',
    background: '#6366F1',
    paddingRight: '5px',
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: '#EF4444',
    background: '#D4D4D8',
  }),
  input: (base) => ({
    ...base,
    color: '#F9FAFB',
    border: 'none',
    outline: 'none',
  }),
  control: (base, state) => ({
    ...base,
    background: '#27272A',
    // color: "#F9FAFB",
    // match with the menu
    // borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    border: 0,
    // Overwrittes the different states of border
    // borderColor: state.isFocused ? "yellow" : "green",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base, state) => ({
    ...base,
    background: '#27272A',
    // override border radius to match the box
    borderRadius: 0,
    // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
    hyphens: 'auto',
    // kill the gap
    marginTop: 0,
    textAlign: 'left',
    // prevent menu to scroll y
    wordWrap: 'break-word',
  }),
  option: (base) => ({
    ...base,
    color: '#F9FAFB',
    '&:hover': {
      // Overwrittes the different states of border
      background: '#4B5563',
    },
    '&:not(:hover)': {
      // Overwrittes the different states of border
      background: '#27272A',
    },
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
};

export default customStyles;
