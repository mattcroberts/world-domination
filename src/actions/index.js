export const nationClick = nationData => {
    console.log(nationData);
    return {
        type: 'NATION_CLICK',
        nation: {}
    };
};
