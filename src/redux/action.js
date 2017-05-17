export const incrNum = () => ({ type: 'INCR' });

export const descNum = () => ({ type: 'DECS' });

export const changeColor = () => ({ type: 'CHANGE_COLOR' });

export const changeLength = (length) => ({ type: 'CHANGE_LENGTH', length });

export const getLength = () => {
    return (dispatch) => {
        fetch('http://app.nhodalat.com')
        .then(res => res.json())
        .then(resJSON => dispatch({ type: 'CHANGE_LENGTH', length: resJSON.type.length }));
    };
};

// export default actions;
